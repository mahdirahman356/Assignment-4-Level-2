import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { LiaBookSolid } from "react-icons/lia";
import { format } from "date-fns"
import { cn } from "@/lib/utils";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

type IProps = {
    bookId: string;
    availability: boolean
};


const BorrowBookModal = ({ bookId, availability }: IProps) => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const form = useForm()
    const [borrowBook] = useBorrowBookMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const borrowData = {
                book: bookId,
                ...data,
                dueDate: new Date(data.dueDate).toISOString(),
            };
            const res = await borrowBook(borrowData).unwrap();
            setOpen(false)
            console.log("Borrowed successfully", res);
            Swal.fire({
                title: `${res.message}`,
                icon: "success",
                draggable: true
            });
            form.reset()
            navigate("/borrow-summary");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button className="bg-[#1B1A55] text-white rounded-sm text-xl" variant="outline">
                        <LiaBookSolid />
                    </Button>
                </DialogTrigger>
                <DialogDescription className="sr-only">
                    Borrow Book
                </DialogDescription>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Borrow Book</DialogTitle>
                    </DialogHeader>
                    {!availability ? (
                        <div className="text-red-500 font-medium text-center py-4">
                            Books are not available right now.
                        </div>
                    ) : (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                                <FormField
                                    control={form.control}
                                    name="quantity"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>quantity</FormLabel>
                                            <FormControl>
                                                <Input  {...field}
                                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                                    value={field.value || ""} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="dueDate"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Return Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Return Date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        captionLayout="dropdown"
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormItem>
                                    )}
                                />
                                <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </form>
                        </Form>)}
                </DialogContent>
            </Dialog >
        </div>
    );
};

export default BorrowBookModal;
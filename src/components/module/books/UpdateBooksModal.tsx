import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useGetBookByIdQuery, useUpdateBookMutation } from "@/redux/api/baseApi";
import { useEffect, useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { AiTwotoneEdit } from "react-icons/ai";
import Swal from "sweetalert2";

type IProps = {
    id: string;
};


const UpdateBooksModal = ({ id }: IProps) => {
    const [open, setOpen] = useState(false)
    const form = useForm()
    const { data } = useGetBookByIdQuery(id)
    const [updateBook] = useUpdateBookMutation();


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const updatedData = {
                id,
                ...data,
            };
            const res = await updateBook(updatedData).unwrap();
            setOpen(false)
            console.log("Update successful", res);
            Swal.fire({
                title: `${res.message}`,
                icon: "success",
                draggable: true
            });
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        if (data?.data) {
            form.reset({
                title: data.data.title,
                description: data.data.description,
                author: data.data.author,
                isbn: data.data.isbn,
                copies: data.data.copies,
                genre: data.data.genre,
            });
        }
    }, [data, form]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#070F2B] text-white text-xl rounded-sm" variant="outline">
                    <AiTwotoneEdit />
                </Button>
            </DialogTrigger>
            <DialogDescription className="sr-only">
                Update Books
            </DialogDescription>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Books</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Author</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ISBN</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="copies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Copies</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Genre</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a Genre to set" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="FICTION">Fiction</SelectItem>
                                            <SelectItem value="NON_FICTION">Non Fiction</SelectItem>
                                            <SelectItem value="SCIENCE">Science</SelectItem>
                                            <SelectItem value="HISTORY">History</SelectItem>
                                            <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                                            <SelectItem value="FANTASY">Fantasy</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    );
};

export default UpdateBooksModal;
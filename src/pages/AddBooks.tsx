import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

const AddBooks = () => {

    const form = useForm()
    const [createBook] = useCreateBookMutation()


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const bookData = {
                ...data,
                available: true
            }
            console.log(bookData)
            const res = await createBook(bookData).unwrap()
            Swal.fire({
                title: `${res.message}`,
                icon: "success",
                draggable: true
            });
            console.log("Insite submit", res)
            form.reset()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="w-[85%] mx-auto my-16">
            <h1 className="text-4xl font-semibold text-center">Add Books</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="title"
                        rules={{ required: "Title is required" }}
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input {...field} value={field.value || ""} />
                                </FormControl>
                                {fieldState.error && (
                                    <p className="text-sm text-red-500">{fieldState.error.message}</p>
                                )}
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        rules={{ required: "Description is required" }}
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} value={field.value || ""} />
                                </FormControl>
                                {fieldState.error && (
                                    <p className="text-sm text-red-500">{fieldState.error.message}</p>
                                )}
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="author"
                        rules={{ required: "Author name is required" }}
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Author</FormLabel>
                                <FormControl>
                                    <Input {...field} value={field.value || ""} />
                                </FormControl>
                                {fieldState.error && (
                                    <p className="text-sm text-red-500">{fieldState.error.message}</p>
                                )}
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="isbn"
                        rules={{ required: "ISBN is required" }}
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>ISBN</FormLabel>
                                <FormControl>
                                    <Input {...field} value={field.value || ""} />
                                </FormControl>
                                {fieldState.error && (
                                    <p className="text-sm text-red-500">{fieldState.error.message}</p>
                                )}
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="copies"
                        rules={{ required: "Copies is required" }}
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Copies</FormLabel>
                                <FormControl>
                                    <Input  {...field}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                        value={field.value || ""} />
                                </FormControl>
                                {fieldState.error && (
                                    <p className="text-sm text-red-500">{fieldState.error.message}</p>
                                )}
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="genre"
                        rules={{ required: "Genre is required" }}
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Genre</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                                {fieldState.error && (
                                    <p className="text-sm text-red-500">{fieldState.error.message}</p>
                                )}
                            </FormItem>
                        )}
                    />
                    <DialogFooter>
                        <Button className="px-10 py-6 text-xl" type="submit">Add</Button>
                    </DialogFooter>
                </form>
            </Form>
        </div>
    );
};

export default AddBooks;
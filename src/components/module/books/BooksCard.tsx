import type { IBooks } from "@/types";
import { LiaBookSolid } from "react-icons/lia";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import UpdateBooksModal from "./UpdateBooksModal";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { Button } from "@/components/ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2'
import BorrowBookModal from "../borrow/BorrowBookModal";
import BooksDetailsModal from "./BooksDetailsModal";



interface BooksCardProps {
    books: IBooks;
}

const BooksCard = ({ books }: BooksCardProps) => {

    const [deleteBook] = useDeleteBookMutation();

    const handleDelete = async () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteBook(books._id).unwrap();
                    console.log("Book deleted");
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your book has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error("Failed to delete", error);
                }
            }
        });
    };


    return (
        <div>
            <div className="w-full overflow-hidden bg-white shadow-lg">
                <div className="flex items-start px-6 py-3 bg-gray-900">
                    <div>
                        <LiaBookSolid className="text-white text-3xl" />
                    </div>
                    <h1 className="mx-3 text-lg font-semibold text-white">{books.title} <span className="text-red-500">{books.available === true ? "" : "Unavailable"}</span></h1>
                </div>

                <div className="px-6 py-4">
                    <div className="flex items-center mt-4 text-gray-700 ">
                        <div>
                            <VscDebugBreakpointDataUnverified className="text-xl" />
                        </div>
                        <h1 className="px-2 text-sm"><span className="font-semibold text-blue-500">Author</span> {books.author}</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-700 ">
                        <div>
                            <VscDebugBreakpointDataUnverified className="text-xl" />
                        </div>
                        <h1 className="px-2 text-sm"><span className="font-semibold text-blue-500">Genre</span> {books.genre}</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-700 ">
                        <div>
                            <VscDebugBreakpointDataUnverified className="text-xl" />
                        </div>
                        <h1 className="px-2 text-sm"><span className="font-semibold text-blue-500">ISBN</span> {books.isbn} </h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-700 ">
                        <div>
                            <VscDebugBreakpointDataUnverified className="text-xl" />
                        </div>
                        <h1 className="px-2 text-sm"><span className="font-semibold text-blue-500">Copies</span> {books.copies} </h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-700 ">
                        <div>
                            <VscDebugBreakpointDataUnverified className="text-xl" />
                        </div>
                        <h1 className="px-2 text-sm font-semibold"><span className="font-semibold text-blue-500">Availability</span> {books.available === true ? "Available" : "Not Available"} </h1>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <UpdateBooksModal id={books._id} />
                        <Button onClick={handleDelete} className="bg-red-500 text-xl text-white rounded-sm" variant="outline">
                            <RiDeleteBin6Line />
                        </Button>
                        <BorrowBookModal bookId={books._id} availability={books.available} />
                        <BooksDetailsModal bookDId={books._id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;
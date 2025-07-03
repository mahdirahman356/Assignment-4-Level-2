import type { IBorrowedBooks } from "@/types";
import { LiaBookSolid } from "react-icons/lia";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

interface IProps {
   borrow: IBorrowedBooks;
}


const BorrowedBooksCard = ({borrow}: IProps) => {
    return (
        <div className="w-full h-[250px] overflow-hidden bg-white shadow-lg">
            <div className="flex items-start px-6 py-3 bg-gray-900">
                <div>
                    <LiaBookSolid className="text-white text-3xl" />
                </div>
                <h1 className="mx-3 text-lg font-semibold text-white"> {borrow.book.title} </h1>
            </div>

            <div className="px-6 py-4">
                <div className="flex items-center mt-4 text-gray-700 ">
                    <div>
                        <VscDebugBreakpointDataUnverified className="text-xl" />
                    </div>
                    <h1 className="px-2 text-sm"><span className="font-semibold text-blue-500">ISBN</span> {borrow.book.isbn} </h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700 ">
                    <div>
                        <VscDebugBreakpointDataUnverified className="text-xl" />
                    </div>
                    <h1 className="px-2 text-sm"><span className="font-semibold text-blue-500">Total Borrowed Books</span> {borrow.totalQuantity} </h1>
                </div>
            </div>
        </div>
    );
};

export default BorrowedBooksCard;
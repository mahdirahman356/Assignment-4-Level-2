import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useGetBookByIdQuery } from "@/redux/api/baseApi";
import { LuEye } from "react-icons/lu";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
type IProps = {
    bookDId: string;
};
const BooksDetailsModal = ({ bookDId }: IProps) => {

    const { data } = useGetBookByIdQuery(bookDId)
    console.log(data)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-[#535C91] text-white rounded-sm text-xl" variant="outline">
                    <LuEye />
                </Button>
            </DialogTrigger>
            <DialogDescription className="sr-only">
                Book Details
            </DialogDescription>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Book Details</DialogTitle>
                </DialogHeader>
                <div className="w-full overflow-hidden bg-white">
                    <div className="px-6 py-4">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{data?.data?.title}</h1>
                        <p className="py-2 text-gray-700 dark:text-gray-400">{data?.data?.description}</p>

                        <div className="flex items-center mt-4 text-gray-700 ">
                            <div>
                                <VscDebugBreakpointDataUnverified className="text-xl" />
                            </div>
                            <h1 className="px-2 text-sm"><span className="font-semibold text-blue-500">Author</span> {data?.data?.author}</h1>
                        </div>
                        <div className="flex items-center mt-4 text-gray-700 ">
                            <div>
                                <VscDebugBreakpointDataUnverified className="text-xl" />
                            </div>
                            <h1 className="px-2 text-sm"><span className="font-semibold text-blue-500">Genre</span> {data?.data?.genre}</h1>
                        </div>
                        <div className="flex items-center mt-4 text-gray-700 ">
                            <div>
                                <VscDebugBreakpointDataUnverified className="text-xl" />
                            </div>
                            <h1 className="px-2 text-sm"><span className="font-semibold text-blue-500">ISBN</span> {data?.data?.isbn} </h1>
                        </div>
                        <div className="flex items-center mt-4 text-gray-700 ">
                            <div>
                                <VscDebugBreakpointDataUnverified className="text-xl" />
                            </div>
                            <h1 className="px-2 text-sm"><span className="font-semibold text-blue-500">Copies</span> {data?.data?.copies} </h1>
                        </div>
                        <div className="flex items-center mt-4 text-gray-700 ">
                            <div>
                                <VscDebugBreakpointDataUnverified className="text-xl" />
                            </div>
                            <h1 className="px-2 text-sm font-semibold"><span className="font-semibold text-blue-500">Availability</span> {data?.data?.available === true ? "Available" : "Not Available"} </h1>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog >
    );
};

export default BooksDetailsModal;
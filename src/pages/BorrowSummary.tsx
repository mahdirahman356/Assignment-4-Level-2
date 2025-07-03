import BorrowedBooksCard from "@/components/module/borrow/BorrowedBooksCard";
import { useGetBorrowBooksQuery } from "@/redux/api/baseApi";
import type { IBorrowedBooks } from "@/types";

const BorrowSummary = () => {

    const { data } = useGetBorrowBooksQuery(undefined)
    console.log(data)

    return (
        <div>
            <section className="h-screen">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                        Your Borrow Summary
                    </h1>
                    <p className="px-8 text-sm md:text-lg mt-8 mb-12">
                        Review the books you've borrowed and track their return status. Keep an eye on due dates and manage your current borrowed items all in one place.
                    </p>
                </div>
            </section>

            <div className="w-[85%] mx-auto mb-10">
                <h3 className="text-3xl font-bold mb-8">
                    Borrowed Books <br />Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {data?.data?.map((borrow: IBorrowedBooks) => (
                        <BorrowedBooksCard key={borrow._id} borrow={borrow} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default BorrowSummary;
import BooksCard from "@/components/module/books/BooksCard";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBooks } from "@/types";

const AllBooks = () => {

    const { data } = useGetBooksQuery(undefined)

    console.log(data)
    return (
        <div>
            <section className="h-screen">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                        Explore All Books
                    </h1>
                    <p className="px-8 text-sm md:text-lg mt-8 mb-12">
                        Browse our full collection of books across all genres. Whether you're into fiction, non-fiction, thrillers, or self-help—there’s something here for every reader.
                    </p>
                </div>
            </section>

            <div className="w-[85%] mx-auto mb-10">
                <h3 className="text-3xl font-bold mb-8">
                    Discover Your <br /> Next Book
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {data?.data?.map((books: IBooks) => (
                        <BooksCard key={books._id} books={books} />
                    ))}
                </div>
            </div>
        </div>


    );
};

export default AllBooks;
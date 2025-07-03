
const BorrowSummary = () => {
    return (
        <section className="h-screen">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                   Your Borrow Summary
                </h1>
                <p className="px-8 mt-8 mb-12 text-lg">
                    Review the books you've borrowed and track their return status. Keep an eye on due dates and manage your current borrowed items all in one place.
                </p>
                <div className="flex flex-wrap justify-center">
                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded ">Get started</button>
                    <button className="px-8 py-3 m-2 text-lg border rounded">Learn more</button>
                </div>
            </div>
        </section>
    );
};

export default BorrowSummary;
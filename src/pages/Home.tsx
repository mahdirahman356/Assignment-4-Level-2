
const Home = () => {
    return (
        <section className="h-screen">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                   Welcome to Book Lovers
                </h1>
                <p className="px-8 mt-8 mb-12 text-lg">
                    Discover your next great read. Explore a world of stories, knowledge, and imagination—all in one place. From timeless classics to modern bestsellers, find books that match your passion.
                </p>
                <div className="flex flex-wrap justify-center">
                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded ">Get started</button>
                    <button className="px-8 py-3 m-2 text-lg border rounded">Learn more</button>
                </div>
            </div>
        </section>
    );
};

export default Home;
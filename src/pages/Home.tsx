
const Home = () => {
    return (
        <section className="h-screen">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                   Welcome to Book Lovers
                </h1>
                <p className="px-8 text-sm md:text-lg mt-8 mb-12">
                    Discover your next great read. Explore a world of stories, knowledge, and imagination—all in one place. From timeless classics to modern bestsellers, find books that match your passion.
                </p>
            </div>
        </section>
    );
};

export default Home;
export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">
                            Hi, I'm
                        </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {' '}
                            Ahmet
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">
                            {' '}
                            Karaca
                        </span>
                        <span></span>
                    </h1>
                    <p>
                        I&apos;m a passionate Software Engineering student and
                        full-stack developer with experience in many frameworks,
                        languages and cloud technologies who loves turning ideas
                        into reality.
                    </p>
                </div>
            </div>
        </section>
    );
};

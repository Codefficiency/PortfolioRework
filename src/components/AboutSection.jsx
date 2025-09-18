import { Briefcase, Code, User } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {' '}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Full-Stack Dev & Software Engineering
                            Student{' '}
                        </h3>
                        <p className="text-muted=foreground">
                            I&apos;ve built and maintained production-ready
                            applications with a focus on building scalable
                            backend systems and intuitive mobile/web interfaces
                            with my experience through many frameworks and cloud
                            services.
                        </p>

                        <p className="text-muted-foreground">
                            I&apos;m passionate about creating elegant and
                            reliable solutions to complex problems - whether
                            it&apos;s designing intuitive pages, building
                            efficient databases, or integrating powerful APIs.
                            I&apos;m continuously learning new frameworks,
                            tools, and best practices to stay ahead in the
                            ever-evolving world of web and mobile development.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {' '}
                                Get In Touch
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transit-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"></Code>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Full-Stack Dev
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and
                                        applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"></User>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Backend Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Developing secure and efficient
                                        server-side systems that integrate
                                        databases and APIs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Experience
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Applying engineering skills through
                                        academic projects and internships.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

import { Briefcase, Code, User, BookOpen, FolderOpen } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                {/* Top two-column section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Full-Stack Dev & Software Engineering Student
                        </h3>

                        <p className="text-muted-foreground">
                            I&apos;ve built and maintained production-ready
                            applications with a focus on building scalable
                            backend systems and intuitive mobile/web interfaces
                            with my experience through many frameworks and cloud
                            services.
                        </p>

                        <p className="text-muted-foreground">
                            I&apos;m passionate about creating elegant and
                            reliable solutions to complex problems — whether
                            it&apos;s designing intuitive pages, building
                            efficient databases, or integrating powerful APIs.
                            I&apos;m continuously learning new frameworks,
                            tools, and best practices to stay ahead in the
                            ever-evolving world of web and mobile development.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a
                                href="/AKResume.pdf"
                                download="AKResume.pdf"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Full-Stack Dev
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Backend Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Developing secure and efficient server-side systems that integrate databases and APIs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Experience
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Applying engineering skills through academic projects and internships.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 pt-6">
                    <details className="group gradient-border p-6 rounded-xl">
                        <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-lg">
                            <h3 className="text-2xl font-semibold"> <span className="text-primary"> More </span>About Me</h3>
                            <span className="transition-transform duration-300 group-open:rotate-180">
                                ▼
                            </span>
                        </summary>

                        <div className="mt-4 space-y-4 text-muted-foreground leading-7">
                            <p>
                                I&apos;m someone who loves optimizing systems and squeezing out performance from anything I do, whether it be coding or even my own habits. That passion can be reflected in my GitHub name, <span className="text-primary font-medium">Codefficiency</span>, which captures how I think deep down when approaching a problem: “How can this be more refined and how would I be able to scale it in the future” and make things better than they were before.
                            </p>

                            <p>
                                I enjoy building software, solving engineering problems, lifting, martial arts, and working on projects to improve my life. What makes me unique is my blend of engineering discipline and thinking along with my social skills and hard-working drive paired with my efficiency-focused mindset.
                            </p>

                            <p>
                                I grew up in Turkey and moved to Canada at the age of 12. I was always a talkative person and had the top grades in English class back in Turkey so I didn’t struggle much making friends and working out my accent. Growing up in Istanbul I realised one thing, hard work isn’t the only thing that matters — working smart is. This helped me grow into the person I am today, where I both work hard and work in a smart manner to reach my goals.
                            </p>

                            <p>
                                I chose York University because of its strong engineering program and its location being close to home and my workplace, allowing me to work while I study to pay my tuition. Lassonde also stood out to me because it encourages students not just to learn theory but to build on it and apply it. There are application-building courses where the entire course is teaching you full stack development, which was a very nice way to get introduced to programming actual applications.
                            </p>

                            <p>
                                My inspiration is my grade 6 tech class teacher, who taught me how to use SQL injections to hack into databases and introduced me to the Linux operating system. Ever since then I learned Visual Basic as a kid and worked on small console applications before I moved to Canada. I thought he was the coolest teacher ever and decided to become a software engineer, and I have worked hard toward that goal ever since.
                            </p>
                        </div>
                    </details>

                    <details className="group gradient-border p-6 rounded-xl">
                        <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-lg">
                            Artifact Reflection
                            <span className="transition-transform duration-300 group-open:rotate-180">
                                ▼
                            </span>
                        </summary>

                        <div className="mt-4 space-y-4 text-muted-foreground leading-7">
                            <div className="w-200 h-100 mx-auto overflow-hidden rounded">
                                <a href="https://github.com/codefficiency">
                                    <img
                                        src="/Artifact.png"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </a>
                            </div>
                            <p>
                                This artifact represents my growth as a coder during the summer. I decided to work for a small startup and then later on decided to make my own with 6 other people. Before the summer of 2025 I had no idea how to code something ready for production, and after chipping away at building something day by day I improved my skills greatly.
                            </p>

                            <p>
                                Over time, I developed to a point where my peers now come to me regularly for questions related to backend development, and I often discuss code for hours at a time. That growth is one of the main reasons I chose this artifact.
                            </p>

                            <p>
                                I chose my GitHub profile as my artifact since it shows that I have made roughly one commit per day in the last year, displaying both my persistence and the growth of my passion. Each commit represents learning and progress, even on a small scale.
                            </p>

                            <p>
                                I used to avoid committing unless I had something fully functional, to the point where some of my branches would only end up with one commit. That is still a habit I am improving, but it also reflects how much I care about making sure what I build works properly before I consider it complete.
                            </p>

                            <p>
                                The name <span className="text-primary font-medium">Codefficiency</span>, which has been my name since high school, symbolizes my mindset from a very early point in my career: continuously improving systems and striving for better, more efficient solutions.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};
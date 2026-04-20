import { ArrowRight, ExternalLink, Github, GithubIcon } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'vexo.gg',
        description:
            'This project represents my growth into a full-stack developer working on production-level systems. Vexo is a personal finance platform designed to act as an AI-powered financial advisor, where I contributed to backend architecture, API design, and secure data handling. This experience shows my ability to build scalable systems and work in a real startup environment.',
        image: '/projects/vexoSS.png',
        tags: ['React Native', 'Firebase', 'JavaScript'],
        demoUrl: 'https://vexo.gg',
        githubUrl: 'https://github.com/VexoLabs/vexo-app',
    },
    {
        id: 2,
        title: 'Plant Watering System',
        description:
            'This project demonstrates my ability to combine software with real-world problem solving. I built an automated plant watering system that monitors soil conditions and triggers watering based on predefined thresholds. It reflects my interest in building practical systems and integrating logic with hardware, while also reinforcing concepts of automation and efficiency.',
        image: '/projects/plantWatering.jpg',
        tags: ['Embedded Systems', 'Automation', 'Sensors'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 3,
        title: 'YorkU Schedule Builder',
        description:
            'This project showcases my experience working in a team to build a full-stack application. The YorkU Schedule Builder allows students to plan courses, manage schedules, and collaborate with friends. Through this project, I developed skills in backend development, database design, authentication, and working in an agile team environment using Git workflows.',
        image: '/projects/yorkuSchedule.png',
        tags: ['React', 'Node.js', 'SQL', 'Full-Stack'],
        demoUrl: '#',
        githubUrl: '#',
    },
];
export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {' '}
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects. More to come in the future -
                    working on a Java + AWS project currently along with my
                    crown jewel,{' '}
                    <a
                        href="https://vexo.gg"
                        className="hover:text-primary transition-colors duration-300"
                    >
                        Vexo
                    </a>
                    - An experience that started off as an internship which then
                    turned into co-ownership due to my exceeding performance.
                </p>
                {/* Modify the card width at home with 1920px monitor */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover max-w-sm mx-auto"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl text-muted-secondary font-semibold mb-1">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="hover:text-primary transition-colors duration-300"
                                    >
                                        {project.title}
                                    </a>
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                            </div>
                            {/* <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div> */}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/Codefficiency"
                    >
                        <GithubIcon size={20} />
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

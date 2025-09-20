import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'vexo.gg',
        description:
            'Vexo is a full-stack personal finance platform designed to act as an AI-powered financial adwisor for individuals.',
        image: '/projects/vexoSS.png',
        tags: ['React Native', 'Firebase', 'JavaScript'],
        demoUrl: 'https://vexo.gg',
        githubUrl: 'https://github.com/VexoLabs/vexo-app',
    },
    // {
    //     id: 2,
    //     title: 'vexo.gg',
    //     description:
    //         'Vexo is a full-stack personal finance platform designed to act as an AI-powered financial adwisor for individuals.',
    //     image: '/projects/vexoGG.png',
    //     tags: ['React Native', 'Firebase', 'JavaScript', 'OpenAI', 'Plaid'],
    //     demoUrl: 'vexo.gg',
    //     githubUrl: 'https://github.com/VexoLabs/vexo-app',
    // },
    // {
    //     id: 3,
    //     title: 'vexo.gg',
    //     description:
    //         'Vexo is a full-stack personal finance platform designed to act as an AI-powered financial adwisor for individuals.',
    //     image: '/projects/vexoGG.png',
    //     tags: ['React Native', 'Firebase', 'JavaScript', 'OpenAI', 'Plaid'],
    //     demoUrl: 'vexo.gg',
    //     githubUrl: 'https://github.com/VexoLabs/vexo-app',
    // },
];
export const ProjectsSection = () => {
    return (
        <section id="projects" classname="py-24 px-4 relative">
            <div clasName="container mx-auto max-w-5xl">
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
                    .
                </p>
                {/* Modify the card width at home with 1920px monitor */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
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
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

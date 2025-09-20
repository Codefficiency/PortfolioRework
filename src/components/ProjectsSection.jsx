const projects = [
    {
        id: 1,
        title: 'vexo.gg',
        description:
            'Vexo is a full-stack personal finance platform designed to act as an AI-powered financial adwisor for individuals.',
        image: '/projects/vexoGG.png',
        tags: ['React Native', 'Firebase', 'JavaScript', 'OpenAI', 'Plaid'],
        demoUrl: 'vexo.gg',
        githubUrl: 'https://github.com/VexoLabs/vexo-app',
    },
    {
        id: 2,
        title: 'vexo.gg',
        description:
            'Vexo is a full-stack personal finance platform designed to act as an AI-powered financial adwisor for individuals.',
        image: '/projects/vexoGG.png',
        tags: ['React Native', 'Firebase', 'JavaScript', 'OpenAI', 'Plaid'],
        demoUrl: 'vexo.gg',
        githubUrl: 'https://github.com/VexoLabs/vexo-app',
    },
    {
        id: 3,
        title: 'vexo.gg',
        description:
            'Vexo is a full-stack personal finance platform designed to act as an AI-powered financial adwisor for individuals.',
        image: '/projects/vexoGG.png',
        tags: ['React Native', 'Firebase', 'JavaScript', 'OpenAI', 'Plaid'],
        demoUrl: 'vexo.gg',
        githubUrl: 'https://github.com/VexoLabs/vexo-app',
    },
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
                    <a href="https://vexo.gg" className="text-primary">
                        vexo
                    </a>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover max-w-md mx-auto"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

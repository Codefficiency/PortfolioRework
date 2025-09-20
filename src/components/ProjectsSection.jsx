const projects = [
    {
        id: 1,
        title: 'vexo.gg',
        description:
            'Vexo is a full-stack personal finance platform designed to act as an AI-powered financial adwisor for individuals.',
        image: '/projects/vexo,gg',
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
            </div>
        </section>
    );
};

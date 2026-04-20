import { Briefcase, GraduationCap, FileText } from 'lucide-react';

const experiences = [
    {
        title: 'Database Administrator / Software Engineer',
        company: 'Public & Business Services & Procurement',
        type: 'Co-op',
        date: 'Jan 2026 – Present',
        points: [
            'Developing an AI-backed Python daemon for the DBA team to automate the assignment and execution of tasks.',
            'Supporting database and software workflow improvements through automation and data-driven tooling.',
            'Applying Python, Pandas, and software engineering skills in a professional co-op environment.',
        ],
    },
    {
        title: 'Full Stack Developer',
        company: 'Vexo Labs Inc.',
        type: 'Internship',
        date: 'Apr 2025 – Present',
        points: [
            'Built full-stack features for a finance app using React Native, Node.js, and Firebase, supporting multi-budget tracking and real-time updates.',
            'Implemented secure server-side logic such as webhook verification, validation, and role-aware flows to improve reliability and reduce client-side risk.',
            'Designed and documented RESTful APIs integrating Plaid for live financial data with consistent error handling and data reconciliation.',
            'Migrated sensitive logic from client-side to server-side functions to improve scalability.',
            'Translated Figma designs into fully functional interactive pages and modals.',
        ],
    },
    {
        title: 'Automotive Parts Advisor',
        company: 'Canadian Tire Corporation',
        type: 'Permanent Part-time',
        date: 'Apr 2024 – Present',
        points: [
            'Provided expert advice on a wide range of vehicle-specific parts, fluids, and maintenance products.',
            'Built strong customer relationships by offering real-time automotive solutions using in-store catalog systems.',
            'Managed inventory requests and processed transactions efficiently using POS systems.',
            'Balanced customer needs during peak hours using product knowledge, decision-making, and communication skills.',
        ],
    },
    {
        title: 'Computing Solutions Advisor',
        company: 'Best Buy Canada',
        type: 'Seasonal',
        date: 'Jul 2023 – Jan 2024',
        points: [
            'Built strong customer relationships through knowledgeable computer support and technical guidance.',
            'Processed orders and payments accurately for products, warranties, and services.',
            'Wrote detailed technical specifications for online product listings.',
            'Handled multiple customers efficiently in a fast-paced retail environment.',
        ],
    },
    {
        title: 'Junior Cloud Developer',
        company: 'Deop Inc.',
        type: 'Intern',
        date: 'Sep 2022 – Jun 2023',
        points: [
            'Worked in a cloud-focused internship environment and gained early professional software development experience.',
            'Contributed to technical tasks while building practical experience in software and cloud development workflows.',
        ],
    },
];

export const CareerSection = () => {
    return (
        <section id="career" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Career</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                    This section highlights my education, professional experience,
                    and the skills I have developed through academic, technical,
                    and customer-facing roles. Together, these experiences show my
                    growth as a software engineering student and as a developing
                    professional.
                </p>

                <div className="space-y-10">
                    <div className="gradient-border p-8 rounded-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-full bg-primary/10">
                                <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold">Education</h3>
                        </div>

                        <div className="space-y-4 text-muted-foreground leading-7">
                            <div>
                                <h4 className="text-lg font-semibold text-foreground">
                                    Honours Bachelor of Engineering in Software Engineering
                                </h4>
                                <p>York University, Toronto</p>
                                <p>Expected 2027</p>
                            </div>

                            <div>
                                <p className="font-medium text-foreground mb-2">
                                    Selected Courses
                                </p>
                                <p>
                                    Data Structures &amp; Algorithms, Advanced Object-Oriented
                                    Programming, Operating Systems, Computer Architecture,
                                    and Database Management Systems
                                </p>
                            </div>

                            <div>
                                <p className="font-medium text-foreground mb-2">
                                    Selected Academic Project
                                </p>
                                <p>
                                    <span className="font-medium text-foreground">
                                        York Scheduling Tool:
                                    </span>{' '}
                                    Built a full-featured course scheduling web app
                                    using React, Node.js, and Express, allowing
                                    students to plan semesters, add friends, and view
                                    shared schedules collaboratively. Worked in a team
                                    of 4 using agile practices, Git branching, pull
                                    request reviews, authentication, SQL data storage,
                                    and privacy settings.
                                </p>
                            </div>
                        </div>
                    </div>

                    <details className="group gradient-border p-8 rounded-xl">
                        <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-lg">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-semibold">
                                    <span className="text-primary">Experience</span>
                                </h3>
                            </div>

                            <span className="transition-transform duration-300 group-open:rotate-180">
                                ▼
                            </span>
                        </summary>

                        <div className="space-y-8 mt-6">
                            {experiences.map((job, index) => (
                                <div
                                    key={index}
                                    className="border-b border-border last:border-b-0 pb-8 last:pb-0"
                                >
                                    <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-3">
                                        <div className="text-left">
                                            <h4 className="text-lg font-semibold text-foreground leading-tight">
                                                {job.title}
                                            </h4>

                                            <p className="text-primary font-medium">
                                                {job.company}{' '}
                                                <span className="text-muted-foreground">
                                                    — {job.type}
                                                </span>
                                            </p>
                                        </div>

                                        <p className="text-sm text-muted-foreground md:text-right">
                                            {job.date}
                                        </p>
                                    </div>

                                    <ul className="space-y-2 text-muted-foreground leading-7 list-disc pl-5">
                                        {job.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </details>

                </div>
            </div>
        </section>
    );
};
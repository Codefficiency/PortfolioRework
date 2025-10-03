import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
    Box,
    CloudCog,
    Code2,
    Figma,
    FileJson,
    Flame,
    GitBranch,
    Info,
    Layers,
    Palette,
    Server,
} from 'lucide-react';
const skills = [
    // Front End
    {
        name: 'HTML/CSS',
        icon: Code2,
        category: 'frontend',
        proficiency: 'Expert',
    },
    {
        name: 'JavaScript',
        icon: FileJson,
        category: 'frontend',
        proficiency: 'Expert',
    },
    {
        name: 'React',
        icon: Layers,
        category: 'frontend',
        proficiency: 'Expert',
    },
    {
        name: 'React Native',
        icon: Box,
        category: 'frontend',
        proficiency: 'Expert',
    },
    {
        name: 'TypeScript',
        icon: FileJson,
        category: 'frontend',
        proficiency: 'Expert',
    },
    {
        name: 'Tailwind CSS',
        icon: Palette,
        category: 'frontend',
        proficiency: 'Expert',
    },

    // Backend
    {
        name: 'Node.js',
        icon: Server,
        category: 'backend',
        proficiency: 'Expert',
    },
    {
        name: 'Express',
        icon: Server,
        category: 'backend',
        proficiency: 'Expert',
    },
    {
        name: 'Firestore',
        icon: Flame,
        category: 'backend',
        proficiency: 'Expert',
    },

    //Utils
    {
        name: 'Git/GitHub',
        icon: GitBranch,
        category: 'tools',
        proficiency: 'Expert',
    },
    { name: 'Figma', icon: Figma, category: 'tools', proficiency: 'Expert' },
    {
        name: 'Firebase',
        icon: CloudCog,
        category: 'tools',
        proficiency: 'Expert',
    },
];
const categories = ['all', 'frontend', 'backend', 'tools'];
export const SkillSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const [activeCategory, setActiveCategory] = useState('all');
    // const [showNote, setShowNote] = useState(false);
    const [showAll, setShowAll] = useState(false);

    const filteredSkills = skills.filter(
        (skill) => activeCategory === 'all' || skill.category === activeCategory
    );

    const getCardsPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 640) return 2;
        }
        return 1;
    };
    const [cardsPerView, setCardsPerView] = useState(getCardsPerView);

    useEffect(() => {
        const handleResize = () => {
            setCardsPerView(getCardsPerView());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, filteredSkills.length - cardsPerView);

    useEffect(() => {
        setCurrentIndex(0);
    }, [activeCategory]);

    useEffect(() => {
        if (
            !isPaused &&
            !showAll &&
            filteredSkills.length > cardsPerView &&
            maxIndex > 0
        ) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    if (prevIndex >= maxIndex) {
                        return 0;
                    }
                    return prevIndex + 1;
                });
            }, 3500);
            return () => clearInterval(interval);
        }
    }, [maxIndex, isPaused, filteredSkills.length, cardsPerView, showAll]);

    const goNext = () => {
        setCurrentIndex((prevIndex) => {
            if (maxIndex === 0) return 0;
            if (prevIndex >= maxIndex) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => {
            if (maxIndex === 0) return 0;
            if (prevIndex <= 0) {
                return maxIndex;
            }
            return prevIndex - 1;
        });
    };
    const getProficiencyColor = (proficiency) => {
        switch (proficiency) {
            case 'Expert':
                return 'bg-purple-100 text-purple-700';
            case 'Advanced':
                return 'bg-blue-100 text-blue-700';
            case 'Intermediate':
                return 'bg-green-100 text-green-700';
            default:
                return 'bg-yellow-100 text-yellow-700';
        }
    };
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                    {/*
                    Reworking-Button 
                    <button
                        onMouseEnter={() => setShowNote(true)}
                        onMouseLeave={() => setShowNote(false)}
                        className="relative"
                    >
                        <Info className="w-5 h-5 text-muted-foreground hover:text-primary" />
                        <div
                            className={cn(
                                'absolute left-full -translate-x-1/2 mt-1 w-max bg-card',
                                'text-sm text-foreground px-3 py-2 rounded-md shadow-lg border z-10 transition-all duration-300',
                                showNote
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-1 pointer-events-none'
                            )}
                        >
                            Note: Skills will be reworked soon!
                        </div>
                    </button> 
                    */}
                </h2>
                {/* Category Filter Pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full transition-all duration-300 capitalize ${
                                activeCategory === category
                                    ? 'bg-primary text-primary-foreground shadow-lg'
                                    : 'bg-card text-foreground border border-border hover:border-primary/50'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {!showAll ? (
                    <>
                        {/* Slideshow Container */}
                        <div
                            className="relative overflow-hidden rounded-2xl p-6 bg-card shadow-lg border border-border"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {/* Cards Container */}
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{
                                    transform: `translateX(-${
                                        currentIndex * (100 / cardsPerView)
                                    }%)`,
                                    width: `${
                                        (filteredSkills.length * 100) /
                                        cardsPerView
                                    }%`,
                                }}
                            >
                                {filteredSkills.map((skill, index) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="px-3"
                                            style={{
                                                width: `${
                                                    100 / filteredSkills.length
                                                }%`,
                                            }}
                                        >
                                            <div className="bg-card p-6 rounded-lg shadow-md card-hover border border-border h-40 flex flex-col items-center justify-center">
                                                <IconComponent className="w-12 h-12 text-primary mb-3" />
                                                <h3 className="font-semibold text-lg text-foreground mb-2 text-center">
                                                    {skill.name}
                                                </h3>
                                                <span
                                                    className={`text-xs font-medium px-3 py-1 rounded-full ${getProficiencyColor(
                                                        skill.proficiency
                                                    )}`}
                                                >
                                                    {skill.proficiency}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Navigation Arrows */}
                            {filteredSkills.length > cardsPerView && (
                                <>
                                    <button
                                        onClick={goToPrevious}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-card hover:bg-primary/10 border border-border rounded-full p-2 shadow-md transition-all duration-200 z-10"
                                        aria-label="Previous skills"
                                    >
                                        <svg
                                            className="w-5 h-5 text-foreground"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        onClick={goNext}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-card hover:bg-primary/10 border border-border rounded-full p-2 shadow-md transition-all duration-200 z-10"
                                        aria-label="Next skills"
                                    >
                                        <svg
                                            className="w-5 h-5 text-foreground"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Show More Button */}
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setShowAll(true)}
                                className="cosmic-button"
                            >
                                Show More
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Grid View */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredSkills.map((skill, index) => {
                                const IconComponent = skill.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-card p-6 rounded-lg shadow-md card-hover border border-border"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <IconComponent className="w-8 h-8 text-primary" />
                                                <h3 className="font-semibold text-lg text-foreground">
                                                    {skill.name}
                                                </h3>
                                            </div>
                                            <span
                                                className={`text-xs font-medium px-3 py-1 rounded-full ${getProficiencyColor(
                                                    skill.proficiency
                                                )}`}
                                            >
                                                {skill.proficiency}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Show Less Button */}
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setShowAll(false)}
                                className="px-6 py-2 rounded-full bg-card text-foreground border border-border font-medium transition-all duration-300 hover:border-primary/50 hover:scale-105 active:scale-95"
                            >
                                Show Less
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

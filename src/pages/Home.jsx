import { ThemeToggle } from '@/components/ThemeToggle';
import { StarBackground } from '@/components/StarBackground';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SoonToCome } from '@/components/SoonToCome';
import { SkillSection } from '@/components/SkillSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}

            {/* Background Effects */}
            <StarBackground />
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillSection />
                <ProjectsSection />
                <ContactSection />
                {/*SoonToCome*/}
            </main>
            {/*Footer*/}
        </div>
    );
};

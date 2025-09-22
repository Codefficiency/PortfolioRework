import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];
import { X, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    return (
        <nav
            className={cn(
                'fixed w-full z-40 transition-all duration-300',
                isScrolled
                    ? 'py-5 bg-background/80 backdrop-blur-md shadow-xs'
                    : 'py-5 '
            )}
        >
            <div className="container flex items-center justify-between">
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Ahmet</span>{' '}
                        Karaca
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>
            </div>
            {/* Mobile Nav */}
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden fixed top-4 right-4 p-2 text-foreground z-50"
                aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div
                className={cn(
                    'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col',
                    'items-center justify-center transition-all duration-300 md:hidden',
                    isMenuOpen
                        ? 'opacity-100 pointer-events-auto z-50'
                        : 'opacity-0 pointer-events-none z-50'
                )}
            >
                <div className="flex flex-col space-y-8">
                    <ThemeToggle mobile={1} />
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

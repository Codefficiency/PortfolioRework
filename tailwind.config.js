import { defineConfig } from 'tailwindcss';

export default defineConfig({
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    safelist: [
        'pr-16',
        'z-40',
        'z-50',
        'fixed',
        'top-3',
        'right-5',
        'max-sm:hidden',
        'backdrop-blur-md',
        'bg-background/80',
        'bg-background/95',
        'text-glow',
        'shadow-xs',
    ],
    theme: {
        extend: {
            colors: {
                border: 'hsl(var(--border) / <alpha-value>)',
                background: 'hsl(var(--background) / <alpha-value>)',
                foreground: 'hsl(var(--foreground) / <alpha-value>)',
                primary: 'hsl(var(--primary) / <alpha-value>)',
                'primary-foreground':
                    'hsl(var(--primary-foreground) / <alpha-value>)',
                card: 'hsl(var(--card) / <alpha-value>)',
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
                'fade-in': 'fade-in 0.7s ease-out forwards',
                'fade-in-delay-1': 'fade-in 0.7s ease-out 0.2s forwards',
                'fade-in-delay-2': 'fade-in 0.7s ease-out 0.4s forwards',
                'fade-in-delay-3': 'fade-in 0.7s ease-out 0.6s forwards',
                'fade-in-delay-4': 'fade-in 0.7s ease-out 0.8s forwards',
                meteor: 'meteor 5s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-subtle': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' },
                },
                'fade-in': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                meteor: {
                    '0%': {
                        transform: 'rotate(215deg) translateX(0)',
                        opacity: '1',
                    },
                    '70%': { opacity: '1' },
                    '100%': {
                        transform: 'rotate(215deg) translateX(-500px)',
                        opacity: '0',
                    },
                },
            },
        },
    },
    plugins: [],
});

import { Mail, Phone, MapPin, Send, Info, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showNote, setShowNote] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast({
                title: 'Sorry!',
                description:
                    "I haven't setup the email service yet since it is a paid service. Feel free to email me the contents of your message by clicking on my email in the contact information!",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-3xl">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Have a project in mind or looking for more members for your
                    team? Feel free to reach out. I&apos;m always excited to discuss
                    new opportunities.
                </p>

                {/* Contact info list*/}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 text-center">
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <a
                            href="mailto:ahmettarikkaraca@icloud.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            ahmettarikkaraca@icloud.com
                        </a>
                    </div>


                    <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">
                            <a href="https://ca.linkedin.com/in/ahmet-trk-karaca">
                                Ahmet Karaca on LinkedIn
                            </a>

                        </span>
                    </div>
                </div>

                {/* Message form */}
                <div
                    className="mx-auto bg-card p-8 rounded-lg shadow-xs max-w-xl "
                    onSubmit={handleSubmit}
                >
                    <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-center">
                        Send a Message
                        <button
                            onMouseEnter={() => setShowNote(true)}
                            onMouseLeave={() => setShowNote(false)}
                            className="relative"
                        >
                            <Info className="w-4 h-4 text-muted-foreground hover:text-primary" />
                            <div
                                className={cn(
                                    'absolute left-1/2 -translate-x-1/2 mt-2 w-max bg-card text-xs text-foreground px-3 py-2 rounded-md shadow-lg border z-10 transition-all duration-300',
                                    showNote
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-1 pointer-events-none'
                                )}
                            >
                                Note: I haven&apos;t setup the email service
                                yet!
                            </div>
                        </button>
                    </h3>
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                            >
                                Your name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Ahmet Karaca"
                            />

                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2 mt-4"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="johndoe@gmail.com"
                            />

                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2 mt-4"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-y min-h-[120px]"
                                placeholder="Hello, I'd like to talk about..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                'cosmic-button w-full flex items-center justify-center gap-2 mt-4',
                                isSubmitting
                                    ? 'bg-background/95 text-primary'
                                    : ''
                            )}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

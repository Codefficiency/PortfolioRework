import { Mail, Phone, MapPin, Github, Divide, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
export const ContactSection = () => {
    const handleSubmit = (e) => {
        console.log('Submitted!');
        e.preventDefault();
        setTimeout(() => {}, 1500);
    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or looking for more members for your
                    team? Feel free to reach out. I'm always excited to discuss
                    new oppurtunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 text-center">
                        <h3 className="text-2xl font-semibold mb-6 text-primary">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center ">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{' '}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a
                                        href="mailto:ahmettarikkaraca@icloud.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        ahmettarikkaraca@icloud.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{' '}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone </h4>
                                    <a
                                        href="tel:+16474446021"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +1 (647) 444-6021
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{' '}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location </h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Toronto, ON, Canada
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="pt-8">
                            <h4 className="font-meidum mb-4">
                                {' '}
                                Contact With Me
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a>
                                    <Github />
                                </a>
                            </div>
                        </div> */}
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2x; font-semibold mb-6">
                            Send a Message
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {''} Your name
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
                                    className="block text-sm font-medium mb-2 mt-2"
                                >
                                    {''} Your email
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
                                    className="block text-sm font-medium mb-2 mt-2"
                                >
                                    {''} Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-y min-h-10 max-h-50"
                                    placeholder="Hello I'd like to talk about..."
                                />
                            </div>
                            <button
                                type="submit"
                                className={cn(
                                    'cosmic-button w-full flex items-center justify-center gap-2'
                                )}
                                onClick={handleSubmit}
                            >
                                Send Message <Send size={16}></Send>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

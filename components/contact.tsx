import { Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-min bg-background">
      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
            Get in Touch
          </h2>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            I'd love to hear from you! Whether you have a project in mind or
            just want to connect, feel free to reach out via email or drop me a
            message on Twitter.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="mailto:thizaradeshan@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </Link>

            <Link
              href="https://x.com/Thizara1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200 font-medium"
            >
              <Twitter className="w-5 h-5" />
              Twitter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

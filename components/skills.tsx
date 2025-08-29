import { cn } from "@/lib/utils";
import { skillsData } from "@/lib/data";

interface SkillsSectionProps {
  className?: string;
}

export function SkillsSection({ className }: SkillsSectionProps) {
  return (
    <section className={cn("py-16 px-4", className)}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-balance">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3 justify-center">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg px-10 py-5 flex items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 hover:border-primary/20 min-w-[80px] h-10"
            >
              <span className="text-base font-medium text-card-foreground group-hover:text-primary transition-colors duration-200 whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

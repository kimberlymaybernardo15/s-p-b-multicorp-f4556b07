import { Globe, ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  name: string;
  website: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    name: "SPB MultiCorp",
    website: "https://spb-multicorp.com",
    description:
      "SPB MultiCorp is a digital marketing and business solutions company focused on helping businesses improve visibility, automate operations, strengthen reputation, and accelerate growth through modern technology and AI-powered solutions.",
    buttonText: "View Project",
    buttonLink: "https://spb-multicorp.com",
  },
  {
    name: "Project Coming Soon",
    website: "#",
    description:
      "A new project is currently in development. Stay tuned for an exciting addition to our growing portfolio of digital marketing and business solutions.",
    buttonText: "Coming Soon",
    buttonLink: "#",
    comingSoon: true,
  },
  {
    name: "Project Coming Soon",
    website: "#",
    description:
      "Another innovative project is on the way. We are working behind the scenes to deliver another high-impact solution for businesses like yours.",
    buttonText: "Coming Soon",
    buttonLink: "#",
    comingSoon: true,
  },
];

export default function FeaturedProjectsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section
      id="featured-projects"
      aria-label="Featured Projects"
      className="py-24 brushed-metal-bg"
    >
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">
            Featured Projects
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore some of the businesses and projects we have developed and
            supported.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <article
      ref={ref}
      className={`glass-card p-8 electric-glow-hover transition-all duration-700 flex flex-col h-full ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      aria-label={`${project.name} project card`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Globe className="text-primary" size={24} aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {project.name}
          </h3>
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name} website - opens in a new tab`}
            className="text-sm text-primary hover:underline transition-colors"
          >
            {project.website}
          </a>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
        {project.description}
      </p>

      <a
        href={project.buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.buttonText} - ${project.name} - opens in a new tab`}
        className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm electric-glow-hover transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        {project.buttonText}
        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </article>
  );
}

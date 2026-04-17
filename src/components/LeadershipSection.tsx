import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import stevenPhoto from "@/assets/steven-photo.jpg";
import kimPhoto from "@/assets/kim-photo.jpg";
import bonniePhoto from "@/assets/bonnie-photo.jpg";

const leaders = [
  // photoPosition lets us fine-tune cropping per leader so faces are framed consistently
  {
    name: "Steven R. Stapleton",
    role: "Founder & CEO",
    photo: stevenPhoto,
    bio: "As CEO and founder of SPB MultiCorp, I bring a lifetime of hands-on leadership across nine diverse industries. From flipping burgers to running production lines, from wildland firefighting to oilfield rigs, from steel fabrication to warehouse operations, I've climbed every ladder from the bottom up. That grind shaped a maverick mindset that's always looking three moves ahead. Now I'm channeling that same relentless drive into building SPB MultiCorp as an eco-conscious digital marketing powerhouse, with eyes on a future of sustainable ventures that protect both people and planet. Master of turning real-world grit into scalable success.",
  },
  {
    name: "Bonnie Jackson",
    role: "Chief Operations Officer",
    photo: bonniePhoto,
    bio: "As Chief Operating Officer of SPB MultiCorp, Bonnie brings strong leadership and business acumen to the company. With a proven track record of leadership in every role she's held, she excels at organizing teams, creating efficient systems, and thinking big-picture while keeping operations running smoothly. Bonnie also owns and operates her own horse breeding and training business, giving her real-world experience building and running a company from the ground up. Her ability to manage multiple moving parts and think strategically makes her uniquely suited to help scale SPB MultiCorp as we expand into new divisions.",
  },
  {
    name: "Kim Bernardo",
    role: "Director of Digital Media & Partner",
    photo: kimPhoto,
    bio: "As Director of Digital Media and partner at SPB MultiCorp, Kimberly brings creative vision and sharp execution to every campaign we run. With a keen eye for design and digital trends, she transforms ideas into compelling visual stories that actually cut through the noise. Her work doesn't just look good — it drives real results. Together we're building something that matters, both for our clients and for the future we're working toward.",
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6">
        <Heading />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((l, i) => (
            <LeaderCard key={l.name} {...l} delay={`${i * 0.15}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Heading() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">Leadership</h2>
      <p className="text-muted-foreground text-lg">The people behind the mission</p>
    </div>
  );
}

function LeaderCard({ name, role, photo, bio, delay }: typeof leaders[0] & { delay: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`glass-card overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: delay }}>
      <div className="aspect-square overflow-hidden">
        <img src={photo} alt={name} className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-8">
        <h3 className="font-heading text-xl font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-primary font-medium mb-4">{role}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

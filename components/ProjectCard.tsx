type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tools: string;
  imageLabel: string;
  href?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <div className="project-image">
        <span>{project.imageLabel}</span>
      </div>
      <div className="gridline mt-4 pt-3 flex items-start justify-between gap-5">
        <div>
          <div className="eyebrow text-neutral-500">{project.number} / {project.category}</div>
          <h3 className="mt-2 text-2xl md:text-3xl tracking-tight group-hover:underline underline-offset-4">
            {project.title}
          </h3>
        </div>
        <span className="eyebrow text-neutral-500 whitespace-nowrap">{project.tools}</span>
      </div>
      <p className="mt-4 max-w-xl text-[15px] leading-6 text-neutral-600">{project.description}</p>
    </article>
  );
}
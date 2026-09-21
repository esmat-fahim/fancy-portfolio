type Project={number:string;title:string;category:string;description:string;tools:string;imageLabel:string;image?:string;href?:string};

export default function ProjectCard({project}:{project:Project}){
 const content=<>
  <div className={`project-image${project.image ? " project-image-photo" : ""}`}>
   {project.image&&<img src={project.image} alt="" className="project-image-img" />}
   {!project.image&&<span>{project.imageLabel}</span>}
   {project.image&&<span>{project.imageLabel}</span>}
  </div>
  <div className="project-meta gridline mt-4 pt-3">
   <div className="flex items-center justify-between gap-4">
    <div className="eyebrow text-neutral-500">{project.category}</div>
    <div className="eyebrow text-neutral-500">{project.number}</div>
   </div>
   <h3 className="mt-3 text-2xl md:text-3xl tracking-tight group-hover:underline underline-offset-4">{project.title}</h3>
   <div className="mt-2 eyebrow text-neutral-500">{project.tools}</div>
  </div>
  <p className="mt-4 max-w-xl min-h-[72px] text-[15px] leading-6 text-neutral-600">{project.description}</p>
  {project.href&&<div className="mt-5 eyebrow">View case study ↗</div>}
 </>;
 return project.href?<a href={project.href} className="group block">{content}</a>:<article className="group">{content}</article>;
}

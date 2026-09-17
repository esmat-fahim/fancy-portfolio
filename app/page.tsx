import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    number:"01", category:"Spatial AI / Remote Sensing",
    title:"Mapping Informal Settlements of Kabul with Deep Learning",
    tools:"PyTorch · UAV · GIS",
    imageLabel:"Kabul / semantic segmentation",
    description:"A city-scale geospatial AI workflow for mapping Kabul’s informal settlements from very-high-resolution UAV imagery. The work combines manually updated masks, multi-temporal imagery and semantic segmentation with DeepLabV3+ to produce a reproducible mapping asset and examine urban change."
  },
  {
    number:"02", category:"Mobility / Spatial Modelling",
    title:"Synthetic Population & Mobility Modelling",
    tools:"MATSim · Python · GIS",
    imageLabel:"Germany / mobility model",
    description:"Spatial data processing and quality assurance for synthetic population and mobility modelling, including work with German census-derived 100 m raster data and MATSim-compatible inputs."
  },
  {
    number:"03", category:"3D Geospatial Analysis",
    title:"Solar Irradiation & Urban Building Models",
    tools:"FME · Docker · 3D GIS",
    imageLabel:"Urban form / solar potential",
    description:"A geospatial workflow connecting building geometry, refined 3D models and solar irradiation analysis. The project investigated the effect of building representation on rooftop-area estimates and annual irradiation results."
  },
  {
    number:"04", category:"Mobility / Urban Analytics",
    title:"E-bike Delivery & Spatial Data",
    tools:"Mobility · Spatial Analysis",
    imageLabel:"Urban / delivery mobility",
    description:"Applied mobility and spatial-data work in an operational e-bike delivery environment, connecting real-world movement patterns with geographic analysis and practical logistics."
  },
  {
    number:"05", category:"Earth Observation",
    title:"Remote Sensing for Deforestation & EUDR",
    tools:"EO · SAR · GIS",
    imageLabel:"Forest / satellite monitoring",
    description:"Earth-observation work exploring remote sensing workflows for deforestation monitoring and European Union Deforestation Regulation (EUDR) use cases."
  },
  {
    number:"06", category:"Urban Planning / Humanitarian GIS",
    title:"Urban Planning & Humanitarian Geospatial Work",
    tools:"QGIS · ArcGIS · Planning",
    imageLabel:"Kabul / urban change",
    description:"Geospatial analysis developed across urban planning and humanitarian contexts, including work on Kabul’s urban development, infrastructure and changing neighbourhoods."
  }
];

const skills = [
  "Python","PyTorch","QGIS","ArcGIS","GDAL","Rasterio","GeoPandas",
  "PostGIS","GeoServer","Leaflet","Remote Sensing","Deep Learning",
  "MATSim","FME","Docker","Spatial Analysis"
];

export default function Home() {
  return (
    <main>
      <Nav />

      <section className="container pt-20 md:pt-32 pb-28 reveal">
        <div className="max-w-5xl">
          <div className="eyebrow mb-7">Geospatial Scientist · Spatial AI · Urban Analytics</div>
          <h1 className="text-[clamp(3.5rem,9vw,8.5rem)] leading-[.88] tracking-[-.065em] font-medium">
            I work with<br />geospatial data<br />to understand<br /><i>places.</i>
          </h1>
          <div className="mt-12 grid md:grid-cols-12 gap-6">
            <p className="md:col-span-5 md:col-start-7 text-lg leading-7 text-neutral-600">
              I’m Esmat Fahim, a geospatial scientist working across GIS, remote sensing,
              spatial machine learning, urban planning and mobility modelling.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="container pb-28">
        <div className="gridline pt-4 mb-10 flex justify-between">
          <span className="eyebrow">Selected work</span>
          <span className="eyebrow text-neutral-500">01—06</span>
        </div>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-20">
          {projects.map((p) => <ProjectCard key={p.number} project={p} />)}
        </div>
      </section>

      <section id="about" className="border-y border-neutral-300">
        <div className="container py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">About</div>
          <div className="md:col-span-7 md:col-start-5">
            <p className="text-3xl md:text-5xl leading-[1.08] tracking-tight">
              My work sits at the intersection of <i>geography, computation and cities.</i>
            </p>
            <div className="mt-10 space-y-5 text-[16px] leading-7 text-neutral-600">
              <p>I completed an MSc in Geospatial Science at the Technical University of Munich, with a focus on geospatial data, Earth observation and computational methods.</p>
              <p>My experience spans remote sensing, GIS, urban planning, humanitarian programmes, mobility modelling and applied machine learning. I enjoy turning complex spatial datasets into analysis that can be understood, reproduced and used for decisions.</p>
              <p>My current technical interests include spatial AI, semantic segmentation, land-use change, accessibility, mobility and the modelling of rapidly changing urban environments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">Experience</div>
          <div className="md:col-span-8 md:col-start-5 space-y-8">
            <div className="grid grid-cols-[100px_1fr] gap-4 border-t border-neutral-300 pt-4">
              <span className="eyebrow text-neutral-500">2024—26</span>
              <div><h3 className="text-xl">TUM · Geospatial / Mobility Research</h3><p className="mt-2 text-neutral-600">Synthetic population, census raster QA, mobility modelling and geospatial analysis.</p></div>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-4 border-t border-neutral-300 pt-4">
              <span className="eyebrow text-neutral-500">2021—23</span>
              <div><h3 className="text-xl">HALO Trust · Kabul Programme</h3><p className="mt-2 text-neutral-600">Programme work in a humanitarian setting, with experience relevant to spatially informed urban and operational analysis.</p></div>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-4 border-t border-neutral-300 pt-4">
              <span className="eyebrow text-neutral-500">2019—21</span>
              <div><h3 className="text-xl">CRIDA · Urban Planning</h3><p className="mt-2 text-neutral-600">Urban planning and spatial analysis, building the foundation for later geospatial and Earth-observation work.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 text-neutral-100">
        <div className="container py-24">
          <div className="eyebrow text-neutral-400 mb-8">Toolkit</div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 max-w-5xl">
            {skills.map(s => <span key={s} className="text-xl md:text-2xl tracking-tight">{s}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="container py-28">
        <div className="eyebrow mb-7">Get in touch</div>
        <h2 className="text-[clamp(3rem,8vw,7rem)] leading-[.9] tracking-[-.055em] max-w-5xl">
          Let’s talk about<br /><i>maps, cities & data.</i>
        </h2>
        <div className="mt-12 flex flex-wrap gap-3">
          <a href="mailto:YOUR_EMAIL@example.com" className="border border-neutral-900 px-5 py-3 text-sm hover:bg-neutral-900 hover:text-white transition">Email ↗</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="border border-neutral-900 px-5 py-3 text-sm hover:bg-neutral-900 hover:text-white transition">LinkedIn ↗</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="border border-neutral-900 px-5 py-3 text-sm hover:bg-neutral-900 hover:text-white transition">GitHub ↗</a>
          <a href="/cv.pdf" className="border border-neutral-900 px-5 py-3 text-sm hover:bg-neutral-900 hover:text-white transition">CV ↓</a>
        </div>
      </section>

      <footer className="border-t border-neutral-300">
        <div className="container py-6 flex justify-between text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} Esmat Fahim</span>
          <span>Geospatial Science · Germany</span>
        </div>
      </footer>
    </main>
  );
}
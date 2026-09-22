"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {number:"01",category:"Spatial AI / Remote Sensing",title:"Mapping Informal Settlements of Kabul with Deep Learning",tools:"PyTorch · UAV · GIS",imageLabel:"Kabul / semantic segmentation",image:"/images/kabul/kabul-2011-2024.jpg",href:"/work/kabul",description:"A city-scale geospatial AI workflow for mapping Kabul’s informal settlements from very-high-resolution UAV imagery. The work combines manually updated masks, multi-temporal imagery and semantic segmentation with DeepLabV3+ to produce a reproducible mapping asset and examine urban change."},
  {number:"02",category:"3D Geospatial Analysis / Solar Energy",title:"Solar Irradiation Simulation with Refined 3D Building Models",tools:"FME · CityGML · Sunpot",imageLabel:"Ingolstadt / refined LOD2",image:"/images/solar/card/solar-card.png",href:"/work/solar",description:"A CityGML and FME workflow that transformed LOD3 building geometry into a refined LOD2 representation for solar irradiation analysis with TUM’s Sunpot tool."},
  {number:"03",category:"Spatial Data Infrastructure / Web-GIS",title:"Full-Stack Web-GIS for Planned Land Development",tools:"PostGIS · GeoServer · Leaflet",imageLabel:"SDI / interactive development scenario",image:"/images/webgis/card/webgis-card.png" /* redeploy */,href:"/work/webgis",description:"A full-stack Web-GIS application connecting UML data modelling, PostGIS, GeoServer WMS/SLD services and a Leaflet client to visualize planned land development and infrastructure costs."},
  {number:"04",category:"Earth Observation / SAR",title:"Forest Height Estimation with UAVSAR PolInSAR",tools:"Python · Kapok · PolInSAR",imageLabel:"Pongara / forest height",image:"/images/sar/polinsar-workflow.svg",href:"/work/sar",description:"A hands-on PolInSAR workflow using NASA UAVSAR data and the Kapok Python library to investigate forest-height estimation in Pongara National Park, Gabon."},
  {number:"05",category:"Land Information Systems / 3D Urban Modelling",title:"Integrated Land Information System for Munich",tools:"PostGIS · QGIS · 3D Data Modelling · Digital Twin · 3D GIS",imageLabel:"Munich / integrated land information",image:"/images/ilis/hero.svg",href:"/work/ilis",description:"A prototype 3D-enabled land information system and digital-twin-oriented workflow for Villenkolonie Solln, integrating cadastral and land-use data with 3D building information, property analysis, population estimates and climate-driven runoff modelling. The project explored how heterogeneous spatial datasets can be structured into an integrated representation of the built environment for urban analysis and scenario-based planning."},
  {number:"06",category:"Urban Mobility / Big Geospatial Data",title:"Urban Mobility Analysis with MVG Bike Data",tools:"Python · GeoPandas · Regression",imageLabel:"Munich / bike mobility",image:"/images/mvg/hero.svg",href:"/work/mvg",description:"A geospatial analysis of Munich bike-sharing data examining seasonal mobility, trips to and from major green spaces, district-level socioeconomic patterns and cycling safety."}
];

const skills=["Python","PyTorch","QGIS","ArcGIS","GDAL","Rasterio","GeoPandas","PostGIS","GeoServer","Leaflet","Remote Sensing","Deep Learning","MATSim","FME","Docker","Spatial Analysis"];

function Portfolio() {
 return (<main><Nav />
 <section className="container pt-20 md:pt-32 pb-28 reveal"><div className="max-w-5xl"><div className="eyebrow mb-7">Geospatial Scientist · Spatial AI · Urban Analytics</div><h1 className="text-[clamp(3.5rem,9vw,8.5rem)] leading-[.88] tracking-[-.065em] font-medium">I work with<br />geospatial data<br />to understand<br /><i>places.</i></h1><div className="mt-12 grid md:grid-cols-12 gap-6"><p className="md:col-span-5 md:col-start-7 text-lg leading-7 text-neutral-600">I’m Esmat Fahim, a geospatial scientist working across GIS, remote sensing, spatial machine learning, urban planning and mobility modelling.</p></div></div></section>
 <section id="work" className="container pb-28"><div className="gridline pt-4 mb-10 flex justify-between"><span className="eyebrow">Selected work</span><span className="eyebrow text-neutral-500">01—06</span></div><div className="grid md:grid-cols-2 gap-x-8 gap-y-20">{projects.map((p)=><ProjectCard key={p.number} project={p}/>)}</div></section>
 <section id="about" className="border-y border-neutral-300"><div className="container py-24 grid md:grid-cols-12 gap-10"><div className="md:col-span-3 eyebrow">About</div><div className="md:col-span-7 md:col-start-5"><p className="text-3xl md:text-5xl leading-[1.08] tracking-tight">My work sits at the intersection of <i>geography, computation and cities.</i></p><div className="mt-10 space-y-5 text-[16px] leading-7 text-neutral-600"><p>I completed an MSc in Geospatial Science at the Technical University of Munich, with a focus on geospatial data, Earth observation and computational methods.</p><p>My experience spans remote sensing, GIS, urban planning, humanitarian programmes, mobility modelling and applied machine learning. I enjoy turning complex spatial datasets into analysis that can be understood, reproduced and used for decisions.</p><p>My current technical interests include spatial AI, semantic segmentation, land-use change, accessibility, mobility and the modelling of rapidly changing urban environments.</p></div></div></div></section>
 <section className="container py-24"><div className="grid md:grid-cols-12 gap-10"><div className="md:col-span-3 eyebrow">Experience</div><div className="md:col-span-8 md:col-start-5 space-y-8"><div className="grid grid-cols-[100px_1fr] gap-4 border-t border-neutral-300 pt-4"><span className="eyebrow text-neutral-500">2024—26</span><div><h3 className="text-xl">TUM · Geospatial / Mobility Research</h3><p className="mt-2 text-neutral-600">Synthetic population, census raster QA, mobility modelling and geospatial analysis.</p></div></div><div className="grid grid-cols-[100px_1fr] gap-4 border-t border-neutral-300 pt-4"><span className="eyebrow text-neutral-500">2021—23</span><div><h3 className="text-xl">HALO Trust · Kabul Programme</h3><p className="mt-2 text-neutral-600">Programme work in a humanitarian setting, with experience relevant to spatially informed urban and operational analysis.</p></div></div><div className="grid grid-cols-[100px_1fr] gap-4 border-t border-neutral-300 pt-4"><span className="eyebrow text-neutral-500">2019—21</span><div><h3 className="text-xl">CRIDA · Urban Planning</h3><p className="mt-2 text-neutral-600">Urban planning and spatial analysis, building the foundation for later geospatial and Earth-observation work.</p></div></div></div></div></section>
 <section className="bg-neutral-900 text-neutral-100"><div className="container py-24"><div className="eyebrow text-neutral-400 mb-8">Toolkit</div><div className="flex flex-wrap gap-x-5 gap-y-3 max-w-5xl">{skills.map(s=><span key={s} className="text-xl md:text-2xl tracking-tight">{s}</span>)}</div></div></section>
 <section id="contact" className="container py-28"><div className="eyebrow mb-7">Get in touch</div><h2 className="text-[clamp(3rem,8vw,7rem)] leading-[.9] tracking-[-.055em] max-w-5xl">Let’s talk about<br /><i>maps, cities & data.</i></h2><div className="mt-12 flex flex-wrap gap-3"><a href="mailto:esmat.tariq4747@gmail.com" className="border border-neutral-900 px-5 py-3 text-sm hover:bg-neutral-900 hover:text-white transition">Email ↗</a><a href="https://www.linkedin.com/in/esmat-fahim-52844a199" target="_blank" rel="noreferrer" className="border border-neutral-900 px-5 py-3 text-sm hover:bg-neutral-900 hover:text-white transition">LinkedIn ↗</a><a href="https://github.com/" target="_blank" rel="noreferrer" className="border border-neutral-900 px-5 py-3 text-sm hover:bg-neutral-900 hover:text-white transition">GitHub ↗</a><a href="/cv.pdf" className="border border-neutral-900 px-5 py-3 text-sm hover:bg-neutral-900 hover:text-white transition">CV ↓</a></div></section>
 <footer className="border-t border-neutral-300"><div className="container py-6 flex justify-between text-xs text-neutral-500"><span>© {new Date().getFullYear()} Esmat Fahim</span><span>Geospatial Science · Germany</span></div></footer>
 </main>);
}

export default function Home() {
 const [entered, setEntered] = useState(false);
 useEffect(() => {
   const onKey = (e: KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") setEntered(true); };
   window.addEventListener("keydown", onKey);
   return () => window.removeEventListener("keydown", onKey);
 }, []);
 return (
   <>
     <section className={`intro-screen ${entered ? "intro-exit" : ""}`} onClick={() => setEntered(true)} aria-label="Enter portfolio">
       <div className="intro-noise" />
       <div className="intro-content">
         <div className="intro-top eyebrow">ESMAT FAHIM / GEOSPATIAL SCIENTIST</div>
         <div className="intro-center">
           <div className="intro-name">Esmat<br/><i>Fahim.</i></div>
           <div className="intro-line" />
           <p className="intro-thought">I map the invisible.</p>
         </div>
         <div className="intro-bottom">
           <span className="eyebrow">GIS · SPATIAL AI · CITIES</span>
           <button className="intro-enter" onClick={(e) => { e.stopPropagation(); setEntered(true); }}>Enter <span>↗</span></button>
         </div>
       </div>
     </section>
     <div className={entered ? "portfolio-visible" : "portfolio-hidden"}><Portfolio /></div>
   </>
 );
}

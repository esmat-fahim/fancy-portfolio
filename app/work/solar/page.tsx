const metrics = [
  ["12", "buildings compared under identical surroundings"],
  ["8%+", "average roof irradiation over-estimation in the fair comparison"],
  ["~2%", "average whole-building irradiation over-estimation"],
  ["37", "LOD2 buildings successfully matched to LOD3 buildings"],
];

export default function SolarCaseStudy() {
  return (
    <main>
      <header className="container pt-8 md:pt-12">
        <a href="/#work" className="eyebrow hover:underline">
          ← Back to selected work
        </a>
      </header>

      <section className="container pt-20 md:pt-28 pb-20">
        <div className="max-w-5xl">
          <div className="eyebrow mb-6">02 / 3D Geospatial Analysis · Solar Energy</div>
          <h1 className="text-[clamp(3.2rem,8vw,7.5rem)] leading-[.9] tracking-[-.065em] font-medium">
            Solar irradiation
            <br />
            with <i>refined 3D</i>
            <br />
            building models.
          </h1>
          <div className="mt-9 grid md:grid-cols-12 gap-8">
            <p className="md:col-span-6 text-xl md:text-2xl leading-8 tracking-tight">
              A CityGML and FME workflow that transformed LOD3 building geometry
              into a refined LOD2 representation so detailed roof and façade
              characteristics could be evaluated with TUM's Sunpot tool.
            </p>
            <div className="md:col-span-3 md:col-start-10">
              <div className="eyebrow text-neutral-500">Location</div>
              <div className="mt-2 text-lg">Ingolstadt, Germany</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <figure className="overflow-hidden border border-neutral-200 bg-neutral-100">
          <img
            src="/images/solar/lod2-refined.jpg"
            alt="LOD2 and refined LOD2 building comparison from the project report"
            className="block w-full h-auto"
          />
          <figcaption className="px-4 py-3 text-xs text-neutral-500">
            LOD2 versus refined LOD2 · solar irradiation project
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-neutral-300">
        <div className="container py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">The problem</div>
          <div className="md:col-span-7 md:col-start-5 text-xl md:text-2xl leading-8">
            TUM's Sunpot tool supports CityGML 2.0 at LOD2, while the LOD3 models
            contain more detailed roof and façade geometry, including openings.
            The project investigated whether LOD3 detail could be retained in a
            refined LOD2 representation and then compared with conventional LOD2
            solar-irradiation estimates.
          </div>
        </div>
      </section>

      <section className="container py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3 eyebrow">My role</div>
        <div className="md:col-span-7 md:col-start-5 text-[17px] leading-7 text-neutral-600">
          I developed the preprocessing and transformation workflow in FME,
          spatially matched LOD2 and LOD3 buildings, handled feature and geometry
          transformations, addressed openings and building installations, produced
          refined LOD2 outputs, and performed the comparative solar-irradiation
          analysis.
        </div>
      </section>

      <section className="bg-neutral-900 text-neutral-100">
        <div className="container py-20">
          <div className="eyebrow text-neutral-400 mb-8">Key result</div>
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map(([value, label]) => (
              <div key={label} className="border-t border-neutral-700 pt-4">
                <div className="text-4xl md:text-5xl tracking-tight">{value}</div>
                <div className="mt-2 text-sm text-neutral-400">{label}</div>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-lg leading-7 text-neutral-300">
            Across the 12 buildings that could be fairly compared, conventional
            LOD2 over-estimated global roof irradiation by just over 8% on average,
            while whole-building global irradiation was over-estimated by around
            2%. The report concludes that the refined LOD2 approach provides more
            solar-irradiation sensitivity and supports the research hypothesis,
            although the whole-building difference was of limited significance.
          </p>
        </div>
      </section>

      <section className="container py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">Engineering story</div>
          <div className="md:col-span-8 md:col-start-5 space-y-14">
            <div>
              <div className="eyebrow text-neutral-500">01 / Challenge</div>
              <h2 className="mt-3 text-3xl md:text-4xl tracking-tight">
                Make detailed LOD3 geometry usable in an LOD2-based solar workflow.
              </h2>
              <p className="mt-5 text-neutral-600 leading-7">
                Sunpot accepts CityGML 2.0 models at LOD2. The LOD3 source models,
                however, included openings, building installations and more detailed
                roof and façade structures. The challenge was to preserve relevant
                geometric information while producing an output that Sunpot could
                process.
              </p>
            </div>

            <div>
              <div className="eyebrow text-neutral-500">02 / Approach</div>
              <h2 className="mt-3 text-3xl md:text-4xl tracking-tight">
                Spatially match, transform and rebuild the city-model features.
              </h2>
              <p className="mt-5 text-neutral-600 leading-7">
                Because the LOD2 and LOD3 datasets did not share matching GML IDs,
                GroundSurface geometries were used to establish the correspondence.
                FME workflows applied hull generation, 2D enforcement, buffering,
                spatial relationships and feature merging before transforming the
                LOD3 geometry into refined LOD2 output.
              </p>
            </div>

            <div>
              <div className="eyebrow text-neutral-500">03 / Key decisions</div>
              <ul className="mt-5 space-y-4 text-neutral-600 leading-7">
                <li>
                  <strong className="text-neutral-900">Spatial matching:</strong>{" "}
                  use GroundSurface geometry and a 5 m buffer to relate LOD3 and
                  LOD2 buildings when GML IDs did not correspond.
                </li>
                <li>
                  <strong className="text-neutral-900">Feature provenance:</strong>{" "}
                  retain an <code>Original_Feature_Type</code> attribute through the
                  transformation pipeline.
                </li>
                <li>
                  <strong className="text-neutral-900">Opening handling:</strong>{" "}
                  use Deaggregator, GeometryCoercer, DonutHoleExtractor and Orientor
                  operations to process walls, building installations, doors and
                  windows.
                </li>
                <li>
                  <strong className="text-neutral-900">Controlled comparison:</strong>{" "}
                  compare only buildings whose surrounding context was identical so
                  shadowing conditions remained comparable.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-300">
        <div className="container py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 eyebrow">Scientific approach</div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-2xl md:text-4xl leading-tight tracking-tight">
                Building representation was treated as a variable in solar
                irradiation simulation, allowing detailed LOD3 geometry to be
                compared with conventional LOD2 geometry.
              </p>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                {[
                  ["Input", "CityGML 2.0 LOD2 buildings from Ingolstadt and more than 50 manually modelled LOD3 buildings."],
                  ["LOD3 features", "Building, BuildingInstallation, BuildingPart, ClosureSurface, GroundSurface, OuterCeilingSurface, OuterFloorSurface, RoofSurface, WallSurface and Openings."],
                  ["Solar model", "TUM Sunpot calculates direct, diffuse and global irradiation and Sky View Factor for building roofs and walls."],
                  ["Direct irradiation", "Sunpot combines a transition/shadow model with a sun-position algorithm to calculate direct irradiation."],
                  ["Diffuse irradiation", "A simplified sky-dome representation and Standard Overcast Sky model are used for diffuse irradiation and Sky View Factor."],
                  ["Transformation", "FME was used to spatially relate features, preserve feature information, transform geometry and produce refined LOD2 outputs."],
                ].map(([h, p]) => (
                  <div key={h} className="border-t border-neutral-300 pt-4">
                    <div className="eyebrow text-neutral-500">{h}</div>
                    <p className="mt-3 text-neutral-600 leading-7">{p}</p>
                  </div>
                ))}
              </div>

              <div className="mt-14">
                <figure className="overflow-hidden border border-neutral-200 bg-neutral-100">
                  <img
                    src="/images/solar/lod2-refined.jpg"
                    alt="LOD2 and refined LOD2 building comparison"
                    className="block w-full h-auto"
                  />
                  <figcaption className="px-4 py-3 text-xs text-neutral-500">
                    Building geometry comparison used in the project
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">From geometry to evidence</div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-xl leading-8 text-neutral-700">
              The fair comparison was restricted to 12 buildings because the
              preprocessing and transformation pipeline could not produce valid,
              comparable refined LOD2 models for every LOD3 building. More than 50
              LOD3 buildings were available initially, but only 37 could be spatially
              matched to LOD2 buildings, and the final comparison was further reduced
              by geometry and surrounding-shadow constraints.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="border-t border-neutral-300 pt-4">
                <div className="eyebrow text-neutral-500">Roof effect</div>
                <p className="mt-3 text-neutral-600 leading-7">
                  Roof irradiation varied substantially between buildings. For
                  example, LOD2 roof irradiation was 23.2% higher for building
                  4018210 and 38.7% higher for building 4018128, while one building
                  received 28.2% more roof irradiation in the refined LOD2 model.
                </p>
              </div>
              <div className="border-t border-neutral-300 pt-4">
                <div className="eyebrow text-neutral-500">Whole-building effect</div>
                <p className="mt-3 text-neutral-600 leading-7">
                  For the 12 fair comparisons, the report found an average
                  whole-building over-estimation of around 2% with conventional LOD2.
                  In the three-building opening-removal test, the reported
                  over-estimation increased from 6.1% to 7.7%, from 3.7% to 8.7%,
                  and from 12.7% to 15%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 border-y border-neutral-300">
        <div className="container py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">What I learned</div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-2xl md:text-4xl leading-tight tracking-tight">
              More geometric detail can increase sensitivity to solar irradiation,
              but the benefit depends on whether the transformation pipeline can
              preserve that detail reliably and whether surrounding context is
              controlled.
            </p>
            <p className="mt-8 max-w-3xl text-neutral-600 leading-7">
              The project showed that complex manually modelled buildings can expose
              limitations in a general transformation workflow. Complex openings,
              inverted windows and missing roof features reduced the number of
              buildings that could be compared properly.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">Project stack</div>
          <div className="md:col-span-8 md:col-start-5 flex flex-wrap gap-2">
            {[
              "FME",
              "CityGML 2.0",
              "TUM Sunpot",
              "Docker",
              "3D GIS",
              "Spatial analysis",
              "Solar irradiation",
              "Ingolstadt LOD2",
              "LOD3",
            ].map((x) => (
              <span key={x} className="border border-neutral-300 px-3 py-2 text-sm">
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-300">
        <div className="container py-8 flex justify-between">
          <a href="/#work" className="eyebrow hover:underline">
            ← Selected work
          </a>
          <span className="eyebrow text-neutral-500">Ingolstadt · 3D Geospatial Analysis</span>
        </div>
      </footer>
    </main>
  );
}

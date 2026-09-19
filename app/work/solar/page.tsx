import Link from "next/link";

const metrics = [
  ["~8%", "average roof irradiation over-estimation in the fair comparison"],
  ["~2%", "average whole-building global irradiation over-estimation"],
  ["12", "buildings compared under identical surrounding conditions"],
  ["LOD3 → refined LOD2", "geometry strategy used to make detailed models usable in Sunpot"],
];

export default function SolarCaseStudy() {
  return (
    <main>
      <header className="container pt-8 md:pt-12">
        <Link href="/#work" className="eyebrow hover:underline">← Back to selected work</Link>
      </header>

      <section className="container pt-20 md:pt-28 pb-20">
        <div className="max-w-5xl">
          <div className="eyebrow mb-6">02 / 3D Geospatial Analysis · Solar Energy</div>
          <h1 className="text-[clamp(3.2rem,8vw,7.5rem)] leading-[.9] tracking-[-.065em] font-medium">
            Solar irradiation
            <br />with <i>refined 3D</i>
            <br />building models.
          </h1>
          <div className="mt-9 grid md:grid-cols-12 gap-8">
            <p className="md:col-span-6 text-xl md:text-2xl leading-8 tracking-tight">
              A CityGML and FME workflow that preserved useful LOD3 building detail
              while converting the geometry into a form supported by TUM's Sunpot
              solar-potential tool.
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
          <img src="/images/solar/lod2-refined.jpg" alt="LOD2 and refined LOD2 building comparison from the project report" className="block w-full h-auto" />
          <figcaption className="px-4 py-3 text-xs text-neutral-500">
            LOD2 versus refined LOD2 representation · project report, Figure 77
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-neutral-300">
        <div className="container py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">The problem</div>
          <div className="md:col-span-7 md:col-start-5 text-xl md:text-2xl leading-8">
            TUM's Sunpot tool supports CityGML 2.0 buildings at LOD2, but not LOD3.
            LOD3 contains openings and finer façade and roof geometry that can affect
            solar irradiation. The project asked whether that information could be
            retained without requiring Sunpot to operate directly on LOD3 models.
          </div>
        </div>
      </section>

      <section className="container py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3 eyebrow">My role</div>
        <div className="md:col-span-7 md:col-start-5 text-[17px] leading-7 text-neutral-600">
          I developed the preprocessing and transformation workflow in FME,
          connected LOD2 and LOD3 building features spatially, handled geometry and
          opening-related edge cases, produced refined LOD2 outputs, and compared
          the resulting solar-irradiation estimates statistically.
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
            In the report's fair comparison, refined LOD2 produced lower roof
            irradiation estimates on average, while whole-building differences were
            smaller. The report concludes that the refined representation was closer
            to the intended detailed geometry, although the whole-building effect was
            relatively small.
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
                Preserve geometric nuance inside an LOD2-compatible workflow.
              </h2>
              <p className="mt-5 text-neutral-600 leading-7">
                The central constraint was compatibility: Sunpot needed an LOD2
                representation, while the analysis sought to retain the influence of
                LOD3 openings, roof details and façade geometry.
              </p>
            </div>

            <div>
              <div className="eyebrow text-neutral-500">02 / Approach</div>
              <h2 className="mt-3 text-3xl md:text-4xl tracking-tight">
                Build a refined LOD2 from LOD3 source geometry.
              </h2>
              <p className="mt-5 text-neutral-600 leading-7">
                The workflow used FME transformers to spatially relate corresponding
                LOD2 and LOD3 features, preserve feature-type information, manage
                openings, orient geometry and merge the resulting features into a
                Sunpot-compatible model.
              </p>
            </div>

            <div>
              <div className="eyebrow text-neutral-500">03 / Key decisions</div>
              <ul className="mt-5 space-y-4 text-neutral-600 leading-7">
                <li><strong className="text-neutral-900">Spatial matching:</strong> use spatial relationships rather than relying only on mismatched building IDs between the two datasets.</li>
                <li><strong className="text-neutral-900">Feature provenance:</strong> retain an Original_Feature_Type attribute through the transformation pipeline.</li>
                <li><strong className="text-neutral-900">Openings:</strong> use DonutHoleExtractor and related geometry operations so windows and doors could be represented in a usable form.</li>
                <li><strong className="text-neutral-900">Controlled comparison:</strong> compare only buildings with identical surroundings so shadowing conditions remain comparable.</li>
              </ul>
            </div>

            <figure className="overflow-hidden border border-neutral-200 bg-neutral-100">
              <img src="/images/solar/lod2-refined.jpg" alt="LOD2 and refined LOD2 model comparison" className="block w-full h-auto" />
              <figcaption className="px-4 py-3 text-xs text-neutral-500">
                Source visual from the report: LOD2 versus refined LOD2.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-300">
        <div className="container py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 eyebrow">Scientific approach</div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-2xl md:text-4xl leading-tight tracking-tight">
                Treat building representation as an experimental variable in a
                physics-informed spatial simulation.
              </p>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                {[
                  ["Input", "CityGML 2.0 semantic 3D city models representing buildings at LOD2 and LOD3."],
                  ["Solar model", "TUM Sunpot calculates direct, diffuse and global irradiation plus Sky View Factor for roofs and walls."],
                  ["Direct irradiation", "The Sunpot method combines a sun-position algorithm with a transition/shadow model."],
                  ["Diffuse irradiation", "A simplified sky-dome representation and Standard Overcast Sky model are used for diffuse radiation and sky-view estimation."],
                  ["Transformation", "FME was used to spatially relate features, transform geometry, manage openings and generate refined LOD2 outputs."],
                  ["Statistical comparison", "The study compared annual irradiation across roofs, walls and whole buildings, with a fair subset restricted to identical surroundings."],
                ].map(([h, p]) => (
                  <div key={h} className="border-t border-neutral-300 pt-4">
                    <div className="eyebrow text-neutral-500">{h}</div>
                    <p className="mt-3 text-neutral-600 leading-7">{p}</p>
                  </div>
                ))}
              </div>

              <div className="mt-14 grid md:grid-cols-2 gap-5">
                <figure className="overflow-hidden border border-neutral-200">
                  <img src="/images/solar/lod2-refined.jpg" alt="Building model comparison used in the solar irradiation study" className="block w-full h-auto" />
                  <figcaption className="px-4 py-3 text-xs text-neutral-500">Model comparison</figcaption>
                </figure>
                <figure className="overflow-hidden border border-neutral-200">
                  <img src="/images/solar/lod2-refined.jpg" alt="Project visual from the solar irradiation report" className="block w-full h-auto" />
                  <figcaption className="px-4 py-3 text-xs text-neutral-500">Detailed geometry retained in the refined model</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">Engineering detail</div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-xl leading-8 text-neutral-700">
              A major practical difficulty was that LOD3 geometries were not uniformly
              clean. Some openings were not represented as perfect holes, some
              windows were oriented inward, and some complex roof features did not
              survive the transformation. The report therefore documents the limits
              of the pipeline rather than treating every building as equally
              transformable.
            </p>
            <div className="mt-10 border-t border-neutral-300 pt-5">
              <div className="eyebrow text-neutral-500">Reproducibility</div>
              <p className="mt-3 text-neutral-600 leading-7">
                The Sunpot analysis was also run in a Docker environment so that the
                software setup and resulting calculations could be reproduced across
                platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 border-y border-neutral-300">
        <div className="container py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">What I learned</div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-2xl md:text-4xl leading-tight tracking-tight">
              More geometric detail can matter — but only when the data pipeline can
              preserve that detail reliably and the comparison controls for its
              surrounding context.
            </p>
            <p className="mt-8 max-w-3xl text-neutral-600 leading-7">
              The project combined semantic 3D data, geometry processing, spatial
              relationships and solar simulation. It was as much a data-engineering
              problem as a simulation problem.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">Project stack</div>
          <div className="md:col-span-8 md:col-start-5 flex flex-wrap gap-2">
            {["FME", "CityGML 2.0", "Sunpot", "Docker", "3D GIS", "Spatial analysis", "Solar irradiation"].map((x) => (
              <span key={x} className="border border-neutral-300 px-3 py-2 text-sm">{x}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-300">
        <div className="container py-8 flex justify-between">
          <Link href="/#work" className="eyebrow hover:underline">← Selected work</Link>
          <span className="eyebrow text-neutral-500">Ingolstadt · 3D Geospatial Analysis</span>
        </div>
      </footer>
    </main>
  );
}

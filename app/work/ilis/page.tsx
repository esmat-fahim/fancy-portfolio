const metrics = [
  ["547,111 m²", "pilot study area"],
  ["130,235 m²", "building footprint"],
  ["7,726", "estimated population"],
  ["7–11M L", "modeled March runoff in peak years"],
];

export default function ILISCaseStudy() {
  return (
    <main>
      <header className="container pt-8 md:pt-12">
        <a href="/#work" className="eyebrow hover:underline">← Back to selected work</a>
      </header>

      <section className="container pt-20 md:pt-28 pb-20">
        <div className="max-w-5xl">
          <div className="eyebrow mb-6">05 / Land Information Systems · Urban Analytics</div>
          <h1 className="text-[clamp(3.2rem,8vw,7.5rem)] leading-[.9] tracking-[-.065em] font-medium">
            An integrated
            <br />
            <i>land information system</i>
            <br />
            for Munich.
          </h1>
          <div className="mt-9 grid md:grid-cols-12 gap-8">
            <p className="md:col-span-6 text-xl md:text-2xl leading-8 tracking-tight">
              A prototype Integrated Land Information System (ILIS) for
              Villenkolonie Solln, combining land use, cadastral information,
              property values, 3D building data, population and climate modelling.
            </p>
            <div className="md:col-span-3 md:col-start-10">
              <div className="eyebrow text-neutral-500">Location</div>
              <div className="mt-2 text-lg">Villenkolonie Solln, Munich</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <figure className="overflow-hidden border border-neutral-200 bg-neutral-100">
          <img src="/images/ilis/hero.svg" alt="Integrated land information system workflow" className="block w-full h-auto" />
          <figcaption className="px-4 py-3 text-xs text-neutral-500">
            ILIS · integrated spatial database, urban analysis and climate modelling workflow
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-neutral-300">
        <div className="container py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">The problem</div>
          <div className="md:col-span-7 md:col-start-5 text-xl md:text-2xl leading-8">
            Munich faces pressure from high housing and rental prices, limited
            housing supply and increasing climate-related risks. The project
            explored how an integrated spatial database could connect physical,
            cadastral, economic and environmental information to support urban
            planning, real-estate analysis and climate-aware development.
          </div>
        </div>
      </section>

      <section className="container py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3 eyebrow">My role</div>
        <div className="md:col-span-7 md:col-start-5 text-[17px] leading-7 text-neutral-600">
          I developed the pilot database and analytical workflow: acquiring and
          integrating OSM and cadastral information, georeferencing source maps,
          digitizing land use, building a 3D representation, generating terrain
          and flow products, interpolating precipitation, calculating property
          values and taxes, estimating population, and structuring access through
          PostgreSQL.
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
            The prototype connects detailed land-use and cadastral information with
            real-estate services and climate analysis. The pilot estimates 7,726
            residents and models runoff scenarios for March 2000–2004, with peak
            modeled runoff of roughly 7–11 million litres in March 2000 and 2001.
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
                Turn heterogeneous urban information into one spatial system.
              </h2>
              <p className="mt-5 text-neutral-600 leading-7">
                The project combined OSM, cadastral imagery, satellite imagery,
                building-height information, climate-station observations and
                property-market data. These sources had to be aligned spatially
                before they could support consistent analysis.
              </p>
            </div>

            <div>
              <div className="eyebrow text-neutral-500">02 / Approach</div>
              <h2 className="mt-3 text-3xl md:text-4xl tracking-tight">
                Build the database from the ground up.
              </h2>
              <p className="mt-5 text-neutral-600 leading-7">
                Cadastral maps were georeferenced with distributed ground-control
                points, then used as the basis for parcel and building digitization.
                OSM and satellite imagery supplied complementary semantic information,
                while Google Earth provided building levels and height estimates for
                3D visualization and terrain modelling.
              </p>
            </div>

            <div>
              <div className="eyebrow text-neutral-500">03 / Key decisions</div>
              <ul className="mt-5 space-y-4 text-neutral-600 leading-7">
                <li><strong className="text-neutral-900">Cadastral-first digitization:</strong> parcel boundaries were used as the spatial reference for detailed land-use mapping.</li>
                <li><strong className="text-neutral-900">Semantic detail:</strong> buildings were separated into detached, semi-detached, attached, apartment, garage, shed and other categories.</li>
                <li><strong className="text-neutral-900">Hydrological modelling:</strong> building and land-cover heights were converted into a filled DEM and flow-direction surface.</li>
                <li><strong className="text-neutral-900">IDW interpolation:</strong> precipitation from DWD stations was interpolated because the pilot area is relatively small and the method is computationally efficient.</li>
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
                A land information system becomes useful when spatial geometry,
                semantic attributes and analytical models can be queried together.
              </p>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                {[
                  ["Land use", "General and detailed land-use maps distinguish parcels, buildings, housing typology, amenities, commercial uses, green areas and transport features."],
                  ["3D mapping", "Building levels and heights were stored in the database and used to extrude the land-use layers for 3D visualization."],
                  ["Terrain", "Building, green-area, sealed-surface, footpath and street layers were merged and rasterized to construct a DEM for runoff modelling."],
                  ["Climate", "DWD station precipitation was interpolated with IDW for March 2000–2004, then adjusted for the modeled effect of green areas."],
                  ["Real estate", "Residential price per square metre from ImmoScout24 was combined with building footprint and levels to estimate total building value."],
                  ["Services", "The system calculates building prices, apartment prices, annual residential tax, Bavarian transfer tax and estimated population."],
                ].map(([h, p]) => (
                  <div key={h} className="border-t border-neutral-300 pt-4">
                    <div className="eyebrow text-neutral-500">{h}</div>
                    <p className="mt-3 text-neutral-600 leading-7">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">From data to services</div>
          <div className="md:col-span-8 md:col-start-5">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ["01", "Integrate", "Combine OSM, cadastral imagery, satellite information, building heights and climate observations in a common spatial framework."],
                ["02", "Model", "Generate land-use, 3D, DEM, flow-direction and precipitation surfaces, then connect them to PostgreSQL attributes."],
                ["03", "Analyse", "Derive property values, apartment and house prices, taxes, population estimates and runoff accumulation for the neighbourhood."],
              ].map(([n, h, p]) => (
                <div key={n} className="border-t border-neutral-300 pt-4">
                  <div className="eyebrow text-neutral-500">{n}</div>
                  <h3 className="mt-3 text-2xl tracking-tight">{h}</h3>
                  <p className="mt-3 text-neutral-600 leading-7">{p}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 border-y border-neutral-300 py-8">
              <div className="eyebrow text-neutral-500 mb-6">System outputs</div>
              <div className="flex flex-wrap gap-2">
                {["General land use", "Detailed land use", "Street typology", "3D buildings", "DEM", "Flow direction", "Precipitation", "Runoff accumulation", "Property prices", "House prices", "Apartment prices", "Annual tax", "Transfer tax", "Population"].map(x => (
                  <span key={x} className="border border-neutral-300 px-3 py-2 text-sm">{x}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-300">
        <div className="container py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 eyebrow">Climate scenario</div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-2xl md:text-4xl leading-tight tracking-tight">
                The same spatial database can connect urban form to rainfall and
                surface runoff.
              </p>
              <p className="mt-8 text-neutral-600 leading-7 max-w-3xl">
                The technical workflow combines interpolated precipitation with
                flow direction and the DEM. Green areas were modelled as absorbing
                15 mm of precipitation, while roads were treated as low points
                representing drainage through street gullies. The resulting maps
                show where runoff accumulates and how much water is directed toward
                drainage points.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 border-y border-neutral-300">
        <div className="container py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">Why it matters</div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-2xl md:text-4xl leading-tight tracking-tight">
              ILIS connects the physical city with the economic and environmental
              information needed to evaluate future development.
            </p>
            <p className="mt-8 max-w-3xl text-neutral-600 leading-7">
              The prototype was designed to support planners, authorities,
              researchers, insurers and real-estate actors with a shared spatial
              database. The application documentation identifies potential uses
              including infill planning, housing analysis, climate adaptation and
              future 3D cadastre development.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">Project stack</div>
          <div className="md:col-span-8 md:col-start-5 flex flex-wrap gap-2">
            {["QGIS", "ArcGIS", "ArcScene", "PostgreSQL", "OSM", "BayernAtlas", "Google Earth", "DWD", "IDW interpolation", "DEM", "Flow modelling", "3D GIS", "Land-use mapping", "Spatial database"].map(x => (
              <span key={x} className="border border-neutral-300 px-3 py-2 text-sm">{x}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-300">
        <div className="container py-8 flex justify-between">
          <a href="/#work" className="eyebrow hover:underline">← Selected work</a>
          <span className="eyebrow text-neutral-500">Munich · ILIS</span>
        </div>
      </footer>
    </main>
  );
}

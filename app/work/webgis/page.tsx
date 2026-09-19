const metrics = [
  ["5", "core spatial themes modelled and published"],
  ["2", "interactive thematic map products"],
  ["WMS", "OGC web map services delivered through GeoServer"],
  ["Full-stack", "database → services → web client workflow"],
];

export default function WebGISCaseStudy() {
  return (
    <main>
      <header className="container pt-8 md:pt-12">
        <a href="/#work" className="eyebrow hover:underline">← Back to selected work</a>
      </header>

      <section className="container pt-20 md:pt-28 pb-20">
        <div className="max-w-5xl">
          <div className="eyebrow mb-6">03 / Spatial Data Infrastructure · Web-GIS</div>
          <h1 className="text-[clamp(3.2rem,8vw,7.5rem)] leading-[.9] tracking-[-.065em] font-medium">
            A full-stack
            <br />
            <i>Web-GIS</i> for
            <br />
            planned development.
          </h1>
          <div className="mt-9 grid md:grid-cols-12 gap-8">
            <p className="md:col-span-6 text-xl md:text-2xl leading-8 tracking-tight">
              A Spatial Data Infrastructure workflow for visualizing and analysing
              a planned land-development scenario, from UML data modelling and
              PostGIS through GeoServer WMS and an interactive Leaflet client.
            </p>
            <div className="md:col-span-3 md:col-start-10">
              <div className="eyebrow text-neutral-500">Project</div>
              <div className="mt-2 text-lg">Planned land development scenario</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <figure className="overflow-hidden border border-neutral-200 bg-neutral-100">
          <img src="/images/webgis/sdi-workflow.svg" alt="Spatial Data Infrastructure workflow from UML model and PostGIS to GeoServer and Leaflet" className="block w-full h-auto" />
          <figcaption className="px-4 py-3 text-xs text-neutral-500">
            Project workflow · conceptual model → spatial database → OGC services → Web-GIS client
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-neutral-300">
        <div className="container py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">The problem</div>
          <div className="md:col-span-7 md:col-start-5 text-xl md:text-2xl leading-8">
            The project required a coherent way to represent a planned land
            development scenario and make its spatial components available through
            an SDI. The solution needed to connect structured spatial data,
            cartographic styling, web services and an interactive client so that
            development scenarios and associated infrastructure costs could be
            explored in one environment.
          </div>
        </div>
      </section>

      <section className="container py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3 eyebrow">My role</div>
        <div className="md:col-span-7 md:col-start-5 text-[17px] leading-7 text-neutral-600">
          I contributed to the end-to-end Web-GIS implementation: conceptual UML
          modelling, normalized PostGIS database design, spatial-data preparation
          in QGIS, GeoServer configuration and SLD styling, WMS publication, and
          development of the interactive Leaflet web client. The project was
          completed under the supervision of Dr. Andreas Donaubauer.
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
            The result was an integrated SDI-based application in which spatial
            datasets were stored in PostGIS, published through GeoServer as WMS,
            styled with SLD, and explored through a Leaflet web client with
            OpenStreetMap basemaps and external SDI layers.
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
                Turn a planning concept into a structured spatial information system.
              </h2>
              <p className="mt-5 text-neutral-600 leading-7">
                The planned development scenario contained multiple interacting
                spatial themes: land parcels, buildings, traffic areas, green
                spaces and renewable-energy facilities. These needed a consistent
                conceptual structure before they could be implemented and published
                as web services.
              </p>
            </div>

            <div>
              <div className="eyebrow text-neutral-500">02 / Approach</div>
              <h2 className="mt-3 text-3xl md:text-4xl tracking-tight">
                Build the SDI as a connected database, service and client stack.
              </h2>
              <p className="mt-5 text-neutral-600 leading-7">
                A UML-based conceptual data model was translated into a normalized
                PostGIS database with defined relationships, constraints and spatial
                indexing. QGIS was then used to generate and populate the spatial
                datasets before GeoServer exposed the thematic layers through WMS.
                The final Leaflet client brought those services together with
                basemaps and external SDI layers.
              </p>
            </div>

            <div>
              <div className="eyebrow text-neutral-500">03 / Key decisions</div>
              <ul className="mt-5 space-y-4 text-neutral-600 leading-7">
                <li><strong className="text-neutral-900">Normalized spatial database:</strong> structure development objects in PostGIS with explicit relationships, constraints and spatial indexes.</li>
                <li><strong className="text-neutral-900">Service-oriented publication:</strong> use GeoServer and WMS so thematic datasets can be consumed independently by web clients.</li>
                <li><strong className="text-neutral-900">Cartographic control:</strong> use Styled Layer Descriptors to define thematic representations for the published layers.</li>
                <li><strong className="text-neutral-900">Interoperable client:</strong> combine project WMS layers, OpenStreetMap and external SDI sources in Leaflet.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-300">
        <div className="container py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 eyebrow">SDI architecture</div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-2xl md:text-4xl leading-tight tracking-tight">
                Each layer of the application has a defined role: QGIS prepares
                spatial data, PostGIS provides the structured data store, GeoServer
                publishes interoperable services, and Leaflet provides the user-facing
                map.
              </p>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                {[
                  ["Conceptual model", "UML-based modelling of the planned development scenario and its spatial feature relationships."],
                  ["PostGIS", "Normalized spatial database containing land parcels, buildings, traffic areas, green spaces and renewable energy facilities, with constraints and spatial indexing."],
                  ["QGIS", "Generation and population of the project spatial datasets before service publication."],
                  ["GeoServer", "Publication of thematic topography and development-cost maps through Web Map Services (WMS)."],
                  ["SLD styling", "Thematic cartography for buildings, parcels, traffic areas, green spaces, renewable energy infrastructure and development costs."],
                  ["Leaflet", "Interactive web client integrating project WMS layers with OpenStreetMap basemaps and external SDI layers."],
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
          <div className="md:col-span-3 eyebrow">From database to map</div>
          <div className="md:col-span-8 md:col-start-5">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ["01", "Model", "UML conceptual data model translated into a normalized spatial schema."],
                ["02", "Publish", "GeoServer WMS and SLD styling expose thematic spatial information."],
                ["03", "Explore", "Leaflet combines project layers, OSM and external SDI sources for interactive exploration."],
              ].map(([n, h, p]) => (
                <div key={n} className="border-t border-neutral-300 pt-4">
                  <div className="eyebrow text-neutral-500">{n}</div>
                  <h3 className="mt-3 text-2xl tracking-tight">{h}</h3>
                  <p className="mt-3 text-neutral-600 leading-7">{p}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 border-y border-neutral-300 py-8">
              <div className="eyebrow text-neutral-500 mb-6">Published thematic layers</div>
              <div className="flex flex-wrap gap-2">
                {["Land parcels", "Buildings", "Traffic areas", "Green spaces", "Renewable energy facilities", "Development costs"].map(x => (
                  <span key={x} className="border border-neutral-300 px-3 py-2 text-sm">{x}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 border-y border-neutral-300">
        <div className="container py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">Why it matters</div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-2xl md:text-4xl leading-tight tracking-tight">
              The project demonstrates how geospatial data can move beyond static
              maps into an interoperable information system for exploring planned
              urban development.
            </p>
            <p className="mt-8 max-w-3xl text-neutral-600 leading-7">
              By connecting a structured spatial database, OGC web services and a
              browser-based client, the workflow makes development scenarios and
              infrastructure costs accessible through a single interactive map.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">Project stack</div>
          <div className="md:col-span-8 md:col-start-5 flex flex-wrap gap-2">
            {["PostGIS", "PostgreSQL", "QGIS", "GeoServer", "WMS", "SLD", "Leaflet", "OpenStreetMap", "UML", "Spatial Data Infrastructure", "Web-GIS"].map(x => (
              <span key={x} className="border border-neutral-300 px-3 py-2 text-sm">{x}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-300">
        <div className="container py-8 flex justify-between">
          <a href="/#work" className="eyebrow hover:underline">← Selected work</a>
          <span className="eyebrow text-neutral-500">Web-GIS · Spatial Data Infrastructure</span>
        </div>
      </footer>
    </main>
  );
}

const metrics = [
  ["53,258", "trips to/from three major green spaces"],
  ["1.30 m", "average overtaking distance at bike accidents"],
  ["88.4%", "R² of the starting-point regression"],
  ["85.1%", "R² of the ending-point regression"],
];

export default function MVGBikeCaseStudy() {
  return (
    <main>
      <header className="container pt-8 md:pt-12">
        <a href="/#work" className="eyebrow hover:underline">← Back to selected work</a>
      </header>

      <section className="container pt-20 md:pt-28 pb-20">
        <div className="max-w-5xl">
          <div className="eyebrow mb-6">06 / Urban Mobility · Big Geospatial Data</div>
          <h1 className="text-[clamp(3.2rem,8vw,7.5rem)] leading-[.9] tracking-[-.065em] font-medium">
            Understanding
            <br />
            urban mobility
            <br />
            <i>through geospatial data.</i>
          </h1>
          <div className="mt-9 grid md:grid-cols-12 gap-8">
            <p className="md:col-span-6 text-xl md:text-2xl leading-8 tracking-tight">
              An urban mobility analysis using anonymized MVG bike-sharing data
              to examine seasonal travel patterns, access to major green spaces,
              socioeconomic differences between districts and bicycle safety in Munich.
            </p>
            <div className="md:col-span-3 md:col-start-10">
              <div className="eyebrow text-neutral-500">Context</div>
              <div className="mt-2 text-lg">Selected Topics in Big Geospatial Data</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <figure className="overflow-hidden border border-neutral-200 bg-neutral-100">
          <img src="/images/mvg/hero.svg" alt="Urban mobility analysis workflow" className="block w-full h-auto" />
          <figcaption className="px-4 py-3 text-xs text-neutral-500">
            MVG bike trips · green-space analysis · district-level statistics · cycling safety
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-neutral-300">
        <div className="container py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">The question</div>
          <div className="md:col-span-7 md:col-start-5 text-xl md:text-2xl leading-8">
            How do bike-sharing trips interact with Munich's green spaces, and what
            spatial and socioeconomic patterns can be observed in their use and in
            bicycle safety?
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">The dataset</div>
          <div className="md:col-span-8 md:col-start-5 text-[17px] leading-7 text-neutral-600">
            The project used anonymized MVG bike-sharing records from the Munich Open
            Data Portal. Records include start and end timestamps, start and end
            coordinates, rental and return station information and rental mode.
            The workflow combined multiple phases of data, standardized types and
            delimiters, removed geographic and time outliers, and checked for
            missing or duplicated records.
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 text-neutral-100">
        <div className="container py-20">
          <div className="eyebrow text-neutral-400 mb-8">Key results reported in the study</div>
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map(([value, label]) => (
              <div key={label} className="border-t border-neutral-700 pt-4">
                <div className="text-4xl md:text-5xl tracking-tight">{value}</div>
                <div className="mt-2 text-sm text-neutral-400">{label}</div>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-4xl text-lg leading-7 text-neutral-300">
            The report found strong seasonal patterns in bike use, with higher
            activity during warmer months. In the district-level regression models,
            per-capita green space and average land value were positively associated
            with trips involving green spaces; the proportion of non-German
            population was also statistically significant in the reported models.
          </p>
        </div>
      </section>

      <section className="container py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">Three analytical methods</div>
          <div className="md:col-span-8 md:col-start-5 space-y-14">
            <div>
              <div className="eyebrow text-neutral-500">01 / Mobility patterns</div>
              <h2 className="mt-3 text-3xl md:text-4xl tracking-tight">Clean the trip data, then expose its temporal structure.</h2>
              <p className="mt-5 text-neutral-600 leading-7">
                The analysis compared overall MVG bike trips with trips associated
                with green spaces. Monthly average distances showed similar seasonal
                behaviour, with activity generally peaking during the warmer months.
                Histograms for 2016–2023 likewise showed recurring summer peaks.
              </p>
            </div>

            <div>
              <div className="eyebrow text-neutral-500">02 / Green-space access</div>
              <h2 className="mt-3 text-3xl md:text-4xl tracking-tight">Connect trip coordinates to Munich's parks and districts.</h2>
              <p className="mt-5 text-neutral-600 leading-7">
                Start and end coordinates were converted into GeoDataFrames in
                EPSG:4326 and spatially joined to polygons representing the English
                Garden, Nymphenburg Palace, Olympia Park and Munich's districts.
                Trips intersecting the green-space polygons were grouped by district
                to quantify movements to and from these locations.
              </p>
            </div>

            <div>
              <div className="eyebrow text-neutral-500">03 / Cycling safety</div>
              <h2 className="mt-3 text-3xl md:text-4xl tracking-tight">Bring accident locations together with overtaking-distance measurements.</h2>
              <p className="mt-5 text-neutral-600 leading-7">
                Bike-related accidents from the German Accident Atlas were converted
                into geographic features and linked to Munich's overtaking-distance
                GeoJSON using a nearest spatial join with a 50 m threshold. The
                merged dataset was then examined using frequency distributions,
                box plots and summary statistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-300">
        <div className="container py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 eyebrow">Green-space analysis</div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-2xl md:text-4xl leading-tight tracking-tight">
                A citywide bike dataset can be transformed into district-level
                indicators of access and use.
              </p>
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                {[
                  ["Spatial distribution", "The report describes an uneven distribution of green space and green-space area per capita across Munich districts."],
                  ["Regression one", "Trips starting in green spaces were modelled against demographic, density, per-capita green-space and land-value variables; reported R² was 0.884."],
                  ["Regression two", "Trips ending in green spaces were modelled using the same broad set of district characteristics; reported R² was 0.851."],
                  ["Trip concentration", "The three major green spaces generated or attracted 53,258 identified trips in the district-level analysis."],
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
          <div className="md:col-span-3 eyebrow">Cycling safety</div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-2xl md:text-4xl leading-tight tracking-tight">
              Spatially linking two independent datasets makes a safety question measurable.
            </p>
            <p className="mt-8 text-neutral-600 leading-7 max-w-3xl">
              The report found that the most frequent overtaking distance associated
              with bike accidents was 1.5 m, while the reported average was 1.30 m.
              It also observed concentrations of bike accidents near three major
              green spaces. The report interprets these patterns as evidence for
              improving cycling infrastructure and safety measures in locations with
              concentrated cycling activity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 border-y border-neutral-300">
        <div className="container py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 eyebrow">Technical workflow</div>
            <div className="md:col-span-8 md:col-start-5">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  ["01", "Clean", "Combine MVG phases, standardize timestamps and numeric fields, remove coordinate/time outliers and verify data quality."],
                  ["02", "Integrate", "Convert coordinates to GeoDataFrames, align CRS, spatially join trips with green spaces and districts, and join accidents with nearby overtaking measurements."],
                  ["03", "Analyse", "Use Pandas, GeoPandas, descriptive statistics, regression, maps and distribution plots to interpret mobility and safety patterns."],
                ].map(([n, h, p]) => (
                  <div key={n} className="border-t border-neutral-300 pt-4">
                    <div className="eyebrow text-neutral-500">{n}</div>
                    <h3 className="mt-3 text-2xl tracking-tight">{h}</h3>
                    <p className="mt-3 text-neutral-600 leading-7">{p}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16 border-y border-neutral-300 py-8">
                <div className="eyebrow text-neutral-500 mb-6">Project stack</div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Pandas", "GeoPandas", "MVG Open Data", "German Accident Atlas", "GeoJSON", "Shapefile", "EPSG:4326", "Spatial Join", "Regression Analysis", "QGIS / GIS analysis"].map(x => (
                    <span key={x} className="border border-neutral-300 px-3 py-2 text-sm">{x}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">Takeaway</div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-2xl md:text-4xl leading-tight tracking-tight">
              Urban mobility becomes more interpretable when trip behaviour,
              neighbourhood characteristics and street-level safety data are analysed
              in one spatial framework.
            </p>
            <p className="mt-8 max-w-3xl text-neutral-600 leading-7">
              Across the three methods, the report connects mobility demand with
              green-space distribution, district characteristics and cycling safety.
              It concludes with recommendations around more evenly distributed green
              space and targeted improvements to cycling infrastructure.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-300">
        <div className="container py-8 flex justify-between">
          <a href="/#work" className="eyebrow hover:underline">← Selected work</a>
          <span className="eyebrow text-neutral-500">Munich · MVG Bike Analysis</span>
        </div>
      </footer>
    </main>
  );
}

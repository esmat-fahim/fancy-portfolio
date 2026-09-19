const metrics = [
  ["237 GB", "UAVSAR dataset size"],
  ["20 × 5", "default multi-looking window"],
  ["2", "UAVSAR tracks analysed"],
  ["10,000 × 4,000", "selected azimuth × range subset"],
];

export default function SARCaseStudy() {
  return (
    <main>
      <header className="container pt-8 md:pt-12">
        <a href="/#work" className="eyebrow hover:underline">← Back to selected work</a>
      </header>

      <section className="container pt-20 md:pt-28 pb-20">
        <div className="max-w-5xl">
          <div className="eyebrow mb-6">04 / Earth Observation · SAR · Forest Monitoring</div>
          <h1 className="text-[clamp(3.2rem,8vw,7.5rem)] leading-[.9] tracking-[-.065em] font-medium">
            Forest height
            <br />
            estimation with <i>UAVSAR PolInSAR.</i>
          </h1>
          <div className="mt-9 grid md:grid-cols-12 gap-8">
            <p className="md:col-span-6 text-xl md:text-2xl leading-8 tracking-tight">
              A hands-on PolInSAR workflow using NASA UAVSAR data and the open-source
              Kapok Python library to investigate forest-height estimation in Pongara,
              Gabon.
            </p>
            <div className="md:col-span-3 md:col-start-10">
              <div className="eyebrow text-neutral-500">Study area</div>
              <div className="mt-2 text-lg">Pongara National Park, Gabon</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <figure className="overflow-hidden border border-neutral-200 bg-neutral-100">
          <img src="/images/sar/polinsar-workflow.svg" alt="UAVSAR PolInSAR forest height processing workflow" className="block w-full h-auto" />
          <figcaption className="px-4 py-3 text-xs text-neutral-500">
            UAVSAR → Kapok → PolInSAR processing → forest-height output
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-neutral-300">
        <div className="container py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">The problem</div>
          <div className="md:col-span-7 md:col-start-5 text-xl md:text-2xl leading-8">
            Forest structure can be difficult to characterize over large areas.
            PolInSAR combines polarimetric and interferometric SAR information to
            exploit differences between scattering mechanisms within a forest canopy.
            This project examined how UAVSAR data and the Kapok Python library could
            be used for practical forest-height analysis.
          </div>
        </div>
      </section>

      <section className="container py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3 eyebrow">My role</div>
        <div className="md:col-span-7 md:col-start-5 text-[17px] leading-7 text-neutral-600">
          I studied the SAR, InSAR and PolInSAR concepts underlying forest-height
          inversion, reviewed the AfriSAR and Pongara case studies, configured the
          Kapok processing environment, selected a computationally manageable subset
          of UAVSAR data, generated an HDF5 output and visualized the resulting
          products in Jupyter Notebook.
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
            Because the complete UAVSAR dataset was too large for the available
            computing resources, the analysis was deliberately restricted to a
            smaller Pongara subset. The resulting workflow produced visual outputs
            including coherence magnitude, coherence phase, a Pauli RGB image,
            complex coherence and a forest-height map.
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
                Make a 237 GB airborne SAR dataset computationally tractable.
              </h2>
              <p className="mt-5 text-neutral-600 leading-7">
                The full UAVSAR dataset was approximately 237 GB. With the computing
                resources available for the project, processing the complete dataset
                was not feasible, so a focused area of interest was selected rather
                than attempting to process the entire archive.
              </p>
            </div>

            <div>
              <div className="eyebrow text-neutral-500">02 / Approach</div>
              <h2 className="mt-3 text-3xl md:text-4xl tracking-tight">
                Process a targeted subset through Kapok.
              </h2>
              <p className="mt-5 text-neutral-600 leading-7">
                The analysis focused on azimuth rows 15,000–25,000 and range columns
                1,000–5,000, using tracks 0 and 1 of the five available tracks. The
                default multi-looking window of 20 pixels in azimuth by 5 pixels in
                slant range was retained, and the processed output was written to HDF5.
              </p>
            </div>

            <div>
              <div className="eyebrow text-neutral-500">03 / Key decisions</div>
              <ul className="mt-5 space-y-4 text-neutral-600 leading-7">
                <li><strong className="text-neutral-900">Targeted processing:</strong> restrict the analysis to a manageable spatial subset instead of processing the full 237 GB archive.</li>
                <li><strong className="text-neutral-900">Multi-track input:</strong> use tracks 0 and 1 from the available UAVSAR acquisitions.</li>
                <li><strong className="text-neutral-900">Default multi-looking:</strong> retain the 20 × 5 window specified by the Kapok workflow.</li>
                <li><strong className="text-neutral-900">Jupyter workflow:</strong> use Jupyter Notebook to execute smaller code sections and make error tracing more straightforward.</li>
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
                PolInSAR uses polarimetric coherence and interferometric phase
                relationships to distinguish scattering mechanisms and support
                forest-height inversion.
              </p>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                {[
                  ["SAR", "Microwave remote sensing that provides high-resolution observations independent of daylight and, in many conditions, cloud cover."],
                  ["InSAR", "Interferometric analysis of phase differences between SAR acquisitions for measuring topography and surface deformation."],
                  ["PolInSAR", "Combines polarimetric and interferometric information to characterize scattering from different layers of a forest canopy."],
                  ["Coherence", "Polarimetric coherence provides information about the relationship between scattering mechanisms and is central to forest-height inversion."],
                  ["RVoG", "The random volume over ground model is used in the reviewed forest-height workflow to relate forest structure to radar observations."],
                  ["Kapok", "An open-source Python library providing visualization, coherence analysis and RVoG inversion functions for repeat-pass PolInSAR UAVSAR data."],
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
          <div className="md:col-span-3 eyebrow">From data to output</div>
          <div className="md:col-span-8 md:col-start-5">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ["01", "Select", "Choose a computationally manageable Pongara subset from the UAVSAR archive."],
                ["02", "Process", "Use Kapok, tracks 0 and 1, multi-looking and HDF5 output to prepare the analysis dataset."],
                ["03", "Visualize", "Inspect forest height and supporting coherence, phase, Pauli RGB and complex-coherence products."],
              ].map(([n, h, p]) => (
                <div key={n} className="border-t border-neutral-300 pt-4">
                  <div className="eyebrow text-neutral-500">{n}</div>
                  <h3 className="mt-3 text-2xl tracking-tight">{h}</h3>
                  <p className="mt-3 text-neutral-600 leading-7">{p}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 border-y border-neutral-300 py-8">
              <div className="eyebrow text-neutral-500 mb-6">Outputs visualized in the report</div>
              <div className="flex flex-wrap gap-2">
                {["Forest height map", "Coherence magnitude", "Coherence phase", "Pauli RGB", "Complex coherence", "Digital elevation model"].map(x => (
                  <span key={x} className="border border-neutral-300 px-3 py-2 text-sm">{x}</span>
                ))}
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
              Practical remote sensing is as much about computational constraints
              and reproducible processing as it is about the underlying sensing
              physics.
            </p>
            <p className="mt-8 max-w-3xl text-neutral-600 leading-7">
              The report demonstrates that a focused subset can provide useful
              insight into PolInSAR forest-height processing, while also highlighting
              that small-area processing is not a substitute for the computational
              requirements of large-scale forest monitoring.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 eyebrow">Project stack</div>
          <div className="md:col-span-8 md:col-start-5 flex flex-wrap gap-2">
            {["Python", "Kapok", "UAVSAR", "PolInSAR", "RVoG", "HDF5", "Jupyter Notebook", "SAR", "InSAR", "Remote Sensing", "Forest Height Estimation"].map(x => (
              <span key={x} className="border border-neutral-300 px-3 py-2 text-sm">{x}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-300">
        <div className="container py-8 flex justify-between">
          <a href="/#work" className="eyebrow hover:underline">← Selected work</a>
          <span className="eyebrow text-neutral-500">Pongara · SAR / PolInSAR</span>
        </div>
      </footer>
    </main>
  );
}

import PortfolioLayout from "../components/PortfolioLayout";

export default function ResumePage() {
  return (
    <PortfolioLayout activePage="resume">
      <section className="relative space-y-5">
        <div className="absolute -left-6 top-6 h-24 w-24 rounded-full border-2 border-[#f7bfd1]/80 bg-white/45 blur-[1px]" />
        <div className="absolute right-2 top-2 h-3 w-3 rounded-full bg-[#ff7aa5]/75" />
        <div className="absolute right-9 top-10 h-2 w-2 rounded-full bg-[#ff9ebd]/80" />

        <article className="relative overflow-hidden rounded-[22px] border-[3px] border-[#f1a9bf]/70 bg-white/65 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.06)] md:p-8">
          <div className="pointer-events-none absolute inset-[10px] rounded-[12px] border-2 border-[#f1a9bf]/35" />
          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 inline-flex rounded-full border border-[#f1a9bf]/80 bg-[#ffe3ee] px-3 py-1 text-sm tracking-wide text-black/70">
                GAME & INTERACTIVE MEDIA
              </p>
              <h1 className="text-5xl leading-none max-md:text-4xl">Resume</h1>
              <p className="mt-3 max-w-[650px] text-sm leading-7 text-black/65">
                An overview of my background, strengths, and qualifications.
                
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#ff7aa5]/95 bg-[#ffb7cf]/95 px-5 py-2 text-lg"
            >
              Download Resume
            </a>
          </div>
        </article>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-5">
            <article className="relative rounded-[22px] border-[3px] border-[#f1a9bf]/70 bg-white/60 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
              <div className="pointer-events-none absolute inset-[9px] rounded-[12px] border-2 border-[#f1a9bf]/30" />
              <div className="relative z-10">
                <h2 className="mb-3 text-2xl">Profile</h2>
                <p className="text-sm leading-7 text-black/65">
                  2D Artist and Game Media student with a passion for concept visuals, asset styling, and interface-focused
                  illustration. Comfortable from rough idea to polished final.
                </p>
              </div>
            </article>

            <article className="relative rounded-[22px] border-[3px] border-[#f1a9bf]/70 bg-white/60 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
              <div className="pointer-events-none absolute inset-[9px] rounded-[12px] border-2 border-[#f1a9bf]/30" />
              <div className="relative z-10">
                <h2 className="mb-3 text-2xl">Skills</h2>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full border border-[#f4a9c3] bg-[#ffe8f0] px-3 py-1">Concept Art</span>
                  <span className="rounded-full border border-[#f4a9c3] bg-[#ffe8f0] px-3 py-1">Character Design</span>
                  <span className="rounded-full border border-[#f4a9c3] bg-[#ffe8f0] px-3 py-1">UI Design</span>
                  <span className="rounded-full border border-[#f4a9c3] bg-[#ffe8f0] px-3 py-1">Illustration</span>
                  <span className="rounded-full border border-[#f4a9c3] bg-[#ffe8f0] px-3 py-1">Color Direction</span>
                  <span className="rounded-full border border-[#f4a9c3] bg-[#ffe8f0] px-3 py-1">2D Sprite Animation</span>
                  <span className="rounded-full border border-[#f4a9c3] bg-[#ffe8f0] px-3 py-1">Prop Design</span>
                </div>
              </div>
            </article>

            <article className="relative rounded-[22px] border-[3px] border-[#f1a9bf]/70 bg-white/60 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
              <div className="pointer-events-none absolute inset-[9px] rounded-[12px] border-2 border-[#f1a9bf]/30" />
              <div className="relative z-10">
                <h2 className="mb-3 text-2xl">Tools</h2>
                <div className="space-y-3" aria-label="Tools proficiency bars">
                <div>
                    <div className="h-10 rounded-xl bg-[#ffeff5] p-1.5">
                      <div className="flex h-full w-[90%] items-center rounded-lg bg-gradient-to-r from-[#ffb8d8] to-[#ff90b8] px-3 text-xs text-white/95">
                        Procreate
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-10 rounded-xl bg-[#ffeff5] p-1.5">
                      <div className="flex h-full w-[80%] items-center rounded-lg bg-gradient-to-r from-[#ffacd0] to-[#ff87b0] px-3 text-xs text-white/95">
                        Canva
                      </div>
                    </div>
                  </div> 
                  <div>
                    <div className="h-10 rounded-xl bg-[#ffeff5] p-1.5">
                      <div className="flex h-full w-[50%] items-center rounded-lg bg-gradient-to-r from-[#ff9fc2] to-[#ff7aa5] px-3 text-xs text-white/95">
                        Unity Engine (Basic)
                      </div>
                    </div>
                  </div>
                 
                  
                  <div>
                    <div className="h-10 rounded-xl bg-[#ffeff5] p-1.5">
                      <div className="flex h-full w-[80%] items-center rounded-lg bg-gradient-to-r from-[#ffc3de] to-[#ff9bc0] px-3 text-xs text-white/95">
                        GitHub Desktop
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-10 rounded-xl bg-[#ffeff5] p-1.5">
                      <div className="flex h-full w-[20%] items-center rounded-lg bg-gradient-to-r from-[#ffd2e5] to-[#ffb2ce] px-3 text-xs text-white/95">
                        Blender (Beginner)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </aside>

          <div className="space-y-5">
            <article className="relative rounded-[22px] border-[3px] border-[#f1a9bf]/70 bg-white/60 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
              <div className="pointer-events-none absolute inset-[9px] rounded-[12px] border-2 border-[#f1a9bf]/30" />
              <div className="relative z-10">
                <h2 className="mb-4 text-2xl font-medium">Experience</h2>
                <div className="space-y-4">
                  <div className="rounded-xl border border-[#f3b6cb]/70 bg-white/70 p-4">
                    <p className="text-xs tracking-wide text-[#c25b82]">2022 - 2023</p>
                    <h3 className="mt-1 text-xl leading-tight text-black/85">Spec Control Intern</h3>
                    <p className="mt-1 text-sm leading-6 text-black/65">
                      TS TECH (THAILAND) CO.,LTD.
                      <br />
                      Supported document control tasks (DWG scanning, folding, and filing).
                      <br />
                      Assisted with record list control and data scanning for online sheets.
                      <br />
                      Managed Design Change Record documents and organized records for tracking.
                    </p>
                  </div>
                
                </div>
              </div>
            </article>

            <article className="relative rounded-[22px] border-[3px] border-[#f1a9bf]/70 bg-white/60 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
              <div className="pointer-events-none absolute inset-[9px] rounded-[12px] border-2 border-[#f1a9bf]/30" />
              <div className="relative z-10">
                <h2 className="mb-4 text-2xl font-medium">Education</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border border-[#f3b6cb]/70 bg-white/70 p-4">
                    <p className="text-xs tracking-wide text-[#c25b82]">2023 - Present</p>
                    <h3 className="mt-1 text-xl leading-tight text-black/85">Bangkok University</h3>
                    <p className="mt-2 text-sm italic leading-7 text-black/70">Information Technology and Innovation</p>
                    <p className="text-sm italic leading-7 text-black/70">Games and Interactive Media</p>
                    <p className="text-sm text-black/65">Current GPA 3.48</p>
                  </div>

                  <div className="rounded-xl border border-[#f3b6cb]/70 bg-white/70 p-4">
                    <p className="text-xs tracking-wide text-[#c25b82]">2020 - 2023</p>
                    <h3 className="mt-1 text-xl leading-tight text-black/85">Saraburi Technical College</h3>
                    <p className="mt-2 text-sm italic leading-7 text-black/70">Business Computer</p>
                    <p className="text-sm text-black/65">GPA 3.87</p>
                  </div>

                  <div className="rounded-xl border border-[#f3b6cb]/70 bg-white/70 p-4">
                    <p className="text-xs tracking-wide text-[#c25b82]">2017 - 2020</p>
                    <h3 className="mt-1 text-xl leading-tight text-black/85">Nongkhae Sorakitpittaya School</h3>
                    <p className="mt-2 text-sm text-black/65">GPA 3.41</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="relative rounded-[22px] border-[3px] border-[#f1a9bf]/70 bg-white/60 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
              <div className="pointer-events-none absolute inset-[9px] rounded-[12px] border-2 border-[#f1a9bf]/30" />
              <div className="relative z-10">
                <h2 className="mb-4 text-2xl">Highlights</h2>
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-xl border border-[#f3b6cb]/70 bg-[#fff4f8] p-3">
                    <p className="text-xs text-[#c25b82]">FAST LEARNER</p>
                    <p className="text-sm text-black/70">Enjoy learning new things and quickly adapting to new workflows.</p>
                  </div>
                  <div className="rounded-xl border border-[#f3b6cb]/70 bg-[#fff4f8] p-3">
                    <p className="text-xs text-[#c25b82]">HARDWORKING</p>
                    <p className="text-sm text-black/70">Dedicated, responsible, and consistent in completing tasks on time.</p>
                  </div>
                  <div className="rounded-xl border border-[#f3b6cb]/70 bg-[#fff4f8] p-3">
                    <p className="text-xs text-[#c25b82]">PATIENT</p>
                    <p className="text-sm text-black/70">Patient and persistent when solving problems and improving details.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}

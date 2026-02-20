import Link from "next/link";
import Image from "next/image";
import PortfolioLayout from "./components/PortfolioLayout";

export default function Home() {
  return (
    <PortfolioLayout activePage="about">
      <section className="grid items-center gap-11 md:grid-cols-[1fr_1.2fr]">
        <article className="relative rounded-[22px] border-[3px] border-[#f1a9bf]/70 bg-white/55 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.06)]">
          <div className="pointer-events-none absolute inset-[10px] rounded-[12px] border-2 border-[#f1a9bf]/35" />

          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            <div className="grid h-60 w-[190px] place-items-center overflow-hidden rounded-2xl border-2 border-dashed border-[#f1a9bf]/90 bg-white/65">
              <div className="relative h-full w-full">
                <Image src="/puifaii.jpg" alt="Kanyaluk Phenglee" fill className="object-cover" />
              </div>
            </div>

            <h1 className="text-4xl leading-tight">Kanyaluk<br />Phenglee</h1>

            <div className="-mt-1 flex items-center gap-2.5">
              <div className="h-0.5 w-[72px] rounded-full bg-[#f08aac]" />
              <div className="grid h-[18px] w-[18px] place-items-center text-[#ff5f98]">♡</div>
              <div className="h-0.5 w-[72px] rounded-full bg-[#f5a7c4]" />
            </div>

            <p className="text-3xl">2D Artist</p>

            <a
              href="https://www.instagram.com/pf.kxnyxluk_?igsh=Nmpnanljb2U2aXB2&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="mt-2 inline-flex items-center justify-center rounded-full border-2 border-[#f1a9bf]/80 bg-white/70 p-3 text-xl"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Z" stroke="currentColor" strokeWidth="2" />
                <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </article>

        <article className="-translate-y-10">
          <h2 className="mb-2 text-7xl leading-none max-md:text-6xl pb-5">Portfolio</h2>
          <p className="mb-4 text-3xl text-black/80 pb-5">Simple ideas. Strong results.</p>

          <div className="mb-5 flex items-center gap-4 pb-5">
            <Link
              href="/resume"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#ff7aa5]/95 bg-[#ffb7cf]/95 px-5 py-2 text-2xl"
            >
              RESUME
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border-2 border-black/85 bg-white/55 px-5 py-2 text-2xl"
            >
              PROJECT
            </Link>
          </div>

          <p className="max-w-[420px] text-sm leading-7 text-black/65 pb-">
            Student at Bangkok University
            <br />
            Faculty of Information Technology and Innovation
            <br />
            (Game & Interactive Media).
          </p>
        </article>
      </section>
    </PortfolioLayout>
  );
}

"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

type ActivePage = "about" | "resume" | "projects";

type PortfolioLayoutProps = {
  activePage: ActivePage;
  children: ReactNode;
};

const navClass = (isActive: boolean) =>
  `relative text-2xl leading-none ${isActive ? "after:absolute after:-bottom-2 after:left-[-6px] after:right-[-6px] after:h-2.5 after:rounded-full after:bg-[#ffb7cf]/70 after:content-['']" : ""}`;

export default function PortfolioLayout({ activePage, children }: PortfolioLayoutProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const bubbleSoundsRef = useRef<HTMLAudioElement[]>([]);
  const isAudioReadyRef = useRef(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    bubbleSoundsRef.current = ["/Bubble1.mp3", "/Bubble2.mp3", "/Bubble3.mp3"].map((src) => {
      const audio = new Audio(src);
      audio.preload = "auto";
      audio.volume = 0.28;
      return audio;
    });

    const unlockAudio = () => {
      isAudioReadyRef.current = true;
      bubbleSoundsRef.current.forEach((audio) => {
        const originalMuted = audio.muted;
        audio.muted = true;
        void audio.play().then(() => {
          audio.pause();
          audio.currentTime = 0;
          audio.muted = originalMuted;
        }).catch(() => {
          audio.muted = originalMuted;
        });
      });
    };

    const playBubbleSound = () => {
      if (!isAudioReadyRef.current) return;
      const sounds = bubbleSoundsRef.current;
      if (!sounds.length) return;

      const randomIndex = Math.floor(Math.random() * sounds.length);
      const soundToPlay = sounds[randomIndex].cloneNode(true) as HTMLAudioElement;
      soundToPlay.volume = 0.28;
      soundToPlay.currentTime = 0;
      void soundToPlay.play().catch(() => {
        // Ignore blocked playback; user interaction is required by browser policy.
      });
    };

    const handlePopTick = (event: AnimationEvent) => {
      if (event.animationName !== "bubble-pop-tick") return;
      playBubbleSound();
    };

    const bubbleElements = rootRef.current?.querySelectorAll<HTMLElement>(".bubble-pop") ?? [];
    bubbleElements.forEach((bubble) => bubble.addEventListener("animationiteration", handlePopTick));

    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });

    return () => {
      bubbleElements.forEach((bubble) => bubble.removeEventListener("animationiteration", handlePopTick));
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative flex min-h-screen flex-col overflow-hidden bg-[#fde7ef] text-[#1b1b1b]">
      <div className="bubble-layer pointer-events-none absolute inset-0">
        <div className="bubble bubble-1 bubble-pop" />
        <div className="bubble bubble-2 bubble-pop" />
        <div className="bubble bubble-3 bubble-pop" />
        <div className="bubble bubble-4 bubble-pop" />
        <div className="bubble bubble-5" />
        <div className="bubble bubble-6 bubble-pop" />
        <div className="bubble bubble-7" />
        <div className="bubble bubble-8" />
      </div>

      <header className="fixed top-0 z-40 w-full border-b-2 border-[#f1a9bf]/60 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-[min(1100px,92vw)] items-center justify-between py-6">
          <Link href="/" aria-label="Go to About Me" className="flex items-center gap-2 text-black no-underline">
            <div aria-hidden className="grid h-5 w-5 place-items-center text-pink-500">{"\u2661"}</div>
            <div>
              <span className="text-[24px] leading-none md:text-[35px]">Kanyaluk Phenglee</span>
              <span className="ml-1 text-[14px] text-black/55 md:ml-1.5 md:text-[20px]">/ Portfolio</span>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMobileNavOpen}
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#f1a9bf]/80 bg-white/80 text-black/80 md:hidden"
          >
            <span className="text-2xl leading-none">{isMobileNavOpen ? "\u2715" : "\u2630"}</span>
          </button>

          <nav className="hidden gap-6 text-xl tracking-wide md:flex">
            <Link href="/" className={navClass(activePage === "about")}>ABOUT ME</Link>
            <Link href="/resume" className={navClass(activePage === "resume")}>RESUME</Link>
            <Link href="/projects" className={navClass(activePage === "projects")}>PROJECTS</Link>
          </nav>
        </div>

        {isMobileNavOpen && (
          <nav className="border-t border-[#f1a9bf]/60 bg-white/95 px-4 py-3 md:hidden">
            <div className="mx-auto grid w-[min(1100px,92vw)] gap-2 text-base tracking-wide">
              <Link
                href="/"
                onClick={() => setIsMobileNavOpen(false)}
                className={`rounded-lg border px-3 py-2 ${activePage === "about" ? "border-[#ff8bb4] bg-[#ffe7f0]" : "border-[#f1a9bf]/50 bg-white"}`}
              >
                ABOUT ME
              </Link>
              <Link
                href="/resume"
                onClick={() => setIsMobileNavOpen(false)}
                className={`rounded-lg border px-3 py-2 ${activePage === "resume" ? "border-[#ff8bb4] bg-[#ffe7f0]" : "border-[#f1a9bf]/50 bg-white"}`}
              >
                RESUME
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsMobileNavOpen(false)}
                className={`rounded-lg border px-3 py-2 ${activePage === "projects" ? "border-[#ff8bb4] bg-[#ffe7f0]" : "border-[#f1a9bf]/50 bg-white"}`}
              >
                PROJECTS
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="relative z-10 flex min-h-screen items-center border-y-2 border-[#f1a9bf]/60 pt-32 pb-12">
        <div className="mx-auto w-[min(1100px,92vw)]">{children}</div>
      </main>

      <footer className="relative z-10 border-t-2 border-[#f1a9bf]/60 bg-white">
        <div className="flex w-full justify-end px-16 py-5 max-md:px-6">
          <div className="min-w-[360px] text-center max-md:min-w-0 max-md:w-full">
            <p className="mb-2 text-xl">Contact</p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-black/75">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f1a9bf]/60 bg-[#fde7ef]/90 px-3 py-2">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 8.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                @pf.kxnyxluk_
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f1a9bf]/60 bg-[#fde7ef]/90 px-3 py-2">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
                  <path d="M7 3h4l2 5-2 1c1 3 3 5 6 6l1-2 5 2v4c0 1-1 2-2 2C10 21 3 14 3 5c0-1 1-2 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                095-734-6581
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f1a9bf]/60 bg-[#fde7ef]/90 px-3 py-2">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
                  <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" />
                  <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Kanyaluk.ph@gmail.com
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PortfolioLayout from "../components/PortfolioLayout";

type ArtProject = {
  title: string;
  category: string;
  summary: string;
  role: string;
  medium: string[];
  mood: string[];
  status: string;
  galleryImage?: string;
  galleryImages?: string[];
  processImage?: string;
  workflowEnabled?: boolean;
  workflowSteps?: string[];
  workflowImages?: Record<string, string>;
  processLabel?: string;
  artworkPreviewEnabled?: boolean;
  processModalStyle?: "old" | "new";
  processPreviewEnabled?: boolean;
  processFitScreen?: boolean;
  workflowMaxItems?: number;
  workflowHorizontal?: boolean;
  galleryButtonLabel?: string;
  galleryLink?: string;
  showProcessButton?: boolean;
  previewLabel?: string;
};

const artProjectTemplates: ArtProject[] = [
  {
    title: "White Blood Cell vs Bacteria Environment Art (2D)",
    category: "Environment Art",
    summary:
      "I design and illustrate game environments, including backgrounds, platform/tilesets, and props. I also create small animations, deliver production ready files to the development team, and manage version control using Git.",
    role: "2D Environment Artist (Background / Tileset / Props / Simple Animation)",
    medium: ["Procreate", "Git"],
    mood: ["Environment Art", "Background", "Tileset", "Props", "Animation"],
    galleryImage: "/EnvironmentArtPRE1.png",
    processImage: "/ChibiEyeBreakdown1.png",
    status: "In Progress",
    processLabel: "Eye Rendering Process",
    processModalStyle: "old",
    processPreviewEnabled: false,
    processFitScreen: true,
    workflowEnabled: true,
    workflowSteps: ["Blackground", "Platform", "Prop"],
    workflowHorizontal: true,
    workflowImages: {
      Blackground: "/BGBTR.jpg",
      "Platform": "/PlatformBTR.jpg",
      "Prop": "/PropBTR.jpg",
      Shading: "/Shading.png",
      Final: "/final.png",
    },
    artworkPreviewEnabled: true,
  },
  {
     title: "Chibi Character Design Series",
    category: "Character Design",
    summary:
      "This character concept is inspired by an ice themed heroine aesthetic and a spy, action team atmosphere, reimagined into an original stylized chibi character.",
    role: "2D Artist / Character Designer",
    medium: ["Procreate"],
    mood: ["Chibi", "Stylized", "Cute", "Character Design", "Line Art"],
    galleryImage: "/Final.png",
    processImage: "/ChibiEyeBreakdown1.png",
    processLabel: "Eye Rendering Process",
    processModalStyle: "old",
    processPreviewEnabled: true,
    status: "Featured",
    workflowEnabled: true,
    workflowSteps: ["Sketch", "Line Art", "Flat Color", "Shading", "Final"],
    workflowImages: {
      Sketch: "/Sketch.png",
      "Line Art": "/Line Art.png",
      "Flat Color": "/FlatColor.png",
      Shading: "/Shading.png",
      Final: "/final.png",
    },
  },
  {
    title: "Sky - 2D Game Animation Set",
    category: "Character Animation",
    summary:
      "A small 2D animation set for “Sky” with three actions (Idle, Run, Jump), designed for in-game readability and smooth looping.",
    role: "2D Artist / Character Designer",
    medium: ["Procreate"],
    mood: ["2D Animation", "Character Animation", "Sprite"],
    galleryImages: ["/Sky_IdleAnim.gif", "/Sky_RunAnim.gif", "/Sky_JumpAnim.gif"],
    processImage: "/Sky_RunAnim.gif",
    processLabel: "Eye Rendering Process",
    processModalStyle: "old",
    processPreviewEnabled: false,
    processFitScreen: true,
    status: "Featured",
    workflowEnabled: true,
    workflowSteps: ["Idle Frame", "Run Frame", "Jump Frame"],
    workflowMaxItems: 3,
    workflowHorizontal: true,
    workflowImages: {
      "Idle Frame": "/frame_Idle.png",
      "Run Frame": "/frame_Run.png",
      "Jump Frame": "/frame_Jump.png",
      Shading: "/Shading.png",
      Final: "/final.png",
    },
  },  
  {
     title: "WOPWAP board game",
    category: "Game Design",
    summary:
      "A 4 - 8 player hidden role party game with day/night phases, voting, and item cards.",
    role: "Game Designer ( Core gameplay, roles, items, balancing, playtesting )",
    medium: ["Game Design Document ( GDD )"],
    mood: ["Game Design", "Board Game", "Systems Design", "Balancing", "Playtesting"],
    galleryImage: "/WOPWAPPRE.jpeg",
    processImage: "/ChibiEyeBreakdown1.png",
    processLabel: "Eye Rendering Process",
    processModalStyle: "old",
    processPreviewEnabled: true,
    status: "Featured",
    workflowEnabled: true,
    workflowSteps: ["Sketch", "Line Art", "Flat Color", "Shading", "Final"],
    workflowImages: {
      Sketch: "/Sketch.png",
      "Line Art": "/Line Art.png",
      "Flat Color": "/FlatColor.png",
      Shading: "/Shading.png",
      Final: "/final.png",
    },
    galleryButtonLabel: "View GDD ( PDF )",
    galleryLink: "/GDD%20WOPWAP.pdf",
    showProcessButton: false,
    previewLabel: "GAME PREVIEW",
  },
];

const defaultWorkflowSteps = ["Sketch", "Line Art", "Flat Color", "Shading", "Final"];

export default function ProjectsPage() {
  const featured = artProjectTemplates[0];
  const [activeProcessProject, setActiveProcessProject] = useState<ArtProject | null>(null);
  const [activeGalleryProject, setActiveGalleryProject] = useState<ArtProject | null>(null);
  const isArtworkPreviewEnabled = (project: ArtProject) => project.artworkPreviewEnabled ?? true;
  const isProcessPreviewEnabled = (project: ArtProject) => project.processPreviewEnabled ?? true;
  const isNewProcessModalStyle = (project: ArtProject) => (project.processModalStyle ?? "new") === "new";
  const isProcessFitScreen = (project: ArtProject) => project.processFitScreen ?? false;
  const workflowMaxItems = (project: ArtProject) => project.workflowMaxItems ?? 5;
  const isWorkflowHorizontal = (project: ArtProject) => project.workflowHorizontal ?? false;
  const getGalleryButtonLabel = (project: ArtProject) => project.galleryButtonLabel ?? "View Gallery";
  const shouldShowProcessButton = (project: ArtProject) => project.showProcessButton ?? true;
  const getPreviewLabel = (project: ArtProject) => project.previewLabel ?? "Artwork Preview";
  const normalizeImageSrc = (src?: string) => {
    if (!src) return "/final.png";
    const cleaned = src.trim().replace(/\\/g, "/");
    if (!cleaned) return "/final.png";
    if (cleaned.startsWith("/") || cleaned.startsWith("http://") || cleaned.startsWith("https://") || cleaned.startsWith("data:")) {
      return cleaned;
    }
    return `/${cleaned}`;
  };
  const getGalleryImages = (project: ArtProject) => {
    if (project.galleryImages && project.galleryImages.length > 0) {
      const normalized = project.galleryImages.map((src) => normalizeImageSrc(src)).filter(Boolean);
      return normalized.length > 0 ? normalized : ["/final.png"];
    }
    return [normalizeImageSrc(project.galleryImage)];
  };
  const handleGalleryAction = (project: ArtProject) => {
    if (project.galleryLink) {
      window.open(project.galleryLink, "_blank", "noopener,noreferrer");
      return;
    }
    setActiveGalleryProject(project);
  };

  useEffect(() => {
    if (!activeProcessProject && !activeGalleryProject) return;

    const onEsc = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setActiveProcessProject(null);
      setActiveGalleryProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [activeProcessProject, activeGalleryProject]);

  return (
    <PortfolioLayout activePage="projects">
      <section className="relative space-y-5">
        <div className="absolute -left-6 top-10 h-20 w-20 rounded-full border-2 border-[#f7bfd1]/80 bg-white/45 blur-[1px]" />
        <div className="absolute right-4 top-3 h-3 w-3 rounded-full bg-[#ff7aa5]/70" />

        <article className="relative overflow-hidden rounded-[22px] border-[3px] border-[#f1a9bf]/70 bg-white/65 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.06)] md:p-8">
          <div className="pointer-events-none absolute inset-[10px] rounded-[12px] border-2 border-[#f1a9bf]/35" />
          <div className="relative z-10">
            <p className="mb-2 inline-flex rounded-full border border-[#f1a9bf]/80 bg-[#ffe3ee] px-3 py-1 text-xs tracking-wide text-black/70">
              PORTFOLIO
            </p>
            <h1 className="text-5xl leading-none max-md:text-4xl">Projects</h1>
            <p className="mt-3 max-w-[780px] text-sm leading-7 text-black/65">
              Welcome to my portfolio showcasing my work, projects, and what I’m currently developing.
            </p>
          </div>
        </article>

        <article className="relative rounded-[22px] border-[3px] border-[#f1a9bf]/70 bg-white/60 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
          <div className="pointer-events-none absolute inset-[9px] rounded-[12px] border-2 border-[#f1a9bf]/30" />
          <div className={`relative z-10 grid gap-4 ${isArtworkPreviewEnabled(featured) ? "md:grid-cols-[1.05fr_0.95fr]" : "md:grid-cols-1"}`}>
            <div>
              <p className="mb-2 text-xs tracking-wide text-[#c25b82]">{featured.category}</p>
              <h2 className="text-3xl leading-tight max-md:text-2xl">{featured.title}</h2>
              <p className="mt-3 text-sm leading-7 text-black/65">{featured.summary}</p>

              <div className="mt-4 space-y-2 text-sm text-black/70">
                <p>
                  <span className="text-[#c25b82]">Role:</span> {featured.role}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.medium.map((item) => (
                    <span key={item} className="rounded-full border border-[#f3b6cb]/80 bg-[#ffedf4] px-3 py-1 text-xs text-black/75">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {featured.mood.map((item) => (
                    <span key={item} className="rounded-full border border-[#f5c2d4]/80 bg-white px-3 py-1 text-xs text-[#b86586]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {isArtworkPreviewEnabled(featured) && (
              <div className="rounded-xl border border-dashed border-[#f2a8c4]/70 bg-[#fff4f8] p-4">
                <p className="text-xs uppercase tracking-wide text-[#c25b82]">{getPreviewLabel(featured)}</p>
                <div className="relative mt-2 h-[145px] overflow-hidden rounded-lg border border-[#f2b8cd]/80 bg-white/70">
                  <Image src={getGalleryImages(featured)[0]} alt={`${featured.title} preview`} fill className="object-contain" />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleGalleryAction(featured)}
                    className="rounded-full border border-[#f08bb2]/90 bg-[#ffb7cf]/90 px-3 py-1.5 text-xs"
                  >
                    {getGalleryButtonLabel(featured)}
                  </button>
                  {shouldShowProcessButton(featured) && (
                    <button
                      type="button"
                      onClick={() => setActiveProcessProject(featured)}
                      className="rounded-full border border-black/70 bg-white px-3 py-1.5 text-xs transition hover:-translate-y-0.5 hover:shadow-[0_8px_14px_rgba(0,0,0,0.12)]"
                    >
                      Process Sheet
                    </button>
                  )}
                  <span className="ml-auto rounded-full border border-[#f2b8cd] bg-white px-3 py-1 text-xs text-black/65">
                    {featured.status}
                  </span>
                </div>
              </div>
            )}
          </div>
        </article>

        <div className="grid gap-5 md:grid-cols-1">
          {artProjectTemplates.slice(1).map((project) => (
            <article key={project.title} className="relative rounded-[22px] border-[3px] border-[#f1a9bf]/70 bg-white/60 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
            <div className="pointer-events-none absolute inset-[9px] rounded-[12px] border-2 border-[#f1a9bf]/30" />
            <div className={`relative z-10 grid gap-4 ${isArtworkPreviewEnabled(project) ? "md:grid-cols-[1.05fr_0.95fr]" : "md:grid-cols-1"}`}>
            <div>
              <p className="mb-2 text-xs tracking-wide text-[#c25b82]">{project.category}</p>
              <h2 className="text-3xl leading-tight max-md:text-2xl">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-black/65">{project.summary}</p>

              <div className="mt-4 space-y-2 text-sm text-black/70">
                <p>
                  <span className="text-[#c25b82]">Role:</span> {project.role}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.medium.map((item) => (
                    <span key={item} className="rounded-full border border-[#f3b6cb]/80 bg-[#ffedf4] px-3 py-1 text-xs text-black/75">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.mood.map((item) => (
                    <span key={item} className="rounded-full border border-[#f5c2d4]/80 bg-white px-3 py-1 text-xs text-[#b86586]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {isArtworkPreviewEnabled(project) && (
              <div className="rounded-xl border border-dashed border-[#f2a8c4]/70 bg-[#fff4f8] p-4">
                <p className="text-xs uppercase tracking-wide text-[#c25b82]">{getPreviewLabel(project)}</p>
                <div className="relative mt-2 h-[145px] overflow-hidden rounded-lg border border-[#f2b8cd]/80 bg-white/70">
                  <Image src={getGalleryImages(project)[0]} alt={`${project.title} preview`} fill className="object-contain" />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleGalleryAction(project)}
                    className="rounded-full border border-[#f08bb2]/90 bg-[#ffb7cf]/90 px-3 py-1.5 text-xs"
                  >
                    {getGalleryButtonLabel(project)}
                  </button>
                  {shouldShowProcessButton(project) && (
                    <button
                      type="button"
                      onClick={() => setActiveProcessProject(project)}
                      className="rounded-full border border-black/70 bg-white px-3 py-1.5 text-xs transition hover:-translate-y-0.5 hover:shadow-[0_8px_14px_rgba(0,0,0,0.12)]"
                    >
                      Process Sheet
                    </button>
                  )}
                  <span className="ml-auto rounded-full border border-[#f2b8cd] bg-white px-3 py-1 text-xs text-black/65">
                    {project.status}
                  </span>
                </div>
              </div>
            )}
          </div>
        </article>
          ))}
        </div>


        
        {activeProcessProject && (
          <div
            className="fixed inset-0 z-50 overflow-hidden bg-black/45 md:grid md:place-items-center md:p-4"
            onClick={() => setActiveProcessProject(null)}
          >
            <div
              className={`relative h-[100dvh] w-[96vw] overflow-y-auto bg-[#fff4f8] p-4 pt-16 md:h-auto md:overflow-y-auto md:rounded-[24px] md:border-[3px] md:border-[#f4afc6]/80 md:p-7 md:pt-7 md:shadow-[0_24px_70px_rgba(0,0,0,0.35)] ${
                isProcessFitScreen(activeProcessProject)
                  ? "md:w-[min(1320px,98vw)] md:max-h-[92dvh]"
                  : "md:w-[min(1120px,96vw)] md:max-h-[90dvh]"
              }`}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close process sheet"
                onClick={() => setActiveProcessProject(null)}
                className="absolute right-3 top-3 z-20 grid h-11 w-11 place-items-center rounded-full border border-[#e08cae] bg-white text-base text-[#9e3d63] transition hover:scale-105 md:h-9 md:w-9 md:text-sm"
              >
                X
              </button>

              <div className="sticky top-0 z-10 -mx-4 mb-4 border-b border-[#f0adc5]/50 bg-[#fff4f8]/95 px-4 py-3 backdrop-blur md:static md:m-0 md:mb-3 md:border-0 md:bg-transparent md:p-0">
                <p className="inline-flex w-fit max-w-[calc(100%-3.5rem)] truncate whitespace-nowrap rounded-full border border-[#f0adc5]/80 bg-white px-3 py-1 text-xs text-[#ad5579]">
                  {activeProcessProject.title}
                </p>
              </div>

              {isNewProcessModalStyle(activeProcessProject) && (
                <h3 className="mb-3 text-xl text-[#9e3d63] md:text-2xl">Workflow</h3>
              )}

              <div className={`grid gap-5 md:items-start ${isProcessPreviewEnabled(activeProcessProject) ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
                {isProcessPreviewEnabled(activeProcessProject) && (
                <div>
                  {!isNewProcessModalStyle(activeProcessProject) && (
                    <h3 className="mb-3 text-xl text-[#9e3d63] md:text-2xl">{activeProcessProject.processLabel ?? "Process Sheet"}</h3>
                  )}
                  <div className="relative mx-auto w-full max-w-[980px] overflow-hidden rounded-2xl border-2 border-[#f0adc5]/70 bg-white aspect-square lg:mx-0">
                    <Image
                      src={
                        activeProcessProject.processImage
                          ? normalizeImageSrc(activeProcessProject.processImage)
                          : getGalleryImages(activeProcessProject)[0]
                      }
                      alt={`${activeProcessProject.title} process`}
                      fill
                      className="object-contain"
                    />

                    <div className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-[#ffd8e7]/45 blur-lg" />
                    <div className="pointer-events-none absolute -bottom-8 -right-4 h-24 w-24 rounded-full bg-[#ffc5db]/35 blur-lg" />
                  </div>
                </div>
                )}

                {activeProcessProject.workflowEnabled && (
                  <div>
                    {!isNewProcessModalStyle(activeProcessProject) && (
                      <h3 className="mb-3 text-xl text-[#9e3d63] md:text-2xl">Workflow</h3>
                    )}
                    <div className="w-full overflow-hidden rounded-2xl border-2 border-[#f0adc5]/70 bg-white/65 p-3 md:p-4">
                      <div
                        className={`flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto pb-1 pr-1 md:grid md:gap-3 md:overflow-visible md:pb-0 md:pr-0 ${
                          isWorkflowHorizontal(activeProcessProject) ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"
                        }`}
                      >
                        {(activeProcessProject.workflowSteps ?? defaultWorkflowSteps).slice(0, workflowMaxItems(activeProcessProject)).map((step) => (
                          <div key={step} className="flex min-w-[88%] snap-start flex-col rounded-xl border border-[#f2b4cb]/80 bg-[#fff8fb] p-2.5 sm:min-w-[70%] md:min-w-0">
                            <p className="mb-2 text-center text-xs text-[#ad5579]">{step}</p>
                            {(activeProcessProject.workflowImages ?? {})[step] ? (
                              <div
                                className={`relative w-full overflow-hidden rounded-lg border-2 border-dashed border-[#f3bfd3] bg-white ${
                                  isWorkflowHorizontal(activeProcessProject) ? "aspect-video" : "aspect-[3/4]"
                                }`}
                              >
                                <Image src={(activeProcessProject.workflowImages ?? {})[step]} alt={`${step} workflow`} fill className="object-contain" />
                              </div>
                            ) : (
                              <div
                                className={`grid w-full place-items-center rounded-lg border-2 border-dashed border-[#f3bfd3] bg-white text-[10px] text-black/40 ${
                                  isWorkflowHorizontal(activeProcessProject) ? "aspect-video" : "aspect-[3/4]"
                                }`}
                              >
                                Add Image
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {!activeProcessProject.workflowEnabled && (
                  <div className="rounded-2xl border-2 border-dashed border-[#f0adc5]/70 bg-white/60 p-5 text-sm text-black/60">
                    Workflow dont have
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeGalleryProject && (
          <div className="fixed inset-0 z-50 overflow-hidden bg-black/45 md:grid md:place-items-center md:p-4" onClick={() => setActiveGalleryProject(null)}>
            <div
              className="relative h-[100dvh] w-[96vw] overflow-y-auto bg-[#fff4f8] p-4 pt-16 md:h-auto md:w-[min(980px,96vw)] md:max-h-[90dvh] md:overflow-y-auto md:rounded-[24px] md:border-[3px] md:border-[#f4afc6]/80 md:p-7 md:pt-7 md:shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close gallery"
                onClick={() => setActiveGalleryProject(null)}
                className="absolute right-3 top-3 z-20 grid h-11 w-11 place-items-center rounded-full border border-[#e08cae] bg-white text-base text-[#9e3d63] transition hover:scale-105 md:h-9 md:w-9 md:text-sm"
              >
                X
              </button>

              <h3 className="mb-4 text-2xl text-[#9e3d63] md:text-3xl">{activeGalleryProject.title}</h3>
              <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
                {getGalleryImages(activeGalleryProject).map((imageSrc, index) => (
                  <div
                    key={`${activeGalleryProject.title}-${imageSrc}-${index}`}
                    className="relative aspect-[4/5] min-w-full snap-start overflow-hidden rounded-2xl border-2 border-[#f0adc5]/70 bg-white md:aspect-[16/10]"
                  >
                    <Image src={imageSrc} alt={`${activeGalleryProject.title} gallery ${index + 1}`} fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
      </section>
    </PortfolioLayout>
  );
}

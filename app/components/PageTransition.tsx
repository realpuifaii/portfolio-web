"use client";

import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [transitionSeed, setTransitionSeed] = useState(0);

  useEffect(() => {
    setTransitionSeed((prev) => prev + 1);
  }, [pathname]);

  const animationName = transitionSeed % 2 === 0 ? "page-in-a" : "page-in-b";
  const style: CSSProperties = { animationName };

  return (
    <div className="page-transition" style={style}>
      {children}
    </div>
  );
}

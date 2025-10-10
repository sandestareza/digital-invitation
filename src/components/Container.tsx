import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  children,
  className = "justify-center items-center h-screen",
  parallax="bg-parallax",
  id,
}: Readonly<{
  children: React.ReactNode;
  withDecoration?: boolean;
  className?: string;
  parallax?: string
  id?: string;
}>) {
  return (
    <section
      id={id}
      className={cn(`w-full overflow-hidden relative flex flex-col justify-center items-center h-screen section-marker`, className)}
    >
      

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className={parallax}></div>
      </div>
      {children}
    </section>
  );
}

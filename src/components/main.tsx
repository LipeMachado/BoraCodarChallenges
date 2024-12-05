"use client"

import { useEffect, useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

interface Project {
  link: string;
  title: string;
  description: string;
}

export function Main() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects || []);
      })
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <main className="flex items-center justify-between mx-0 lg:mx-32 px-2 py-4">
      <HoverEffect items={projects} />
    </main>
  );
}

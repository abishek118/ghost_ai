"use client"

import * as React from "react"
import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-base text-copy-primary">
      {/* Editor Top Navbar */}
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        centerContent={
          <span className="font-mono text-xs text-copy-muted">
            workspace / distributed-streaming-pipeline
          </span>
        }
      />

      {/* Editor Canvas Area */}
      <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-[radial-gradient(#2a2a30_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="pointer-events-none select-none text-center space-y-1.5">
          <p className="text-sm font-medium text-copy-muted">
            System Design Canvas Area
          </p>
          <p className="text-xs text-copy-faint">
            The project sidebar floats above this surface without shifting page content.
          </p>
        </div>

        {/* Floating Project Sidebar */}
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onNewProject={() => {}}
        />
      </main>
    </div>
  )
}

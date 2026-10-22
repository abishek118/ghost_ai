"use client"

import * as React from "react"
import { FolderKanban, Plus, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export interface ProjectSidebarProps {
  isOpen: boolean
  onClose?: () => void
  onNewProject?: () => void
  className?: string
}

export function ProjectSidebar({
  isOpen,
  onClose,
  onNewProject,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      data-slot="project-sidebar"
      aria-label="Projects sidebar"
      aria-hidden={!isOpen}
      className={cn(
        "absolute top-3 bottom-3 left-3 z-40 flex w-80 max-w-[calc(100vw-1.5rem)] flex-col rounded-2xl border border-surface-border bg-surface/95 backdrop-blur-md shadow-2xl transition-all duration-300 ease-in-out",
        isOpen
          ? "translate-x-0 opacity-100"
          : "-translate-x-[calc(100%+1.5rem)] pointer-events-none opacity-0",
        className
      )}
    >
      {/* Header */}
      <div
        data-slot="project-sidebar-header"
        className="flex items-center justify-between border-b border-surface-border px-4 py-3"
      >
        <h2 className="text-base font-semibold text-copy-primary">Projects</h2>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close projects sidebar"
          className="text-copy-muted hover:bg-subtle hover:text-copy-primary"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Tabs section */}
      <Tabs
        defaultValue="my-projects"
        className="flex flex-1 flex-col overflow-hidden"
      >
        <div className="px-4 pt-3 pb-2">
          <TabsList className="grid w-full grid-cols-2 border border-surface-border bg-subtle">
            <TabsTrigger value="my-projects">My Projects</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>
        </div>

        {/* My Projects empty state */}
        <TabsContent
          value="my-projects"
          className="flex flex-1 flex-col items-center justify-center p-6 text-center"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-border bg-subtle text-copy-muted">
            <FolderKanban className="h-8 w-8 text-copy-muted" />
          </div>
          <p className="text-sm font-medium text-copy-primary">
            No projects yet
          </p>
          <p className="mt-1 max-w-[210px] text-xs text-copy-muted">
            Create your first system design project to get started.
          </p>
        </TabsContent>

        {/* Shared empty state */}
        <TabsContent
          value="shared"
          className="flex flex-1 flex-col items-center justify-center p-6 text-center"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-border bg-subtle text-copy-muted">
            <Users className="h-8 w-8 text-copy-muted" />
          </div>
          <p className="text-sm font-medium text-copy-primary">
            No shared projects
          </p>
          <p className="mt-1 max-w-[210px] text-xs text-copy-muted">
            Projects shared with you by collaborators will appear here.
          </p>
        </TabsContent>
      </Tabs>

      {/* Footer with full-width New Project button */}
      <div
        data-slot="project-sidebar-footer"
        className="mt-auto border-t border-surface-border bg-surface/50 p-4"
      >
        <Button
          onClick={onNewProject}
          className="w-full justify-center gap-2"
        >
          <Plus className="h-4 w-4" />
          <span>New Project</span>
        </Button>
      </div>
    </aside>
  )
}

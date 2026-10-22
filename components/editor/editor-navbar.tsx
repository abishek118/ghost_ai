"use client"

import * as React from "react"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface EditorNavbarProps {
  isSidebarOpen: boolean
  onToggleSidebar: () => void
  centerContent?: React.ReactNode
  rightContent?: React.ReactNode
  className?: string
}

export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
  centerContent,
  rightContent,
  className,
}: EditorNavbarProps) {
  return (
    <header
      data-slot="editor-navbar"
      className={cn(
        "flex h-14 w-full shrink-0 items-center justify-between border-b border-surface-border bg-surface px-4 select-none",
        className
      )}
    >
      {/* Left section */}
      <div
        data-slot="editor-navbar-left"
        className="flex items-center gap-3"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={isSidebarOpen}
          className="text-copy-secondary hover:bg-subtle hover:text-copy-primary"
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Center section */}
      <div
        data-slot="editor-navbar-center"
        className="flex items-center justify-center text-sm font-medium text-copy-primary"
      >
        {centerContent}
      </div>

      {/* Right section (stays empty for now) */}
      <div
        data-slot="editor-navbar-right"
        className="flex items-center justify-end gap-2"
      >
        {rightContent}
      </div>
    </header>
  )
}

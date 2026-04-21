import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Minimal sidebar primitives.
 * The full shadcn-style sidebar implementation was partially generated and broke parsing.
 * This keeps exports stable for any future usage while preserving build/lint correctness.
 */

const SidebarContext = React.createContext(null);

export function SidebarProvider({ defaultOpen = true, children }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const value = React.useMemo(
    () => ({
      open,
      setOpen,
      toggle: () => setOpen((v) => !v),
    }),
    [open]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
  const ctx = React.useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within <SidebarProvider />");
  return ctx;
}

export function Sidebar({ className, children }) {
  const { open } = useSidebar();
  return (
    <aside
      data-state={open ? "expanded" : "collapsed"}
      className={cn("border-r border-white/10 bg-card text-foreground", className)}
    >
      {children}
    </aside>
  );
}

export function SidebarTrigger({ className, children, ...props }) {
  const { toggle } = useSidebar();
  return (
    <button
      type="button"
      onClick={toggle}
      className={cn("inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase", className)}
      {...props}
    >
      {children ?? "Menu"}
    </button>
  );
}


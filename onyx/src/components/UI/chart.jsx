import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

const ChartContext = React.createContext(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("useChart must be used within <ChartContainer />");
  return ctx;
}

/**
 * Minimal chart container for Recharts.
 * This keeps the UI kit functional without imposing a specific chart design system.
 */
const ChartContainer = React.forwardRef(({ className, config = {}, children, ...props }, ref) => {
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        className={cn(
          "flex aspect-video w-full justify-center text-xs [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef(
  ({ active, payload, label, className, formatter, labelFormatter }, ref) => {
    const { config } = useChart();

    if (!active || !payload?.length) return null;

    const renderedLabel = labelFormatter ? labelFormatter(label, payload) : label;

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[10rem] gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {renderedLabel ? <div className="font-medium">{renderedLabel}</div> : null}
        <div className="grid gap-1">
          {payload.map((item, idx) => {
            const key = String(item.dataKey ?? item.name ?? idx);
            const meta = config?.[key];
            const name = meta?.label ?? item.name ?? key;
            const value = item.value;

            return (
              <div key={key} className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">{name}</span>
                <span className="text-secondary-foreground">
                  {formatter ? formatter(value, name, item, idx, item.payload) : String(value ?? "")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

export { ChartContainer, ChartTooltip, ChartTooltipContent };


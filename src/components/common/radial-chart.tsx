"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

interface RadialChartProps {
  value: number;
  maxValue?: number;
  label?: string;
  color?: string;
  footerText?: string;
  subText?: string;
  className?: string;
}

export function ReusableRadialChart({
  value,
  maxValue = 100,
  label = "Value",
  color = "var(--chart-2)",
  footerText,
  subText,
  className = "",
}: RadialChartProps) {
  const percentage = Math.min((value / maxValue) * 100, 100);
  const endAngle = (percentage / 100) * 360;

  const chartData = [
    {
      category: "data",
      value: value,
      fill: color,
    },
  ];

  const chartConfig = {
    value: {
      label: label,
    },
    data: {
      label: label,
      color: color,
    },
  } satisfies ChartConfig;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[180px] w-full max-w-[180px]"
      >
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={endAngle}
          innerRadius={60}
          outerRadius={90}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[66, 54]}
          />
          <RadialBar dataKey="value" background cornerRadius={10} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold"
                      >
                        {typeof value === "number" && value % 1 === 0
                          ? value.toLocaleString()
                          : value.toLocaleString(undefined, {
                              maximumFractionDigits: 1,
                            })}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        {label}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>

      {(footerText || subText) && (
        <div className="space-y-1 text-center">
          {footerText && (
            <p className="text-foreground font-medium">{footerText}</p>
          )}
          {subText && (
            <p className="text-muted-foreground text-sm">{subText}</p>
          )}
        </div>
      )}
    </div>
  );
}

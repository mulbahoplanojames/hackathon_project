"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MonthlyData = {
  month: string;
  performance: number;
  fill: string;
};

const colors = {
  primary: "hsl(221, 83%, 53%)",
  secondary: "hsl(76, 61%, 38%)",
  accent: "hsl(30, 100%, 50%)",
  highlight: "hsl(354, 95%, 48%)",
  muted: "hsl(299, 77%, 72%)",
};

const chartData: MonthlyData[] = [
  { month: "Monday", performance: 275, fill: colors.primary },
  { month: "Tuesday", performance: 200, fill: colors.secondary },
  { month: "Wednewday", performance: 187, fill: colors.accent },
  { month: "Thursday", performance: 173, fill: colors.highlight },
  { month: "Friday", performance: 90, fill: colors.muted },
];

const chartConfig = {
  performance: {
    label: "Daily Performance",
    color: colors.primary,
  },
} satisfies ChartConfig;

export function ChartBar1({ text }: { text: string }) {
  return (
    <Card className="border-0 dark:border dark:border-primary_Clr">
      <CardHeader className="flex flex-row items-center justify-between ">
        <CardTitle>{text}</CardTitle>
        <CardDescription>
          Monday - Friday {new Date().getFullYear()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ left: 8, right: 8, top: 8, bottom: 8 }}
          >
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <XAxis
              dataKey="performance"
              type="number"
              axisLine={false}
              tickLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="performance"
              fill={chartConfig.performance.color}
              radius={[0, 4, 4, 0]}
              fillOpacity={0.9}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

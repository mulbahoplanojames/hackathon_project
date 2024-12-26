"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
} from "../../ui/card";

const chartData = [
  { month: "Monday", quizzes: 4, assignments: 2 },
  { month: "Tuesday", quizzes: 2, assignments: 8 },
  { month: "Wednesday", quizzes: 2, assignments: 5 },
  { month: "Thursday", quizzes: 3, assignments: 7 },
  { month: "Friday", quizzes: 10, assignments: 1 },
  { month: "Saturday", quizzes: 4, assignments: 4 },
];

const chartConfig = {
  quizzes: {
    label: "Assignments",
    color: "#064E3B",
  },
  assignments: {
    label: "Quiz",
    color: "hsl(76, 61%, 38%)",
  },
} satisfies ChartConfig;

export function ChartBar2({ text }: { text: string }) {
  return (
    <Card className="w-full h-full border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{text}</CardTitle>
        <CardDescription>
          Monday - Friday {new Date().getFullYear()}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full h-full">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="quizzes" fill="var(--color-quizzes)" radius={4} />
            <Bar
              dataKey="assignments"
              fill="var(--color-assignments)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

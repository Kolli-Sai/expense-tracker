"use client";
import { TypographyH2, TypographyH3 } from "@/components/ui/typography";
import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Chart from "chart.js/auto";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import NextLink from "next/link";
import { MoveRight, Plus } from "lucide-react";
type Props = {};

const DashboardPage = (props: Props) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let myChart: Chart | null = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Clear the canvas
      ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height);

      const data = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };

      const config = {
        type: "doughnut",
        data: data,
      };

      // Create a new chart instance
      myChart = new Chart(chartRef.current, config);
    }

    // Clean up the chart when the component is unmounted
    return () => {
      if (myChart) {
        // Optionally, you can clear the canvas here as well
        // const ctx = chartRef.current.getContext("2d");
        // ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height);

        myChart.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className=" my-6 flex justify-end items-center gap-4">
        <Button asChild>
          <NextLink href={"/new"}>
            Add New
            <Plus className="ml-2" size={20} />
          </NextLink>
        </Button>
        <Button asChild>
          <NextLink href={"/view-all"}>
            View All
            <MoveRight className="ml-2" size={20} />
          </NextLink>
        </Button>
      </div>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <div>
          <div>
            <AspectRatio ratio={16 / 9}>
              <canvas ref={chartRef} />
            </AspectRatio>
          </div>
        </div>
        <div>
          <div className=" grid grid-cols-1 gap-4  md:grid-cols-2 md:gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Income</CardTitle>
                <CardDescription>total income upto now</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Expenses</CardTitle>
                <CardDescription>total expense upto now</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Savings</CardTitle>
                <CardDescription>total savings upto now</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Loss</CardTitle>
                <CardDescription>total loss upto now</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  data: any;
};

const DougnutChart = (props: Props) => {
  return <Doughnut data={props.data} />;
};

export default DougnutChart;

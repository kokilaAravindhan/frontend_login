
import React from "react";


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js";

  import { Line } from "react-chartjs-2";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
 
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false
      },
      title: {
        backgroundColor:"rgb(255, 128, 0)",
        display: true,
        text: "Gold Chart"
      }
      
    }
  };
  
  const labels = ["January", "February", "March", "April", "May", "June", "July"];
  
  export const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [25000, 29000, 35000, 39000, 41000, 45000, 50000],
        borderColor: "rgb(255, 0, 0)",
        backgroundColor: "#FFFFFFF",
        tension: 0.3
      }
    ]
  };
  
  export default function LineChart() {
    return <Line options={options} data={data} />;
  }

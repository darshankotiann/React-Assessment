import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function AreaChart() {
  const series = [
    {
      name: "Revenue",
      data: [5, 10, 15, 25, 20, 15, 18], 
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: "100%",
      toolbar: {
        show: false, 
      },
    },
    stroke: {
      curve: "smooth", 
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#ffffff"], 
        stops: [0, 100],
      },
    },
    markers: {
      size: 5, 
      colors: ["#0056ff"], 
      strokeColors: "#fff", 
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    dataLabels: {
      enabled: false, 
    },
    xaxis: {
      categories: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"], 
      labels: {
        style: {
          fontSize: "12px",
          colors: "#333",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value} L`,
        style: {
          fontSize: "12px",
          colors: "#333",
        },
      },
    },
    grid: {
      show: false, 
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (value) => `${value} L`, 
      },
    },
  };

  return (
    <div className="rounded-4 bg-white mb-4">
        <div className="fs-5-sm fw-bold txt-dark-blue ps-4 py-4">Track Networth</div>
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
  );
}

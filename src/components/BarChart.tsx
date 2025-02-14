import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { memo } from "react";
// import HighchartsMore from "highcharts/highcharts-more";
// import HighchartsExporting from "highcharts/modules/exporting";

// HighchartsMore(Highcharts);
// HighchartsExporting(Highcharts);

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Monthly Average Rainfall",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    title: {
      text: "Rainfall (mm)",
    },
  },
  series: [
    {
      name: "Ahmedabad",
      data: [
        49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        95.6, 54.4,
      ],
    },
    {
      name: "Gandhinagar",
      data: [
        83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6,
        92.3,
      ],
    },
  ],
};

const BarChart = memo(() => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
});

export default BarChart;

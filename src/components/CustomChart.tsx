import React, { useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import exporting from "highcharts/modules/exporting"; // Import the exporting module

// if (typeof Highcharts === "object") {
//   exporting(Highcharts);
// }

export interface CustomChartProps {
  chartType: Highcharts.ChartOptions["type"];
  title: string;
  subtitle?: string;
  xAxis?: Highcharts.XAxisOptions;
  series: Highcharts.SeriesOptionsType[];
  yAxis?: Highcharts.YAxisOptions[];
  legend?: Highcharts.LegendOptions;
  plotOptions?: Highcharts.PlotOptions;
  exporting?: Highcharts.ExportingOptions;
  responsive?: Highcharts.ResponsiveOptions;
}

const CustomChart: React.FC<CustomChartProps> = ({
  chartType,
  title,
  subtitle,
  xAxis,
  series,
  yAxis,
  legend,
  exporting,
  plotOptions,
  responsive,
}) => {
  const options = useMemo(
    () => ({
      chart: {
        type: chartType as Highcharts.ChartOptions["type"],
      },
      title: { text: title },
      subtitle: { text: subtitle },
      xAxis,
      yAxis,
      series,
      plotOptions,
      legend,
      exporting,
      responsive,
    }),
    [
      chartType,
      title,
      subtitle,
      xAxis,
      yAxis,
      series,
      plotOptions,
      legend,
      exporting,
      responsive,
    ]
  );

  console.log({ options });
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CustomChart;

// import dayjs from "dayjs";
import CustomChart from "./CustomChart";

const MyChart = () => {
  const data = {
    // categories: [
    //   dayjs("2023-02-05").format("MM-DD"),
    //   dayjs("2023-02-09").format("MM-DD"),
    //   dayjs("2023-02-12").format("MM-DD"),
    // ],
    series: [
      {
        name: "Installation",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
      {
        name: "Manufacturing",
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      },
      {
        name: "Sales & Distribution",
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      },
      {
        name: "Project Development",
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
      },
      {
        name: "Other",
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
      },
    ],
  };

  const yAxisConfig: Highcharts.YAxisOptions[] = [
    {
      title: {
        text: "Number of Employees",
      },
      // labels: {
      //   format: "${value}",
      // },
    },
  ];

  return (
    <>
      <CustomChart
        chartType="spline"
        title="Pacing, Performance, Quality, Profitability, and Total Overall Scores"
        // subtitle='Source: <a href="https://www.worldbank.org/en/home">The World Bank</a>'
        // xAxis={{ categories: data.categories, type: "datetime" }}
        series={data.series as Highcharts.SeriesOptionsType[]}
        yAxis={yAxisConfig}
        legend={{
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
        }}
        plotOptions={{
          series: {
            pointStart: 2010,
            
          },
        }}
        exporting={{
          showTable: true,
        }}
        responsive={{
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                yAxis: yAxisConfig.map((axis) => ({
                  ...axis,
                  tickAmount: 2,
                  title: {
                    ...axis.title,
                    x: axis.opposite ? -20 : 15,
                    reserveSpace: false,
                  },
                })),
              },
            },
          ],
        }}
      />
    </>
  );
};

export default MyChart;

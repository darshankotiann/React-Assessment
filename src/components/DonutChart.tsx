import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
export default function DonutChart() {
    const series = [44, 55, 41, 17]

    const options: ApexOptions = {
        chart: {
            type: "donut",
            toolbar: {
                show: false,
            },
            dropShadow: {
                enabled: false,
            },
            height: "100%",
            offsetX: 0,
            offsetY: 0,
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: "Assets",
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#000",
                            fontFamily: 'Poppins',
                            // formatter: function () {
                            //     return '';
                            // }
                        },
                    },
                },
            },
        },
        legend: {
            show: true,
            position: "bottom",
            horizontalAlign: "center",
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            markers: {
                size: 6,
                shape: "circle",
            },
            formatter: undefined,
        },
        colors: ["#14B8A6", "#3B82F6", "#F59E0B", "#FACC15"],
        labels: ["Banks", "Investments", "Insurance", "Personal"],
        series: [15, 50, 25, 10],
        grid: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },
        responsive: [
            {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 280,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],

    };
    return <>
        <div className="d-flex align-items-center justify-content-between border-bottom bdr-colo-68 pb-4 w-100">
            <div className="d-flex justify-content-center text-center flex-column align-items-center">
                <div className="text-black fs-7">
                    Assets
                </div>
                <div className="txt-failure fs-6-sm fw-bold">
                    ₹1.5L
                </div>
            </div>
            <div className="d-flex justify-content-center text-center flex-column align-items-center">
                <div className="text-black fs-7">
                    Liabilities
                </div>
                <div className="txt-success fs-6-sm fw-bold">
                    ₹1.5L
                </div>
            </div>
            <div className="d-flex justify-content-center text-center flex-column align-items-center">
                <div className="text-black fs-7">
                    Total
                </div>
                <div className="txt-failure fs-6-sm fw-bold">
                    ₹1.5L
                </div>
            </div>
        </div>
        <ReactApexChart options={options} series={series} type="donut" height={320} width={'100%'} />
    </>

}
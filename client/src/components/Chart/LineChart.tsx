//React
import React from 'react'
//Chart
import { ChartLegendOptions, ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'
//Style
import theme from '../../theme'
import { StyledLineChart } from './styles'

type Props = {
    xAxisData: number[] | string[]
    yAxisData: number[]
    title?: string
    xLabel?: string
    yLabel?: string
}

const LineChart = ({ xAxisData, yAxisData, title, xLabel, yLabel }: Props) => {
    const legendOptions: ChartLegendOptions = {
        display: false,
    }

    const options: ChartOptions = {
        responsive: true,
        title: {
            display: !!title,
            text: title,
        },
        scales: {
            gridLines: { display: false },
            yAxes: [
                {
                    scaleLabel: { display: !!yLabel, labelString: yLabel },
                    gridLines: { display: false },
                },
            ],
            xAxes: [
                {
                    scaleLabel: { display: !!xLabel, labelString: xLabel },
                    ticks: { display: true },
                    gridLines: { display: false },
                },
            ],
        },
    }

    return (
        <StyledLineChart>
            <Line
                data={{
                    labels: xAxisData,
                    datasets: [
                        {
                            backgroundColor: theme.colors.blue100,
                            borderColor: theme.colors.primary,
                            data: yAxisData,
                        },
                    ],
                }}
                options={options}
                legend={legendOptions}
            />
        </StyledLineChart>
    )
}

export default LineChart

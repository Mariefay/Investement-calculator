//React
import React from 'react'
//Components
import Message from '../Summary/Summary'
import LineChart from '../Chart/LineChart'
import Form from '../Form/Form'
//Hooks
import { useForm } from '../Form/useForm'
//Styles
import { StyledContainer } from './styles'

const Container = () => {
    const {
        initialDeposit,
        monthlyDeposit,
        interestRate,
        timeInYears,
        handleChange,
        graphDataX,
        graphDataY,
        summaryValues,
    } = useForm()

    return (
        <StyledContainer>
            <div className="form-and-graph">
                <Form
                    initialDeposit={initialDeposit}
                    monthlyDeposit={monthlyDeposit}
                    interestRate={interestRate}
                    timeInYears={timeInYears}
                    handleChange={handleChange}
                />

                <LineChart
                    title="Savings Over time"
                    xAxisData={graphDataX}
                    yAxisData={graphDataY}
                    xLabel="Years"
                    yLabel="Amount"
                />
            </div>
            {summaryValues && <Message summaryValues={summaryValues} />}
        </StyledContainer>
    )
}

export default Container

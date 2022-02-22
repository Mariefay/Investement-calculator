//React
import React, { FC } from 'react'
//Styles
import { StyledForm } from './styles'

export interface IFormProps {
    monthlyDeposit: string
    initialDeposit: string
    interestRate: string
    timeInYears: string
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Form: FC<IFormProps> = ({
    initialDeposit,
    monthlyDeposit,
    interestRate,
    timeInYears,
    handleChange,
}) => {
    return (
        <StyledForm>
            <label id="initialDeposit">Initial Deposit</label>
            <input
                type="number"
                aria-labelledby="initialDeposit"
                min="10"
                max="100"
                name="initialDeposit"
                placeholder="1000"
                value={initialDeposit}
                onChange={handleChange}
            ></input>

            <label id="monthlyDeposit">Monthly Deposit</label>
            <input
                type="number"
                aria-labelledby="monthlyDeposit"
                name="monthlyDeposit"
                placeholder="200"
                value={monthlyDeposit}
                onChange={handleChange}
            ></input>

            <label id="interestRate">Interest Rate (%)</label>
            <input
                type="number"
                name="interestRate"
                aria-labelledby="interestRate"
                placeholder="2"
                value={interestRate}
                onChange={handleChange}
            ></input>

            <label id="timeInYears">Number Of Years</label>
            <input
                type="number"
                aria-labelledby="timeInYears"
                name="timeInYears"
                step="1"
                placeholder="20"
                value={timeInYears}
                onChange={handleChange}
            ></input>
        </StyledForm>
    )
}

export default Form

//React
import React, { FC } from 'react'
//Styles
import { StyledSummary } from './styles'

export interface ISummaryProps {
    summaryValues: {
        totalCompoundValue: number
        interestsGainedOnMonthlyDeposits: number
        interestsGainedOnInitialDeposit: number
        totalInterestGained: number
        totalAmountInvested: number
    }
}
const Summary: FC<ISummaryProps> = ({ summaryValues }) => {
    const {
        totalAmountInvested,
        totalCompoundValue,
        totalInterestGained,
        interestsGainedOnInitialDeposit,
        interestsGainedOnMonthlyDeposits,
    } = summaryValues

    return (
        <StyledSummary>
            <div>
                <h2>Summary</h2>
                <ul>
                    <li>
                        Total Amount Invested : <b>{totalAmountInvested}£</b>
                    </li>
                    <li>
                        Total Compound Value : <b>{totalCompoundValue}£</b>
                    </li>
                    <li>
                        Total Interest Earned : <b>{totalInterestGained}£</b>
                    </li>
                    <li>
                        Interests earned on initial deposit :{' '}
                        <b>{interestsGainedOnInitialDeposit}£</b>
                    </li>
                    <li>
                        Interests earned on monthly deposit :{' '}
                        <b>{interestsGainedOnMonthlyDeposits}£</b>
                    </li>
                </ul>
            </div>
        </StyledSummary>
    )
}

export default Summary

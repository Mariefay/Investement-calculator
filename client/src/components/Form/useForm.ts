//React
import React, { useEffect, useState } from 'react'
//Herlpers
import axios from 'axios'

interface ISummaryValues {
    totalCompoundValue: number
    interestsGainedOnMonthlyDeposits: number
    interestsGainedOnInitialDeposit: number
    totalInterestGained: number
    totalAmountInvested: number
}

export const useForm = () => {
    const [initialDeposit, setInitialDeposit] = useState<string>('')
    const [monthlyDeposit, setMonthlyDeposit] = useState<string>('')
    const [interestRate, setInterestRate] = useState<string>('')
    const [timeInYears, setTimeInYears] = useState<string>('')
    const [graphDataX, setGraphDataX] = useState<number[]>([])
    const [graphDataY, setGraphDataY] = useState<number[]>([])
    const [summaryValues, setSummaryValues] = useState<ISummaryValues>()

    useEffect(() => {
        const fetchData = async () => {
            if (timeInYears && interestRate && monthlyDeposit && initialDeposit) {
                const response = await axios.get(
                    `http://localhost:3001/api/savings?initialDeposit=${initialDeposit}&monthlyDeposit=${monthlyDeposit}&interestRate=${
                        Number(interestRate) / 100
                    }&timeInMonths=${Number(timeInYears) * 12}`
                )

                const arrayOfYears = Array.from(Array(Number(timeInYears) + 1).keys())

                const {
                    dataArray,
                    totalCompoundValue,
                    interestsGainedOnMonthlyDeposits,
                    interestsGainedOnInitialDeposit,
                    totalInterestGained,
                    totalAmountInvested,
                } = response.data

                setGraphDataY(dataArray)
                setGraphDataX(arrayOfYears)

                setSummaryValues({
                    totalAmountInvested,
                    totalCompoundValue,
                    interestsGainedOnInitialDeposit,
                    interestsGainedOnMonthlyDeposits,
                    totalInterestGained,
                })
            }
        }

        fetchData()
    }, [initialDeposit, monthlyDeposit, interestRate, timeInYears])

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        console.log('hit')
        if (e.currentTarget.name === 'initialDeposit') setInitialDeposit(value)
        else if (e.currentTarget.name === 'monthlyDeposit') setMonthlyDeposit(value)
        else if (e.currentTarget.name === 'interestRate') setInterestRate(value)
        else if (e.currentTarget.name === 'timeInYears') setTimeInYears(value)
    }

    return {
        initialDeposit,
        monthlyDeposit,
        interestRate,
        timeInYears,
        handleChange,
        graphDataX,
        graphDataY,
        summaryValues,
    }
}

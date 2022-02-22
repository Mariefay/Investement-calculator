import React from 'react'
import { render, screen } from '@testing-library/react'
import Form from './Form'

test('renders Form', () => {
    render(
        <Form
            initialDeposit={''}
            monthlyDeposit={''}
            interestRate={''}
            timeInYears={''}
            handleChange={() => {}}
        />
    )
    const inputInitialDeposit = screen.getByLabelText('Initial Deposit')
    expect(inputInitialDeposit).toBeInTheDocument()

    const inputMonthlyDeposit = screen.getByLabelText('Monthly Deposit')
    expect(inputMonthlyDeposit).toBeInTheDocument()

    const inputInterestRate = screen.getByLabelText('Interest Rate (%)')
    expect(inputInterestRate).toBeInTheDocument()

    const inputYears = screen.getByLabelText('Number Of Years')
    expect(inputYears).toBeInTheDocument()
})

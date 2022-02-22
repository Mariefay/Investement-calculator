import React from 'react'
import { render, screen } from '@testing-library/react'
import NavHeader from './NavHeader'

test('renders NavHeader', () => {
    render(<NavHeader />)
    const logo = screen.getByAltText('Finimize')
    expect(logo).toBeInTheDocument()
})

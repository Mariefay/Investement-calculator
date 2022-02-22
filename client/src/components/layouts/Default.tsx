//React
import React from 'react'
//Components
import { Box } from '@chakra-ui/react'
import NavHeader from '../Nav/NavHeader'

type LayoutProps = {
    children: React.ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => {
    return (
        <Box display="flex" minHeight="100vh" height="100%" flexDirection="column">
            <NavHeader />
            <>{children}</>
        </Box>
    )
}

export default DefaultLayout

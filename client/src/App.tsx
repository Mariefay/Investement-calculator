//React
import React from 'react'
//Components
import DefaultLayout from './components/Layouts/Default'
import Container from './components/Container/Container'
//Helpers
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
//Styles
import './App.css'
import theme from './theme'

const defaultTheme = extendTheme(theme)

function App() {
    return (
        <ChakraProvider theme={defaultTheme}>
            <DefaultLayout>
                <Container />
            </DefaultLayout>
        </ChakraProvider>
    )
}

export default App

//React
import React from 'react'
//Components
import { Box, Image } from '@chakra-ui/react'
//Assets
import images from '../../images'

const NavHeader = () => (
    <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        px={6}
        py={4}
        bg="blue100"
    >
        <Image src={images.fullBrandLogo} alt="Finimize" width="160px" />
    </Box>
)

export default NavHeader

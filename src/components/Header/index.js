import React from 'react'
import { Flex } from "@chakra-ui/react"
import Logo from '../Logo'

const Header = () => (
    <Flex
        h="20"
        w="100%"
        maxW={1480}
        marginX="auto"
        alignItems="center"
        justifyContent="center"
    >
        <Logo/>
    </Flex>
)

export default Header
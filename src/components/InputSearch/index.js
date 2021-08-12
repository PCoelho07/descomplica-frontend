import React, { useState } from 'react'
import { Flex } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'

const InputSearch = ({ onChange }) => {
    const [term, setTerm] = useState('')

    const onChangeInput = (event) => {
        const term = event.target.value
        console.log(term)
        setTerm(term)
        onChange(term)
    }

    return (
        <Flex
            alignItems="center"
            color="gray.500"
            border="1px"
            borderColor="gray.200"
            borderRadius="6"
            p="2"
            mb="4"
        >
            <AiOutlineSearch size="25" />
            <Input
                ml="2"
                focusBorderColor="#00E88F"
                placeholder="Buscar por nome, cpf ou e-mail"
                w="lg"
                variant="unstyled"
                value={term}
                onChange={onChangeInput}
            />
        </Flex>
    )
}

export default InputSearch
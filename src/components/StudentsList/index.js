import React from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Flex
} from "@chakra-ui/react"
import InputSearch from '../InputSearch'

const StudentsList = ({ data }) => (
    <Flex
        direction="column"
        alignItems="center"
        bgColor="white"
        m="4"
        borderRadius="6"
        p="6"
        w="container.lg"
    >
        <InputSearch
            onChange={(term) => console.log(term)}
        />

        <Table variant="striped" colorScheme="gray" fontWeight="bold">
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>CPF</Th>
                    <Th>E-mail</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Pedro Coelho</Td>
                    <Td>104.082.914-78</Td>
                    <Td>pdrbt@outlook.com</Td>
                </Tr>
            </Tbody>
        </Table>
    </Flex>
)

export default StudentsList
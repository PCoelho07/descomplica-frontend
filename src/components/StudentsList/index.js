import React, { useEffect, useState } from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Flex,
    Spinner
} from "@chakra-ui/react"

import InputSearch from '../InputSearch'

import { loadStudent } from '../../services/graphql/queries'
import { useLazyQuery } from '@apollo/client'

const StudentsList = () => {
    const [timer, setTimer] = useState(null)
    const [loading, setLoading] = useState(false)
    const [executeSearch, { data }] = useLazyQuery(loadStudent)

    useEffect(() => {
        executeSearch({ variables: { term: '' }})
    }, [])

    const onTypeSearch = (term) => {
        setLoading(true)
        clearTimeout(timer)
        setTimer(setTimeout(() => {
            executeSearch({ variables: { term }})
            setLoading(false)
        }, 500))
    }

    return (
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
                onChange={(term) => onTypeSearch(term)}
            />

            {
                loading
                    ? (
                        <Spinner color="gray.500" size="xl" />
                    )
                    : (
                        <Table variant="striped" colorScheme="gray" fontWeight="bold">
                            <Thead>
                                <Tr>
                                    <Th>Nome</Th>
                                    <Th>CPF</Th>
                                    <Th>E-mail</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    data && data.students.map(item => (
                                        <Tr>
                                            <Td>{item.name}</Td>
                                            <Td>{item.cpf}</Td>
                                            <Td>{item.email}</Td>
                                        </Tr>
                                    ))
                                }
                            </Tbody>
                        </Table>
                    )
            }
        </Flex>
    )
}

export default StudentsList
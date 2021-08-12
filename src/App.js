import React, { useEffect, useState } from 'react'

import { Flex } from '@chakra-ui/react';

import Header from './components/Header';
import StudentsList from './components/StudentsList';

import { loadAll, findBySearchTerm } from './services/student';

const App = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const loadAll = async () => {

    }

    loadAll()
  }, [])

  return (
    <Flex
      direction="column"
      alignItems="center"
    >
      <Header/>
      <StudentsList data={students}/>
    </Flex>
  );
}

export default App;

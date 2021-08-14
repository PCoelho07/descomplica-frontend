import React, { useEffect, useState } from 'react'

import { Flex } from '@chakra-ui/react';

import Header from './components/Header';
import StudentsList from './components/StudentsList';

const App = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
    >
      <Header/>
      <StudentsList/>
    </Flex>
  );
}

export default App;

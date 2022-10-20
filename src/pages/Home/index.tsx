import React from 'react';
import { CiDark, CiBrightnessDown } from 'react-icons/ci';

import { Header } from './styled';

const Home = () => {
  const darkMode = true;

  return (
    <Header>
      <h1>JStack</h1>
      <span>{darkMode ? <CiBrightnessDown /> : <CiDark />}</span>
    </Header>
  );
};

export default Home;

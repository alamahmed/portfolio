import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import Navbar from './components/Navbar/index';
import Home from './pages/Home/index';
import Projects from './pages/Projects/index';
import About from './pages/About/index';
import './App.css';

function App() {
  const preferredColorScheme = useColorScheme();

  return (
    <>
      <ColorSchemeScript defaultColorScheme={preferredColorScheme} />
      <MantineProvider defaultColorScheme={preferredColorScheme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;

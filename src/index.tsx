import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import App from './App';
import { createTheme, MantineProvider } from '@mantine/core';
import './index.css';

const theme = createTheme({
  colors: {
    primaryColors: [
      "#fbf3f5",
      "#e7e7e7",
      "#cdcdcd",
      "#b2b2b2",
      "#9a9a9a",
      "#8b8b8b",
      "#848484",
      "#717171",
      "#656565",
      "#5c5557"
    ],
  },
  primaryColor: "primaryColors",
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
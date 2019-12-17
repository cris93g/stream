import React,{useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './Components';
import Nav from "./Components/Nav/Nav"
import routes from "./routes"
import {HashRouter} from "react-router-dom"
function App() {
  const [open, setOpen] = useState(false);
  return (
    <HashRouter>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Nav/>
        {routes}
      </>
    </ThemeProvider>
    </HashRouter>
  );
}
export default App;
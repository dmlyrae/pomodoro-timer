import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import { baseTheme } from "./styles/theme";
import AppRouter from "./components/AppRouter";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        <Layout>
          <AppRouter />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

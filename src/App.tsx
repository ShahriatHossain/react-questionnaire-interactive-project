import React, { Fragment } from "react";
import "./Share.css";
import "./App.css";
import QuestionnaireContextProvider from "./store/questionnaire-context";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <QuestionnaireContextProvider>
      <Main></Main>
      <Footer></Footer>
    </QuestionnaireContextProvider>
  );
}

export default App;

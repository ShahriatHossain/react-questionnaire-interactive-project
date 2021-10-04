import "./Share.css";
import "./App.css";
import QuestionnaireContextProvider from "./store/questionnaire-context";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <QuestionnaireContextProvider>
      <Main></Main>
      <Footer></Footer>
    </QuestionnaireContextProvider>
  );
}

export default App;

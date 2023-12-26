import {
  Header,
  MainSection,
  Loader,
  Error,
  StartScreen,
  ProgressBar,
  Question,
  Footer,
  Timer,
  NextButton,
  FinishScreen,
} from "./";
import { useQuiz } from "../context/quizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className='app'>
      <Header />

      <MainSection className='main'>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <ProgressBar />
            <Question />

            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === "finished" && <FinishScreen />}
      </MainSection>
    </div>
  );
}

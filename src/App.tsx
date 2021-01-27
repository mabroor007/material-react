import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

const App: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

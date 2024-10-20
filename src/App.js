import "./App.css";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default App;

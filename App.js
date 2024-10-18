import "./App.css";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <main>
        <Outlet /> {/* Visar de komponenter som matchar den aktuella rutt */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

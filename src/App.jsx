import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Rectangle from "./components/Header/Rectangle";
import Home from "./pages/homepage/Home";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;

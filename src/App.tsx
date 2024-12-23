import Footer from "./components/Footer";
import Header from "./components/Header";
import DegitalClock from "./app/DegitalClock";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-grow justify-center items-center">
        <DegitalClock />
      </main>
      <Footer />
    </div>
  );
}

export default App;

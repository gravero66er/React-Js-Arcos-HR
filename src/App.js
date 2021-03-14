import "./App.scss";
import About from "./components/about/about";
import Banner from "./components/banner/banner";
import Culture from "./components/culture/culture";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Mentors from "./components/mentors/mentors";
import Quote from "./components/quote/quote";
import Vacancy from "./components/vacancy/vacancy";

function App() {
  return (
    <div>
      <Header />
      <Quote />
      <Banner />
      <About />
      <Culture />
      <Mentors />
      <Vacancy />
      <Footer />
    </div>
  );
}

export default App;

import './styles/App.css'
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import {MainSection} from "./components/MainSection.jsx";

export const App = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <Footer />
    </div>
  )
}

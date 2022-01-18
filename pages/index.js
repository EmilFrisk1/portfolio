import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";

export default function Home() {
  return (
    <div>
      <Header />
      <Projects />
      <Technologies />
      <About />
      <Footer />
    </div>
  )
}

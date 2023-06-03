import "./App.css";
import {
  Hero,
  Layout,
  Testimonials,
  Mission,
  Projects,
  Work,
} from "./components";

function App() {
  return (
    <Layout>
      <Hero />
      <Testimonials />
      <Projects />
      <Work />
    </Layout>
  );
}

export default App;

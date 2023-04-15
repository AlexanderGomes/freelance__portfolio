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
      <Mission />
      <Projects />
      <Work />
    </Layout>
  );
}

export default App;

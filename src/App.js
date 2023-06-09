import "./App.css";
import {
  Hero,
  Layout,
  Testimonials,
  Projects,
  Work,
} from "./components";

function App() {
  return (
    <Layout>
      <Hero />
      <Testimonials />
      <Work />
      <Projects />
    </Layout>
  );
}

export default App;

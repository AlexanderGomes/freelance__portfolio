import "./App.css";
import { Hero, Layout, Testimonials, Mission, Projects } from "./components";

function App() {
  return (
    <div>
      <Layout>
        <Hero />
        <Testimonials />
        <Mission />
        <Projects />
      </Layout>
    </div>
  );
}

export default App;

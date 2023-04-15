import "./App.css";
import { Hero, Layout, Testimonials } from "./components";

function App() {
  return (
    <div>
      <Layout>
        <Hero />
        <Testimonials />
      </Layout>
    </div>
  );
}

export default App;

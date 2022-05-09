import Header from "./components/header/header";
import './index.css'
import Feature from "./components/feature/feature";
import Services from "./components/services/Services";
import WorkCard from "./components/workCard/WorkCard";

function App() {
  return (
    <div className="App">
        <Header/>
        <Feature/>
        <Services/>
        <WorkCard/>
    </div>
  );
}

export default App;

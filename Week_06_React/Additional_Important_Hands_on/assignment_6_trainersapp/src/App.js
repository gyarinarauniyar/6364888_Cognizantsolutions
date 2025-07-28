import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TrainersData } from "./TrainersMock";
import TrainersList from "./TrainersList";
import TrainerDetail from "./TrainerDetail";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Add headline here */}
        <h1>My Academy Trainers App</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/trainers">Trainers</Link>
        </nav>
        <hr />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={TrainersData} />} />
          <Route path="/trainer/:id" element={<TrainerDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

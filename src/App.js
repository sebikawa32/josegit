import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import TrainingPlans from "./Training/TrainingPlans";

import Community from "./Community/Community";
import Board from './Community/Board'; 
import Crew from './Community/Crew'; 

import My from "./My";
import Notification from "./Notification";
import MarathonSearch from "./Marathon/MarathonSearch";
import MarathonSchedule from "./Marathon/MarathonSchedule";
import Home from "./Home/Home";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/MarathonSearch" element={<MarathonSearch />} />
        <Route path="/MarathonSchedule" element={<MarathonSchedule />} />

        <Route path="/Community" element={<Community />} />
        <Route path="/Community/Board" element={<Board />} />
        <Route path="/Community/Crew" element={<Crew />} />


        <Route path="/TrainingPlans" element={<TrainingPlans />} />


        <Route path="/My" element={<My />} />

        <Route path="/Notification" element={<Notification />} />

      </Routes>
    </Router>
  );
}

export default App;
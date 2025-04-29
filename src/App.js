import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import TrainingPlans from "./Training/TrainingPlans";

import Community from "./Community/Community";
import Board from './Community/Board'; 
import NotionBoard from './Community/NotionBoard';
import BoardPage from './Community/BoardPage'; 
import Crew from './Community/Crew'; 

import My from "./My/My";
import Notification from "./Notification/Notification";
import MarathonSearch from "./Marathon/MarathonSearch";
import MarathonSchedule from "./Marathon/MarathonSchedule";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marathonsearch" element={<MarathonSearch />} />
          <Route path="/marathonschedule" element={<MarathonSchedule />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/board" element={<Board />} />
          <Route path="/community/boardpage/:id" element={<BoardPage />} /> {/* 동적 경로 */}
          <Route path="/community/crew" element={<Crew />} />
          <Route path="/community/NotionBoard" element={<NotionBoard />} />


          <Route path="/trainingplans" element={<TrainingPlans />} />
          <Route path="my/my" element={<My />} />
          <Route path="notification/notification" element={<Notification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
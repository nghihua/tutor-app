import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Volunteers from "./Volunteers";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <main className="content">
          <Routes>
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/volunteer/:id" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

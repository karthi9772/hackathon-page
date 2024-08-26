import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DomainCards from "./components/DomainCards";
import DomainDetail from "./components/DomainDetail";
import domainsData from "./data/domainsData.json";
import HackathonSection from "./components/HackathonHomepage";
import ApplicationForm from "./components/ApplicationForm";
import Levels from "./components/Levels";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/hackathon" element={<HackathonSection />}></Route>
          <Route path="/hackathon/domains" element={<DomainCards />} />
          {domainsData.map((domain) => (
            <Route
              key={domain.id}
              path={`/domain/${domain.id}`}
              element={<DomainDetail domain={domain} />}
            />
          ))}
          <Route path="/hackathon/applform" element={<ApplicationForm />} />
          <Route path="/hackathon/levels" element={<Levels />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

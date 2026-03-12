import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import { AuthProvider } from "./contexts/AuthContext";
import HomeComponent from './pages/Home';
import History from "./pages/History.jsx";
import Authentication from "./pages/Authentication";
import './App.css';
import VedioMeetComponent from "./pages/VedioMeet.jsx";

function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path='/home's element={<HomeComponent />} />
        <Route path='/history'  element={<History/>}/>
        <Route path="/:url" element={<VedioMeetComponent />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

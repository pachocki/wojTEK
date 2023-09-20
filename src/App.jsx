import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";
import About from "./Pages/About";
import Archtek from "./Pages/Archtek";
import Contact from "./Pages/Contact";
import DingDong from "./Pages/DingDong";
import Ebike from "./Pages/Ebike";
import Home from "./Pages/Home";
import Koselig from "./Pages/Koselig";
import Playwell from "./Pages/Playwell";
import Work from "./Pages/Work";
import Workout from "./Pages/Workout";
import Mokosh from "./Pages/Mokosh";
import Hygge from "./Pages/Hygge";
import GadgetHub from "./Pages/GadgetHub";
import Sending from "./Pages/Sending";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Playwell" element={<Playwell />} />
          <Route path="/Koselig" element={<Koselig />} />
          <Route path="/DingDong" element={<DingDong />} />
          <Route path="/Ebike" element={<Ebike />} />
          <Route path="/Workout" element={<Workout />} />
          <Route path="/archtek" element={<Archtek />} />
          <Route path="/mokosh" element={<Mokosh />} />
          <Route path="/hygge" element={<Hygge />} />
          <Route path="/gadgethub" element={<GadgetHub />} />
          <Route path="/sending" element={<Sending />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import Navbar from "./components/NAVBAR.jsx";
import Bf from "./components/BF.JSX";
import CareerSkillsSection from "./components/CareerSkillsSection.jsx";
import Bblack from "./components/Bblack.jsx";
import Courses from "./components/Courses.jsx";
import TrustedCompanies from "./components/TrustedCompanies.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div style={{width:"80%", margin:"auto"}}>
        <Bf />
        <CareerSkillsSection />
        <Bblack />
        <Courses />
      </div>
      <TrustedCompanies />
    </>
  );
}

export default App;

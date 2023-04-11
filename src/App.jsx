import "./App.css";
import logo from "./logo.png";
import { useEffect, useState } from "react";
import { MemoryRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Component/Home";
import loader from "./loader.svg";
import About from "./Component/About";
import Education from "./Component/Education";
import Experience from "./Component/Experience";
import Contact from "./Component/Contact";
import { navBarStyles } from "./Component/ConstantFile";

const navbarStyle = {};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  });

  return (
    <div className="homepagebackground">
      {loading ? (
        <Pre loading={loading} />
      ) : (
        <>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/experience" element={<Experience />}></Route>
              <Route path="/education" element={<Education />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;

const navHeadings = ["Home", "About", "Experience", "Education", "Contact"];
const navLinks = {
  Home: "/",
  About: "/about",
  Experience: "/experience",
  Education: "/education",
  Contact: "/contact",
};

const NavBar = () => {
  return (
    <>
      <div style={navBarStyles}>
        <div>
          <img src={logo} style={{ width: "8%" }} alt="data"></img>
        </div>
        {navHeadings.map((item) => {
          return (
            <Link
              className="linkButton"
              key={item}
              style={navbarStyle}
              to={navLinks[item]}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </>
  );
};

function Pre(props) {
  return (
    <>
      {props.loading && (
        <div className="center">
          <img src={loader} style={{ width: "70%" }} alt="loader" />
        </div>
      )}
    </>
  );
}

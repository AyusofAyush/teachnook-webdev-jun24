import "./App.scss";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact"; // make it lazy if you want
const About = React.lazy(() => import("./pages/About/About"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Offering = React.lazy(() => import('./pages/Offering/Offering'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <About />
            </Suspense>
          }
        />
         <Route
          path="/tour"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Offering />
            </Suspense>
          }
        />
         <Route
          path="/contact"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Contact />
            </Suspense>
          }
        />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

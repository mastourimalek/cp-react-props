import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import tof from "./Assets/Malik.jpg";

function App() {
  return (
    <div className="App">
      <div>
        <Profile Fullname="Malek" Bio="Student" Profession="Web developer">
          <img style={{ width: "10%", height: "10%" }} src={tof} alt="tof" />
        </Profile>
      </div>
    </div>
  );
}

export default App;

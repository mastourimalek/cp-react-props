import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
  const handleName = (Fullname) => {
    alert(`This is my ${props.Fullname}`);
  };
  return (
    <div>
      <h1>This is my Profile</h1>
      <h2> {props.Fullname} </h2>
      <h2> {props.Bio} </h2>
      <h2> {props.Profession} </h2>
      <h2> {props.Adress} </h2>
      {props.children}
      <div>
        <button onClick={handleName}> cklick me</button>
      </div>
    </div>
  );
};

export default Profile;
Profile.defaultProps = { Adress: "gomycode" };
Profile.propTypes = { Bio: PropTypes.number };

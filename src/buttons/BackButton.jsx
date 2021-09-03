import React from 'react';
import { useHistory } from "react-router-dom";

export default function BackButton(props) {
  const history = useHistory();
  const goToLanding= () => history.push("/");

  return (
    <button className="back_button" onClick={goToLanding}>
      <i className="fas fa-arrow-circle-left"></i>
    </button>
  );
}

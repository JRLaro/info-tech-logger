import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn direction-left" >
        
      <a
        href="#add-log-modal"
        className="btn-floating btn-large green darken-3 modal-trigger"
      >
        {" "}
        <i className="large material-icons">note_add</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          ><i className="material-icons">person</i></a>
        </li>
        <li>
          <a
            href="#add-tech-modal"
            className="btn-floating green darken-1 modal-trigger"
          ><i className="material-icons">person_add</i></a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;

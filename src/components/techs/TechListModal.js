import React, { useState, useEffect } from "react";
import axios from "axios";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);
  const getTechs = async () => {
    setLoading(true);
    //axios
    try {
      const res = await axios.get("/techs");
      console.log(res);

      setTechs(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Tech List</h4>
        <ul className="collection">
          {!loading &&
            techs.map((tech) => (
              <TechItem tech={tech} key={tech.id} />
            ))}
              </ul>
              
      </div>
    </div>
  );
};

export default TechListModal;

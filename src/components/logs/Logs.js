import React, { useState, useEffect } from "react";
import axios from "axios";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);
  const getLogs = async () => {
    setLoading(true);
    //axios
    try {
      const res = await axios.get("/logs");
        console.log(res);
        
      setLogs(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }

    ///////fetch
    // const res = await fetch("/logs");
    // const data = await res.json();
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
          </li>
          {!loading && logs.length === 0 ? (<p className="center">You have no logs</p>) : (logs.map((logs) => <li>{logs.message}</li>))}
    </ul>
  );
};

export default Logs;

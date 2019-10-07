import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [quarterCount, quarterSetCount] = useState(0);
  const [downCount, downSetCount] = useState(0);
  const [togoCount, togoSetCount] = useState(0);
  const [ballOnCount, ballOnSetCount] = useState(0);
  return (
    <>
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downCount}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{togoCount}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOnCount}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterCount}</div>
      </div>
    </div>
    <button className="homeButtons__touchdown" onClick={() => downSetCount(downCount + 1)}>Next Down</button>
    <button className="homeButtons__touchdown" onClick={() => togoSetCount(togoCount + 1)}>Add 1   </button>
    <button className="homeButtons__touchdown" onClick={() => ballOnSetCount(ballOnCount + 1)}>Add 1   </button>
    <button className="homeButtons__touchdown" onClick={() => quarterSetCount(quarterCount + 1)}>Next Quarter</button>
    </>
  );
};

export default BottomRow;

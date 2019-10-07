import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  let [quarterCount, quarterSetCount] = useState(1);
  let [downCount, downSetCount] = useState(1);
  let [togoCount, togoSetCount] = useState(10);
  let [ballOnCount, ballOnSetCount] = useState(1);
  if (quarterCount > 4){
    quarterCount = 1;
  }
  if (downCount > 4){
    downCount = 1;
  }
  if (ballOnCount > 50){
    ballOnCount = 1;
  }
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
    <button className="homeButtons__touchdown" onClick={() => togoSetCount(togoCount + 1)}>Add 1 ToGo</button>
    <button className="homeButtons__touchdown" onClick={() => togoSetCount(togoCount - 1)}>Subtract 1 ToGo</button>
    <button className="homeButtons__touchdown" onClick={() => ballOnSetCount(ballOnCount + 1)}>Add 1 BallOn</button>
    {/* <button className="homeButtons__touchdown" onClick={() => togoSetCount(togoCount = 10)}>Reset To Go</button> */}
    <button className="homeButtons__touchdown" onClick={() => ballOnSetCount(ballOnCount + 5)}>Add 5 BallOn</button>
    <button className="homeButtons__touchdown" onClick={() => ballOnSetCount(ballOnCount = 1)}>Reset Ball On</button>
    <button className="homeButtons__touchdown" onClick={() => quarterSetCount(quarterCount + 1)}>Next Quarter</button>
    </>
  );
};

export default BottomRow;

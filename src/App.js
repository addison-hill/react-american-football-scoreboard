//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ReactDOM from "react-dom";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  let [homeCount, homeSetCount] = useState(0);
  let [awayCount, awaySetCount] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Cowboys</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer">15:00</div>
          <div className="away">
            <h2 className="away__name">Packers</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => homeSetCount(homeCount + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => homeSetCount(homeCount + 3)}>Home Field Goal</button>
          <button className="homeButtons__fieldGoal" onClick={() => homeSetCount(homeCount = 0)}>Reset Home Score</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => awaySetCount(awayCount + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => awaySetCount(awayCount + 3)}>Away Field Goal</button>
          <button className="awayButtons__fieldGoal" onClick={() => awaySetCount(awayCount = 0)}>Reset Away Score</button>
        </div>
      </section>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

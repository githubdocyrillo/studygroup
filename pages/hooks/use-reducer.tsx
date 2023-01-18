import { NextPage } from "next";
import React, { useState } from "react";
import {
  Light,
  TrafficLight,
} from "../../components/TrafficLight/TrafficLight.styles";

enum TraficLightState {
  STOP = "red",
  SLOW_DOWN = "yellow",
  GO = "green",
}

const UseReducerSample: NextPage = () => {
  const [actived, setActived] = useState<TraficLightState>(
    TraficLightState.STOP
  );

  const map = (current: TraficLightState) => (
    <Light
      key={current}
      actived={current === actived}
      color={current}
      onClick={() => setActived(current)}
    ></Light>
  );

  return (
    <TrafficLight>
      <h1>GO</h1>
      {Object.values(TraficLightState).map(map)}
    </TrafficLight>
  );
};

export default UseReducerSample;

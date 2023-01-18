import { NextPage } from "next";
import React, { useCallback, useState } from "react";
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

  const map = useCallback(
    (current: TraficLightState) => (
      <Light
        key={current}
        actived={current === actived}
        color={current}
        onClick={() => setActived(current)}
      ></Light>
    ),
    [actived]
  );

  return (
    <TrafficLight>{Object.values(TraficLightState).map(map)}</TrafficLight>
  );
};

export default UseReducerSample;

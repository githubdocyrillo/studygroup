import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import {
  Light,
  TrafficLight,
} from "../../components/TrafficLight/TrafficLight.styles";

enum TrafficLightState {
  STOP = "red",
  SLOW_DOWN = "orange",
  GO = "green",
}

const UseStateSample: NextPage = () => {
  const [actived, setActived] = useState<TrafficLightState>(
    TrafficLightState.STOP
  );

  const map = useCallback(
    (value: TrafficLightState) => {
      return (
        <Light
          key={value}
          actived={actived === value}
          color={value}
          onClick={() => setActived(value)}
        ></Light>
      );
    },
    [actived]
  );

  return (
    <TrafficLight>{Object.values(TrafficLightState).map(map)}</TrafficLight>
  );
};

export default UseStateSample;

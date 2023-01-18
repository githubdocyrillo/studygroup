import { NextPage } from "next";
import React, { useState } from "react";
import {
  Light,
  TraficLight,
} from "../../components/TraficLight/TraficLight.styles";

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
    <TraficLight>
      <h1>GO</h1>
      {Object.values(TraficLightState).map(map)}
    </TraficLight>
  );
};

export default UseReducerSample;

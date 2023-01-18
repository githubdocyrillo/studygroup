import { NextPage } from "next";
import React, { useCallback, useReducer, useState } from "react";
import {
  Light,
  TrafficLight,
} from "../../components/TrafficLight/TrafficLight.styles";

enum TraficLightText {
  STOP = "Parar",
  SLOW_DOWN = "Reduzir",
  GO = "Avançar",
}

enum TraficLightState {
  STOP = "red",
  SLOW_DOWN = "yellow",
  GO = "green",
}

type State = {
  actived: TraficLightState;
  text: TraficLightText;
};

type Action = {
  type: TraficLightState;
};

const trafficLightReducer = (state: State, action: Action) => {
  switch (action.type) {
    case TraficLightState.GO:
      return {
        ...state,
        text: TraficLightText.GO,
        actived: TraficLightState.GO,
      };
    case TraficLightState.SLOW_DOWN:
      return {
        ...state,
        text: TraficLightText.SLOW_DOWN,
        actived: TraficLightState.SLOW_DOWN,
      };
    default:
      return {
        ...state,
        text: TraficLightText.STOP,
        actived: TraficLightState.STOP,
      };
  }
};

const UseReducerSample: NextPage = () => {
  const [state, dispatch] = useReducer(trafficLightReducer, {
    actived: TraficLightState.STOP,
    text: TraficLightText.STOP,
  });

  const map = useCallback(
    (current: TraficLightState) => (
      <Light
        key={current}
        actived={current === state.actived}
        color={current}
        onClick={() => {
          dispatch({ type: current });
        }}
      ></Light>
    ),
    [state.actived]
  );

  return (
    <TrafficLight>
      <h1>{state.text}</h1>
      {Object.values(TraficLightState).map(map)}
    </TrafficLight>
  );
};

export default UseReducerSample;

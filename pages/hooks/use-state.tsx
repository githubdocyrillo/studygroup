import { NextPage } from "next";
import React from "react";
import {
  Light,
  TrafficLight,
} from "../../components/TrafficLight/TrafficLight.styles";

const UseStateSample: NextPage = () => {
  return (
    <TrafficLight>
      <Light color="red"></Light>
      <Light color="yellow"></Light>
      <Light color="green"></Light>
    </TrafficLight>
  );
};

export default UseStateSample;

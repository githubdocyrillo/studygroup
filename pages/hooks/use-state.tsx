import { NextPage } from "next";
import React from "react";
import {
  Light,
  TraficLight,
} from "../../components/TraficLight/TraficLight.styles";

const UseStateSample: NextPage = () => {
  return (
    <TraficLight>
      <Light color="red"></Light>
      <Light color="yellow"></Light>
      <Light color="green"></Light>
    </TraficLight>
  );
};

export default UseStateSample;

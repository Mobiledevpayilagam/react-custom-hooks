import { useState } from "react";

export const useCalculations = () => {
  const multiplication = (numberOne, numberTwo) => {
    return numberOne * numberTwo
  };
  const division = (numberOne, numberTwo) => {
    if(numberTwo === 0) return 'Calculation not possible'
return numberOne / numberTwo  }

  return [{
    multiplication,
    division
  }]
};

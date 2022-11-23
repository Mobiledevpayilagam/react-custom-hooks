import React, { useEffect, useState } from "react";
import { useCalculations } from "../hooks/calculations";

function Multiplication({ numberOne, numberTwo }) {
  const [{ multiplication }] = useCalculations();
  const [multiplicationResult, setMultiplicationResult] = useState(0);

  useEffect(() => {
    setMultiplicationResult((state) =>
      multiplication(parseInt(numberOne), parseInt(numberTwo))
    );
  }, [numberOne, numberTwo]);

  return (
    <div>
      <p>Multiplication</p>
      <p>{multiplicationResult}</p>
    </div>
  );
}

export default Multiplication;

import React, { useEffect, useState } from "react";
import { useCalculations } from "../hooks/calculations";

function Division({ numberOne, numberTwo }) {
  const [{ division }] = useCalculations();
  const [divisionResult, setDivisionResult] = useState(0);

  useEffect(() => {
    setDivisionResult((state) =>
      division(parseInt(numberOne), parseInt(numberTwo))
    );
  }, [numberOne, numberTwo]);

  return (
    <div>
      <p>Division</p>
      <p>{divisionResult}</p>
    </div>
  );
}

export default Division;

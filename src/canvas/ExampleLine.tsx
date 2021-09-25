import React from "react";
import { Line } from "@react-three/drei";

export default function ExampleLine(): JSX.Element {
  return (
    <Line
      points={[
        [-10, 0, 0],
        [0, 10, 0],
        [10, 0, 0]
      ]}
      color={0x0000ff}
    />
  );
}

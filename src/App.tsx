import React from "react";
import "normalize.css";

import FullScreenCanvas from "./canvas/FullScreenCanvas";
import ExampleCamera from "./canvas/ExampleCamera";
import ExampleLine from "./canvas/ExampleLine";

export default function App() {
  return (
    <FullScreenCanvas>
      <ExampleCamera />
      <ExampleLine />
    </FullScreenCanvas>
  );
}

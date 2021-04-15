import React, { useState } from "react";
import "../styles/_launchpad.scss";
import { FunctionalRocket } from "./Rocket";

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0);

  setTimeout(() => {
    triggerRerender(rerenderCount + 1);
  }, 500);

  return (
    <div className="launchpad">
      {rerenderCount}
      <FunctionalRocket />
    </div>
  );
}

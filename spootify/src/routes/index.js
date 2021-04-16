import React from "react";
import CoreLayout from "../common/layouts/CoreLayout";
import Discover from "./Discover";

export default function Routes() {
  // Here you'd return an array of routes
  return (
    <CoreLayout>
      <Discover />
    </CoreLayout>
  );
}

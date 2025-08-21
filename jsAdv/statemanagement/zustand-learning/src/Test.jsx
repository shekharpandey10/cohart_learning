import React, { useState, useEffect, useMemo } from "react";
import { useStore } from "./Store";
import { shallow } from "zustand/shallow";

function Test({state}) {
const tasks = useStore(
  (store) => store.tasks.filter((task) => task.status === state),
  shallow // you can use shallow for simple equality check
);

return <>
</>
}

export default Test
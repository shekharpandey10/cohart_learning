import React, { useState, useEffect } from "react";

// 👉 Custom hook
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
console.log('hello1')
  useEffect(() => {
    const handleResize = () => {
           console.log('hello2')
      setSize({
         width: window.innerWidth,
        height: window.innerHeight
      })
   
    };
console.log('hello2.5')
    // 👉 Add event listener
    window.addEventListener("resize", handleResize);

    // 👉 Cleanup event listener
    return () => {
        console.log('hello3')
      window.removeEventListener("resize", handleResize);
    };
  }, []);
console.log('boss')
  return size; // { width, height }
}

export default function WindowSizeApp() {
  const { width, height } = useWindowSize();
    console.log('hello0')
  return (
    <div>
      <h2>Window Size Tracker</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

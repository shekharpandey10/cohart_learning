import React, { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);
  const count=useRef(0)
  console.log(inputRef)

  const handleFocus = () => {
    // 👉 Focus the input using inputRef
    inputRef.current.focus()
    count.current+=1
    alert(count.current)
  };

  return (
    <div>
      <h2>Focus Input Example</h2>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}


import { useEffect, useRef } from "react";

export const RefExample = () => {
  const onClick = () => {
    inputRef.current.value = "Otp"
  };
  const inputRef = useRef();

  useEffect(() => {
    console.log("Rendered")
  })
  return (
    <>
      <input type="text" ref={inputRef} />;
      <button onClick={onClick}>Console log</button>
    </>
  );
};

import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  });

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, []);
  // mount되었을 때만, return은 unmount

  return (
    <>
      <h2>LifeCycle</h2>
      <button
        onClick={() => {
          setCount((x) => x + 1);
        }}
      >
        button
      </button>
      {count}
    </>
  );
};

export default LifeCycle;

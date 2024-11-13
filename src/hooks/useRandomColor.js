import { useState, useEffect } from "react";
import randomColor from "randomcolor";

export function useRandomColor({ milliseconds } = { milliseconds: 1000 }) {
  const [color, setColor] = useState(randomColor());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(randomColor());
    }, milliseconds);
    return () => {
      clearInterval(intervalId);
      console.log("This will be logged on unmount");
    };
  }, [milliseconds]);
  return color;
}

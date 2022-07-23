import { useEffect, useState } from "react";

export const useWindowMediaQuery = () => {
  const { innerWidth } = window;
  const [width, setWidth] = useState(innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [innerWidth]);

  return width;
};

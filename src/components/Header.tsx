import { useState } from "react";
import { useEffect } from "react";
import { PropsItem } from "../data/Models";

export const Header = (props: PropsItem) => {
  const heading = props.dataRepo.getHeading();

  const [cursor, setCursor] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      for (let i = 0; i < heading.length; i++) {
        await new Promise((r) => setTimeout(r, 150));
        setMessage((msg) => msg + heading[i]);
      }
    })();

    const cursorInterval = setInterval(() => setCursor((c) => !c), 530);

    return () => {
      clearInterval(cursorInterval);
    };
  }, [heading]);

  return (
    <h1 style={{ fontSize: "96px", margin: "20px" }}>
      {message}
      <span
        style={{
          visibility: cursor ? "visible" : "hidden",
          fontWeight: "lighter",
        }}
      >
        |
      </span>
    </h1>
  );
};

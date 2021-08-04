import { useTheme } from "@material-ui/core";
import { useState, useEffect } from "react";
import { PropsItem } from "../data/Models";

export const Header = (props: PropsItem) => {
  const theme = useTheme()

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

  const headerStyle = {
    fontSize: "96px",
    marginTop: "70px",
    padding: "20px",
    textAlign: "center",
    color: theme.palette.text.primary
  } as React.CSSProperties;

  const cursorStyle = {
    visibility: cursor ? "visible" : "hidden",
    fontWeight: "lighter",
  } as React.CSSProperties;

  return (
    <h1 style={headerStyle}>
      {message}
      <span style={cursorStyle}>|</span>
    </h1>
  );
};

import { Card, CircularProgress, useTheme } from "@material-ui/core";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import { QuoteRepo } from "../data/QuoteRepo";
import { getCardStyle } from "./Profile";

export const QuoteCard = (props: { quoteRepo: QuoteRepo }) => {
  const theme = useTheme();

  const loading = "Loading...";
  const [quote, setQuote] = useState({ quote: loading, author: loading });

  const retrieveQuote = async () => {
    await new Promise((r) => setTimeout(r, 3000));
    setQuote(await props.quoteRepo.getQuote());
  };

  useEffect(() => {
    retrieveQuote();
  }, []);

  const quoteStyle = {
    padding: "20px",
    width: "90%",
    maxWidth: "770px",
    marginBottom: "20px",
    alignItems: "center",
  };
  const textStyle = {
    margin: "0px",
    padding: "0px",
    fontFamily: "Roboto",
    color: theme.palette.text.primary,
  };

  const innerContent = (
    <Fragment>
      <h3 style={textStyle}>{quote.quote}</h3>
      <h4
        style={{
          ...textStyle,
          width: "100%",
          marginTop: "10px",
          textAlign: "end",
        }}
      >
        - {quote.author}
      </h4>
    </Fragment>
  );

  return (
    <div className="col" style={quoteStyle}>
      {quote.author === loading ? <CircularProgress /> : innerContent}
    </div>
  );
};

import { Button, Icon, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import { IconText, PropsItem, SectionItem } from "../data/Models";

export const Sections = (props: PropsItem) => {
  const sections = props.dataRepo.getSections();

  const theme = useTheme();

  const sectionBarStyle = {
    minWidth: "100vw",
    justifyContent: "center",
    position: "sticky",
    top: 0,
    background: theme.palette.background.default,
  } as React.CSSProperties;

  return (
    <div className="row" style={sectionBarStyle}>
      {sections.map((section) => (
        <SectionMenuItem {...section} />
      ))}
    </div>
  );
};

const SectionMenuItem = (section: SectionItem) => {
  const theme = useTheme();

  const iconStyle = { color: theme.palette.text.primary, margin: "5px" };
  const icon = (
    <Icon className={section.iconText.icon.image} style={iconStyle} />
  );

  const sectionButtonStyle = { margin: "20px" };
  return (
    <Link to={section.route} style={{ textDecoration: "none" }}>
      <Button style={sectionButtonStyle} startIcon={icon}>
        {section.iconText.text}
      </Button>
    </Link>
  );
};

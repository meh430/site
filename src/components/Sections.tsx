import { Button, Icon, useTheme } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PropsItem, SectionItem } from "../data/Models";

export const Sections = (props: PropsItem) => {
  const sections = props.dataRepo.getSections();

  const theme = useTheme();
  const [selectedSection, setSelectedSection] = useState(sections[0].route)

  const handleClick = (s: SectionItem) => {
    setSelectedSection(s.route)
  };

  const sectionBarStyle = {
    minWidth: "100vw",
    justifyContent: "center",
    position: "sticky",
    top: 0,
    background: theme.palette.background.default,
  } as React.CSSProperties;

  return (
    <div className="row" style={sectionBarStyle}>
      {sections.map((s) => {
        const props = { section: s, selected: selectedSection === s.route, handleClick: handleClick };
        return <SectionMenuItem {...props} />;
      })}
    </div>
  );
};

const SectionMenuItem = (props: {
  section: SectionItem;
  selected: boolean;
  handleClick: (s: SectionItem) => void;
}) => {
  const theme = useTheme();

  const iconColor = props.selected ? theme.palette.text.primary : theme.palette.text.disabled
  const iconStyle = { color: iconColor, margin: "5px" };
  const icon = (
    <Icon className={props.section.iconText.icon.image} style={iconStyle} />
  );

  const sectionButtonStyle = { margin: "20px", color: iconColor };
  return (
    <Link
      to={props.section.route}
      style={{ textDecoration: "none" }}
      onClick={() => props.handleClick(props.section)}
    >
      <Button style={sectionButtonStyle} startIcon={icon} disableRipple>
        {props.section.iconText.text}
      </Button>
    </Link>
  );
};

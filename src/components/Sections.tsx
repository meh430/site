import { Button, Icon, useTheme } from "@material-ui/core";
import { IconText, PropsItem } from "../data/Models";

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
        <SectionItem text={section.text} icon={section.icon} />
      ))}
    </div>
  );
};

const SectionItem = (section: IconText) => {
  const theme = useTheme()

  const iconStyle = { color: theme.palette.text.primary, margin: "5px" };
  const icon = <Icon className={section.icon.image} style={iconStyle} />;

  const sectionButtonStyle = { margin: "20px" };
  return (
    <Button style={sectionButtonStyle} startIcon={icon}>
      {section.text}
    </Button>
  );
};

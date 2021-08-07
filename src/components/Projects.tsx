import { Card, useTheme } from "@material-ui/core";
import { Project, PropsItem } from "../data/Models";
import { getCardStyle } from "./Profile";

export const Projects = (props: PropsItem) => {
  const projects = props.dataRepo.getProjects();
  return (
    <div
      className="row"
      style={{
        justifyContent: "center",
        marginTop: "10px",
        marginBottom: "20px",
      }}
    >
      {projects.map((project) => (
        <ProjectCard {...project} key={project.projectName} />
      ))}
    </div>
  );
};

const ProjectCard = (project: Project) => {
  const theme = useTheme();
  const cardStyle = {
    ...getCardStyle(theme, 11),
    padding: "20px",
    margin: "10px",
    width: "90%",
    maxWidth: "250px",
    alignItems: "center",
  };
  const textStyle = {
    margin: "0px",
    padding: "0px",
    marginBottom: "10px",
    textAlign: "center",
  } as React.CSSProperties;
  const iconStyle = {
    margin: "10px",
    fontSize: "40px",
    color: theme.palette.text.primary,
  };
  return (
    <Card className="col" style={cardStyle}>
      <h4 style={textStyle}>{project.projectName}</h4>
      <h5 style={textStyle}>{project.technologies}</h5>
      <p style={textStyle}>{getTruncatedText(project.description)}</p>
      <div className="row">
        <i className="fab fa-github" style={iconStyle} />
        <i className="fas fa-info-circle" style={iconStyle} />
      </div>
    </Card>
  );
};

const getTruncatedText = (text: string, limit: number = 150) => {
  const ellipsis = "...";
  const adjustedLimit = limit - 3;
  if (text.length > adjustedLimit) {
    return text.substring(0, adjustedLimit) + ellipsis;
  } else {
    return text;
  }
};

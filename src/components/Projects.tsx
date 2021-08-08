import { Card, CircularProgress, Dialog, useTheme } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { Project, PropsItem } from "../data/Models";
import { getCardStyle } from "./Profile";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  handleClose: () => void;
}

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

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const cardStyle = {
    ...getCardStyle(theme, 8),
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
    cursor: "pointer",
  };

  const modalProps: ProjectModalProps = {
    project: project,
    isOpen: open,
    handleClose: handleClose,
  };
  return (
    <Card className="col" style={cardStyle}>
      <ProjectModal {...modalProps} />
      <h4 style={textStyle}>{project.projectName}</h4>
      <h5 style={textStyle}>{project.technologies}</h5>
      <p style={textStyle}>{getTruncatedText(project.description)}</p>
      <div className="row">
        <a href={project.projectLink} rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github" style={iconStyle} />
        </a>
        <i
          className="fas fa-info-circle"
          style={iconStyle}
          onClick={handleOpen}
        />
      </div>
    </Card>
  );
};

const ProjectModal = (props: ProjectModalProps) => {
  const theme = useTheme();
  const project: Project = props.project;

  const wrapperStyle = {
    backgroundColor: theme.palette.background.default,
    alignItems: "center",
    overscrollBehaviorY: "none",
  } as React.CSSProperties;
  const textStyle = {
    margin: "0px",
    padding: "0px",
  };
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: { borderRadius: 20 },
      }}
    >
      <div className="col" style={wrapperStyle}>
        <h2 style={{ ...textStyle, marginTop: "20px" }}>
          {project.projectName}
        </h2>
        <ImageCarousel {...project} />
      </div>
    </Dialog>
  );
};

const ImageCarousel = (project: Project) => {
  const wrapperStyle = {
    alignItems: "center",
    margin: "20px",
  };
  const imageStyle = {
    width: "95%",
    borderRadius: "20px",
  };
  const bottomControlStyle = {};
  return (
    <div className="col" style={wrapperStyle}>
      <LoadingImage image={project.images[0]} imageStyle={imageStyle} />
      <div className="row" style={bottomControlStyle}></div>
    </div>
  );
};

export const LoadingImage = (props: {
  image: string;
  imageStyle: React.CSSProperties;
}) => {
  const [loading, setLoading] = useState(true);

  const getDisplay = (hide: boolean) => (hide ? "none" : "block");

  const imageStyle = {
    ...props.imageStyle,
    display: getDisplay(loading),
  };

  return (
    <Fragment>
      <img
        onLoad={() => setLoading(false)}
        src={props.image}
        style={imageStyle}
      />
      <CircularProgress style={{ display: getDisplay(!loading) }} />
    </Fragment>
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

import { Card, useTheme } from "@material-ui/core";
import { DataRepoImpl } from "../data/DataRepoImpl";
import { PropsItem } from "../data/Models";
import { getCardStyle } from "./Profile";

export const EducationCard = () => {
  const theme = useTheme();
  const repo = new DataRepoImpl();
  const education = repo.getEducation()[0];

  const margins = { margin: "12px", padding: "0px" };

  return (
    <Card style={{ margin: "20px", ...getCardStyle(theme) }}>
      <div className="col" style={{ padding: "20px", alignItems: "center" }}>
        <img src={education.image} style={{ margin: "20px" }} />
        <h2 style={margins}>{education.schoolName}</h2>
        <h4 style={margins}>{education.period}</h4>
        <h3 style={margins}>{education.details}</h3>
      </div>
    </Card>
  );
};

export const EducationSection = (props: PropsItem) => {
  
}

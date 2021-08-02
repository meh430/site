import { Card, useTheme } from "@material-ui/core"
import { DataRepoImpl } from "../data/DataRepoImpl"
import { getCardStyle } from "./Profile"

export const EducationCard = () => {
  const theme = useTheme()
  const repo = new DataRepoImpl()
  const education = repo.getEducation()[0]

  return (
    <Card style={{...getCardStyle(theme)}}>
      <div className="col" style={{padding: "20px", alignItems: "center"}}>
        <img src={education.image} style={{margin: "20px"}}/>
        <h3>{education.schoolName}</h3>
        <h3>{education.period}</h3>
        <h3>{education.details}</h3>
      </div>
    </Card>
  )
}
import { Button, Icon, useTheme } from "@material-ui/core";
import { IconText, PropsItem } from "../data/Models";

export const Sections = (props: PropsItem) => {
    const sections = props.dataRepo.getSections()

    const theme = useTheme()

    return (
        <div className="row" style={{position: "sticky", top: 0, background: theme.palette.background.default}}>
            {sections.map(section => <SectionItem text={section.text} icon={section.icon} />)}
        </div>
    )
}

const SectionItem = (section: IconText) => {
    console.log(section.icon.image)

    const icon = (
        <Icon
        className={section.icon.image}
        style={{color: section.icon.iconColor, margin: "5px"}}
        />
    )

    return (
        <Button
            style={{ margin: "20px" }}
            startIcon={icon}>
            {section.text}
        </Button>
    )
}
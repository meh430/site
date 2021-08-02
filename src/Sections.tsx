import { Button, Icon } from "@material-ui/core";
import { IconText, PropsItem } from "./data/Models";

export const Sections = (props: PropsItem) => {
    const sections = props.dataRepo.getSections()

    return (
        <div className="row">
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
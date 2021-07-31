import { DataRepo } from "./DataRepo"
import { Profile, Project, Skill, Education } from "./Models";
import { data } from "./Data"

class DataRepoImpl implements DataRepo {

    getProfile(): Profile {
        return {
            bio: data.profile.bio,
            image: data.profile.image,
            contactLinks: data.profile.contactsLink.map((link) => ({
                url: link.url,
                icon: {
                    image: link.image,
                    isExternal: this.isIconExternal(link.iconColor),
                    iconColor: link.iconColor
                }

            }))
        }
    }

    getProjects(): Project[] {
        return data.projects.map((project) => ({
            projectName: project.title,
            description: project.brief,
            projectLink: project.repo,
            technologies: project.tech,
            features: project.features,
            images: project.images
        }))
    }

    getSkills(): Skill[] {
        return data.skills.map((skill) => ({
            skillName: skill.skill,
            icon: {
                image: skill.icon,
                isExternal: this.isIconExternal(skill.color),
                iconColor: skill.color
            }
        }))
    }

    getEducation(): Education[] {
        return data.education.map((education) => ({
            schoolName: education.title,
            period: education.period,
            details: education.details,
            image: education.image
        }))
    }

    private isIconExternal(color?: string): Boolean {
        return color ? true : false
    }
}
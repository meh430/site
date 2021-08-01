import { Education, Profile, Project, Skill } from "./Models";

export interface DataRepo {
    getHeading(): string
    getProfile(): Profile
    getProjects(): Project[]
    getSkills(): Skill[]
    getEducation(): Education[]
}
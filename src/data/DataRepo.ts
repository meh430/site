import { Education, Profile, Project, Skill } from "./Models";

export interface DataRepo {
    getProfile(): Profile
    getProjects(): Project[]
    getSkills(): Skill[]
    getEducation(): Education[]
}
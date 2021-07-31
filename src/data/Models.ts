
export interface ImageItem {
    image: string;
}

export interface Icon extends ImageItem {
    isExternal: Boolean;
    iconColor?: string;
}
  
export interface ImageLink {
    url: string;
    icon: Icon;
}

export interface Profile extends ImageItem {
    bio: string;
    contactLinks: ImageLink[]
}

export interface Project {
    projectName: string;
    description: string;
    projectLink: string;
    technologies: string;
    features: string[];
    images: string[]
}

export interface Skill {
    skillName: string;
    icon: Icon;
}

export interface Education extends ImageItem {
    schoolName: string;
    period: string;
    details: string;
}
 
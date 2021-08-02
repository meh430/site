import { Card } from "@material-ui/core";
import { ImageLink, Profile, PropsItem } from "../data/Models";

export const ProfileCard = (props: PropsItem) => {
    const profile = props.dataRepo.getProfile()
    return (
        <Card className="row" style={{ borderRadius: "20px", justifyContent: "center" }}>
            <div className="row" style={{ padding: "20px", justifyContent: "center" }}>
                <img src={profile.image} style={{ borderRadius: "20px", height: "300px", width: "300px" }} />
                <ProfileInfo {...profile}/>
            </div>
        </Card>
    )
}

const ProfileInfo = (profile: Profile) => {
    return (
        <div className="col" style={{justifyContent: "center"}}>
            <p style={{ maxWidth: "400px", margin: "10px" }}>
                {profile.bio}
            </p>
            <div className="row" style={{justifyContent: "center"}}>
                {profile.contactLinks.map(link => <SocialLink {...link}/>)}
            </div>
        </div>
    )
}

const SocialLink = (imageLink: ImageLink) => {
    return (
        <a
            className="social"
            style={{ color: imageLink.icon.iconColor }}
            href={imageLink.url}
            rel="noopener noreferrer"
            target="_blank"
        >
            <i className={imageLink.icon.image} />
        </a>
    )
}
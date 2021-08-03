import { Card, Theme, useTheme } from "@material-ui/core";
import { ImageLink, Profile, PropsItem } from "../data/Models";

export const getCardStyle = (theme: Theme, shadow: number = 11) => {
  return {
    boxShadow: theme.shadows[shadow],
    borderRadius: "20px"
  }
}

export const ProfileSection = (props: PropsItem) => {
  return (
    <div className="col" style={{alignItems: "center"}} >
      <h1>About</h1>
      <ProfileCard {...props}/>
    </div>
  )
}

const ProfileCard = (props: PropsItem) => {
  const theme = useTheme()

  const profile = props.dataRepo.getProfile();
  return (
    <Card
      className="row"
      style={{ margin: "20px", justifyContent: "center", ...getCardStyle(theme, 11) }}
    >
      <div
        className="row"
        style={{ justifyContent: "center", padding: "20px" }}
      >
        <img
          src={profile.image}
          style={{ borderRadius: "20px", margin: "20px", maxHeight: "300px" }}
        />
        <ProfileInfo {...profile} />
      </div>
    </Card>
  );
};  

const ProfileInfo = (profile: Profile) => {
  return (
    <div className="col" style={{ justifyContent: "center" }}>
      <p style={{ maxWidth: "500px", margin: "20px", fontSize: "18px" }}>{profile.bio}</p>
      <div className="row" style={{ justifyContent: "center" }}>
        {profile.contactLinks.map((link) => (
          <SocialLink {...link} />
        ))}
      </div>
    </div>
  );
};

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
  );
};

import { Card, Theme, useTheme } from "@material-ui/core";
import { ImageLink, Profile, PropsItem } from "../data/Models";

export const getCardStyle = (theme: Theme, shadow: number = 11) => {
  return {
    boxShadow: theme.shadows[shadow],
    borderRadius: "20px",
  };
};

export const ProfileCard = (props: PropsItem) => {
  const theme = useTheme();

  const profile = props.dataRepo.getProfile();

  const profileCardStyle = {
    margin: "20px",
    maxWidth: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    ...getCardStyle(theme, 11),
  };

  const profileImageStyle = {
    borderRadius: "20px",
    margin: "10px",
    width: "90%",
    maxWidth: "250px",
    maxHeight: "250px",
  };

  return (
    <Card className="row" style={profileCardStyle}>
      <img src={profile.image} style={profileImageStyle} />
      <ProfileInfo {...profile} />
    </Card>
  );
};

const ProfileInfo = (profile: Profile) => {
  const profileInfoStyle = {
    fontFamily: "Roboto",
    margin: "10px",
    width: "90%",
    maxWidth: "500px",
    fontSize: "16px",
  };
  
  return (
    <div className="col" style={{ justifyContent: "center" }}>
      <p style={profileInfoStyle}>{profile.bio}</p>
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

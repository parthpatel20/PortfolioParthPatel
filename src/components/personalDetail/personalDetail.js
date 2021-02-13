import React from "react";
import { profileDetail } from "../../api/data";
import { CardMedia, Container, Grid, Avatar } from "@material-ui/core";
import { useStyles } from "../../layout/Style";
import { EmailRounded, Call, GitHub, LinkedIn } from "@material-ui/icons";
import { useMediaQuery } from "@material-ui/core";

const PersonalDetail = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  const contactInfo = profileDetail.personalDetail;
  const lg = useMediaQuery("(min-width:1200px)");

  const LinkedAccounts = () => {
    return (
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <a href={"mailto:" + contactInfo.emailId} rel="noopener noreferrer">
            <EmailRounded
              fontSize="large"
              color="action"
              style={{ color: "white" }}
            />
          </a>
        </Grid>
        <Grid item>
          <a href={"tel:" + contactInfo.number} rel="noopener noreferrer">
            <Call fontSize="large" color="action" style={{ color: "white" }} />
          </a>
        </Grid>
        <Grid item>
          <a
            href={contactInfo.linkedAccounts.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub
              fontSize="large"
              color="action"
              style={{ color: "white" }}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            href={contactInfo.linkedAccounts.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn
              fontSize="large"
              color="action"
              style={{ color: "white" }}
            />
          </a>
        </Grid>
      </Grid>
    );
  };
  return (
    <div>
      <CardMedia
        className={
          matches
            ? lg
              ? classes.coverimgLg
              : classes.coverimg
            : classes.coverimgSm
        }
        image={contactInfo.image}
      >
        <Container>
          <Grid container justify="center" alignContent="center" alignItems="center">
            <Grid item alignContent="center" style={{ display: 'grid' }} justify="center" xl={12} md={12} xs={12} sm={12} lg={12}>
              <Avatar className={classes.avatarMyLarge} src={contactInfo.profileImage} sizes='large' />
            </Grid>
            <Grid item alignContent="center" justify="center" xl={12} md={12} xs={12} sm={12} lg={12}>
              <label className={classes.title}> {contactInfo.name}</label>
            </Grid>
            <Grid item alignContent="center" justify="center" xl={12} md={12} xs={12} sm={12} lg={12}>
              <h4 className={classes.titleSmall}>{contactInfo.position}</h4>
            </Grid>
            <Grid item alignContent="center" justify="center" xl={12} md={12} xs={12} sm={12} lg={12}>
              <p className={classes.titleSmall}>
                <b>
                  I am an enthusiastic person who has passion for software
                  development. I am committed to develop myself to achieve better
                  results in mychallenges with my versatile skillset. Moreover, as a
                  team member I believe that I means we. To work in an organization
                  where my technical skills, experience, creativity and knowledge
                  can be utilized at the fullest.
            </b>
              </p>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <LinkedAccounts></LinkedAccounts>
        </Container>
      </CardMedia>
    </div>
  );
};
export default PersonalDetail;

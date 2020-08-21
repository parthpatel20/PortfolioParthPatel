import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Grid,
} from "@material-ui/core";
import { useStyles } from "../../layout/Style";
import { FiberManualRecordRounded } from "@material-ui/icons";
import { useMediaQuery } from "@material-ui/core";

const ExperienceListItem = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const lg = useMediaQuery("(min-width:1200px)");
  const [roles, setRoles] = useState([]);
  const [experience, setExperience] = useState(props.exlistItem);
  useEffect(() => {
    if (props.exlistItem) {
      var data = props.exlistItem;
      var res = data.responsibilities;
      setExperience(props.exlistItem);
      setRoles(res);
    }
  }, [props.exlistItem]);
  const populateAvatar = () => {
    return (
      <ListItemAvatar className={classes.listAvatar}>
        <Grid item>
          <Avatar
            className={classes.avatarLarge}
            src={experience.companyLogo}
            sizes="large"
          />
        </Grid>
        <Grid item>
          <b>
            <label className={classes.listTitleSmall}>
              {experience.start} - {experience.end}
            </label>
          </b>
        </Grid>
      </ListItemAvatar>
    );
  };
  const populateListDescription = () => {
    return (
      <ListItemText
        primary={
          <Grid item>
            <label className={classes.listTitle}>{experience.position}</label>
          </Grid>
        }
        secondary={
          <Grid container spacing={1}>
            <Grid
              container
              className={
                matches
                  ? lg
                    ? ""
                    : classes.displayBlock
                  : classes.displayBlock
              }
              md={12}
              xs={12}
              sm={12}
              lg={12}
              xl={12}
              style={{ margin: "2px" }}
              spacing={1}
            >
              <Grid item>
                <span className={classes.listTitleSmall}>
                  {experience.positionType}
                </span>
              </Grid>
              <Grid item>
                <span className={classes.listTitleSmall}>
                  | {experience.company}
                </span>
              </Grid>
              <Grid item>
                <span className={classes.listTitleSmall}>
                  | {experience.location}
                </span>
              </Grid>
            </Grid>
            <Grid container>{populateListworks()}</Grid>
          </Grid>
        }
      ></ListItemText>
    );
  };
  const populateListworks = () => {
    return (
      <List>
        {roles.map((i, s) => {
          return (
            <ListItem key={s} className={classes.listItem}>
              <FiberManualRecordRounded fontSize="small" /> <span>{i}</span>
            </ListItem>
          );
        })}
      </List>
    );
  };
  return (
    <ListItem alignItems="center" divider>
      {experience ? (
        <Grid container spacing={1}>
          <Grid
            item
            className={
              matches
                ? lg
                  ? classes.itemAlignGridCenter
                  : classes.itemAlignGridCenterSm
                : classes.itemAlignGridCenterSm
            }
          >
            {populateAvatar()}
          </Grid>
          <Grid
            item
            className={
              matches
                ? lg
                  ? classes.listContainer
                  : classes.exlistContainer
                : classes.exlistContainer
            }
          >
            {populateListDescription()}
          </Grid>
        </Grid>
      ) : (
        "Loading...."
      )}
    </ListItem>
  );
};
export default ExperienceListItem;

import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
  },
  fullWidthRoot: {
    textAlign: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },

  cardRoot: {
    textAlign: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    height: "370px",
  },

  cardRootSm: {
    textAlign: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
  },
  centerContainer: {
    textAlign: "center",
    alignItems: "center",
    padding: "5%",
  },

  griItemMargin: {
    margin: "5px",
  },
  leftContainer: {
    textAlign: "left",
    alignItems: "left",
    padding: "5%",
  },
  portContainer: {
    textAlign: "left",
    alignItems: "left",
    padding: "3%",
    height: "auto",
  },

  portContainerLg: {
    textAlign: "left",
    alignItems: "left",
    padding: "3%",
    height: "auto",
  },
  coverimg: {
    // height: "350px",
    paddingTop: "20%",
    backgroundColor: 'black'
  },
  coverimgLg: {
    height: "100%",
    paddingTop: "20%",
    paddingBottom: "10%",
    backgroundColor: 'black',

  },
  mediaImage: {
    paddingTop: "30%",
  },
  mediaImageMd: {
    paddingTop: "10%",
  },
  avatarLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginLeft: "30%",
  },
  avatarMyLarge: {

    boxShadow: "0px 0px 30px 6px gray",
    border: "3px solid white"
  },

  avatarLargeSquare: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  coverimgSm: {
    height: "100%",
    paddingTop: "20%",
  },
  tabs: {
    textAlign: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    fontWeigt: "Bolder",
    color: "White",
    fontFamily: "monospace",

  },
  pageTitle: {
    fontSize: 25,
    fontWeigt: "Bolder",
  },
  titleSmall: {
    fontSize: 25,
    fontWeigt: "Bolder",
    color: "white",
    fontFamily: "monospace",
  },

  listContainer: {
    padding: "2% !important",
    width: "80%",
  },
  exlistContainer: {
    padding: "2% !important",
    textAlign: "center",
    width: "100%",
  },
  educationListContainer: {
    padding: "2% !important",
    width: "80%",
    textAlign: "center",
  },
  listItem: {
    padding: "0%",
    marginBottom: "5px",
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: "0%",
    marginLeft: "0%",
    lineHeight: "0",
  },
  listTitleSmall: {
    padding: "0%",
    marginLeft: "0%",
    lineHeight: "0",
    wordBreak: "break-word",
  },
  buttonListSpan: {
    padding: "1%",
    margin: "1%",
    lineHeight: "0",
    wordBreak: "break-word",
    fontWeight: "500",
  },
  listAvatar: {
    display: "inline",
    margin: "auto",
  },
  itemAlignGridCenter: {
    alignContent: "center",
    display: "grid",
    width: "175px",
  },
  itemAlignGridCenterSm: {
    alignContent: "center",
    display: "grid",
    width: "100%",
  },
  displayBlock: {
    display: "block",
  },
}));

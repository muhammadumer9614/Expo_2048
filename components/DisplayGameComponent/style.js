import { LOGO } from "../../constants/screen/logo";
import { StyleSheet } from "react-native";

const flex = {
  display: "flex",
  alignItems: "center",
};
export const styled = StyleSheet.create({
  gameScreen: {
    // marginTop: 20,
    height: "100%",
    position: "relative",
    // backgroundColor: "black",
    backgroundColor: "white",
  },
  head: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    // borderColor: "red",
    // borderWidth: 4,
    borderRadius: 50,
    height: 80,
    width: "100%",
    // marginTop: -22,
    marginBottom: -20,
    elevation: 6,

    // backgroundColor: "yellow",
  },
  scoreBoxBackground: {
    ...flex,
    justifyContent: "center",
    margin: 10,
  },
  scoreBoxText: {
    textAlign: "center",
    color: "grey",
    fontSize: 13,
  },
  swipeStyle: {
    ...flex,
    height: "100%",
  },
  scoreBox: {
    // backgroundColor: "yellow",
    height: 50,
    width: 100,
    borderRadius: 30,
    // borderWidth: 4,
    // borderColor: "pink",
    ...flex,
    justifyContent: "center",
    marginTop: 12,

    // borderRadius: 10,
    // marginTop: 2,
  },
  // logo: {
  //   ...flex,
  //   ...LOGO,
  // },
  logoContent: { fontSize: 50, color: "#fff", fontWeight: "bold" },
  noteBox: { paddingTop: 40, paddingBottom: 5, color: "#654747" },
});

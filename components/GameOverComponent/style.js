import { BUTTON } from "../../constants/buttons/mainButton";
import { SCREENTRANSPARENT } from "../../constants/screen/screenTranssparent";
import { StyleSheet } from "react-native";

const text = {
  fontSize: 20,
  fontWeight: "bold",
};

export const styled = StyleSheet.create({
  screenPostion: {
    ...SCREENTRANSPARENT,
    justifyContent: 'space-around',
  },
  scoreButton: {
    ...BUTTON,
    height: 85,
    width: 200,
    backgroundColor: "green",
    margin: 10,
    padding: 15,
  },
  nextButton: {
    ...BUTTON,
    height: 50,
    width: 120,
    backgroundColor: "green",
  },
  scoreText: {
    ...text,
    color: "white",
  },
  nextText: {
    ...text,
    color: "white",
    textTransform: "uppercase",
  },
});

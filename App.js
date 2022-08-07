import "react-native-gesture-handler";
import React, { useState, useRef, useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StartGameComponent } from "./components/StartGameComponent/StartGameComponent";
import { DisplayGameComponent } from "./components/DisplayGameComponent/DisplayGameComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SIZE_TITLES } from "./constants/titles";

import {
  getBack,
  getForward,
  getIndex,
  getForwardSize,
  getBackSize,
} from "./helpers/helpers";
import { generateArrayWithTwoRandoms } from "./services/services";
// import { AsyncStorage } from "react-native";

import { NavigationContainer, useBackButton } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function App() {
  const [displaySize, setDisplaySize] = useState(SIZE_TITLES[0]);
  console.log("SIZE TITLES IS : ", SIZE_TITLES);
  const [size, setSize] = useState(4);

  const [score, setScore] = useState(0);
  const [theHigestScore, setTheHigestScore] = useState(0);
  const array = generateArrayWithTwoRandoms(size);

  const [gameArray, setGameArray] = useState(array);
  const [gameStarted, setGameStarted] = useState(true);
  console.log("array in appjs", gameArray);

  const retrieveData = async (size) => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem(`${size}`));
      console.log("size", value);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem(`${size}`);
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  };

  function generateNew() {
    deleteData();
    setGameArray(array);
    setScore(0);
    setTheHigestScore(theHigestScore);
    setGameStarted(false);
  }
  useEffect(() => {
    async function getData() {
      const data = await retrieveData(size);
      console.log("----------", data);
      if (data && data.gameArray) {
        setGameArray(data.gameArray);
        if (data.score) {
          setScore(data.score);
        }
        if (data.theHigestScore) {
          setTheHigestScore(data.theHigestScore);
        }
        console.log("score apps", score);
        setGameStarted(true);
        // } else {
        //   generateNew();
      }
    }
    getData();
  }, [size]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => (
            <StartGameComponent
              {...props}
              displaySize={displaySize}
              gameStarted={gameStarted}
              generateNew={generateNew}
              gameArray={gameArray}
              size={size}
              setSize={setSize}
            />
          )}
        </Stack.Screen>
        {/* {_setWallpaper()} */}
        <Stack.Screen name="Game" options={{ headerShown: false }}>
          {(props) => (
            <DisplayGameComponent
              {...props}
              size={size}
              gameArray={gameArray}
              setGameArray={setGameArray}
              gameStarted={gameStarted}
              setGameStarted={setGameStarted}
              score={score}
              setScore={setScore}
              theHigestScore={theHigestScore}
              setTheHigestScore={setTheHigestScore}
              deleteData={deleteData}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

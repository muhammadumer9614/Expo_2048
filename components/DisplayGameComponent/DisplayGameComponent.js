import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import GestureRecognizer, {
  swipeDirections,
  GestureRecognizerProps,
} from "react-native-swipe-gestures";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  onSwipeLeft,
  onSwipeRight,
  onSwipeDown,
  onSwipeUp,
  reverseNumberToEmptyString,
  checkIfGameOver,
  getTheBiggestFromArray,
} from "../../services/services";
import {
  getBoxSize,
  getFontSize,
  getBackgroundNumberBox,
  getNumberColor,
} from "../../helpers/helpers";
import { GameOverComponent } from "../../components/GameOverComponent/GameOverComponent";
import { NewMilestoneComponent } from "../../components/NewMilestoneComponent/NewMilestoneComponent";
import { styled } from "./style";

import { GameComponent } from "../GameComponent/GameComponent";
import { GameAds } from "../AdsManagement/GameAds";
export function DisplayGameComponent(props) {
  let {
    size,
    gameArray,
    setGameArray,
    setGameStarted,
    score,
    setScore,
    theHigestScore,
    setTheHigestScore,
    deleteData,
  } = props;
  const [gameOver, setGameOver] = useState(false);
  const [theBiggest, setTheBiggest] = useState(
    getTheBiggestFromArray(gameArray, 7)
  );
  const [newMilestone, setNewMilestone] = useState(false);
  const variant = "big";

  useEffect(() => {
    AsyncStorage.setItem(
      `${size}`,
      JSON.stringify({ gameArray, score, theHigestScore })
    ).catch((e) => console.log(err));
  }, [gameArray, score, theHigestScore]);

  function swipeUp() {
    const { array, fullScore } = onSwipeUp(gameArray);
    const newScore = fullScore + score;
    setGameArray(array);
    setGameStarted(true);
    setScore(newScore);
    if (theHigestScore < score) {
      setTheHigestScore(score);
    }
    const theBiggestInArray = getTheBiggestFromArray(gameArray, theBiggest);
    if (theBiggest !== theBiggestInArray) {
      setTheBiggest(theBiggestInArray);
      if (theBiggest >= 128) {
        setNewMilestone(true);
      }
    }
    if (checkIfGameOver(gameArray) === true) {
      setGameStarted(false);
      deleteData();
      setGameOver(true);
    }
  }

  function swipeDown() {
    const { array, fullScore } = onSwipeDown(gameArray);
    const newScore = fullScore + score;
    setGameArray(array);
    setGameStarted(true);
    setScore(newScore);
    if (theHigestScore < score) {
      setTheHigestScore(score);
    }
    const theBiggestInArray = getTheBiggestFromArray(gameArray, theBiggest);
    if (theBiggest !== theBiggestInArray) {
      setTheBiggest(theBiggestInArray);
      if (theBiggest >= 128) {
        setNewMilestone(true);
      }
    }
    if (checkIfGameOver(gameArray) === true) {
      deleteData();
      setGameStarted(false);
      setGameOver(true);
    }
  }

  function swipeLeft() {
    const { array, fullScore } = onSwipeLeft(gameArray);
    const newScore = fullScore + score;
    setGameArray(array);
    setGameStarted(true);
    setScore(newScore);
    if (theHigestScore < score) {
      setTheHigestScore(score);
    }
    const theBiggestInArray = getTheBiggestFromArray(gameArray, theBiggest);
    if (theBiggest !== theBiggestInArray) {
      setTheBiggest(theBiggestInArray);
      if (theBiggest >= 128) {
        setNewMilestone(true);
      }
    }
    if (checkIfGameOver(gameArray) === true) {
      deleteData();
      setGameStarted(false);
      setGameOver(true);
    }
  }

  function swipeRight() {
    const { array, fullScore } = onSwipeRight(gameArray);
    const newScore = fullScore + score;
    setGameArray(array);
    setGameStarted(true);
    setScore(newScore);
    if (theHigestScore < score) {
      setTheHigestScore(score);
    }
    const theBiggestInArray = getTheBiggestFromArray(gameArray, theBiggest);
    if (theBiggest !== theBiggestInArray) {
      setTheBiggest(theBiggestInArray);
      if (theBiggest >= 128) {
        setNewMilestone(true);
      }
    }
    if (checkIfGameOver(gameArray) === true) {
      setGameStarted(false);
      setGameOver(true);
      deleteData();
    }
  }

  const config = {
    velocityThreshold: 0.4,
    directionalOffsetThreshold: 100,
  };

  return (
    <View style={styled.gameScreen}>
      {gameOver ? (
       <GameOverComponent {...props} score={score} />
      ) : (
                <Text></Text>
      )}
      {newMilestone ? (
        <NewMilestoneComponent
        {...props}
        setNewMilestone={setNewMilestone}
        theBiggest={theBiggest}
      />
      ) : (
        
        <Text></Text>
      )}
      <GestureRecognizer
        onSwipeUp={swipeUp}
        onSwipeDown={swipeDown}
        onSwipeLeft={swipeLeft}
        onSwipeRight={swipeRight}
        config={config}
        style={styled.swipeStyle}
      >
      
        <View
          style={{
            // borderWidth: 4,
            // borderColor: "orange",
            borderRadius: 0,
          }}
        >
          <View style={styled.head}>
            <View style={styled.scoreBox}>
              <Text style={styled.scoreBoxText}>Score</Text>
              <Text
                style={{ fontSize: 21, fontWeight: "bold", color: "#406CE1" }}
              >
                {score}
              </Text>
            </View>
            {/* logo */}
            <View
              style={{
                backgroundColor: "#406CE1",
                borderRadius: 80,
                height: 80,
                width: 80,
                margin: 5,
                // borderColor: "#614242",
                // borderWidth: 2,
                elevation: 6,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 27,
                  fontWeight: "bold",
                  // borderWidth: 5,
                  // borderColor: "white",
                  borderRadius: 100,
                  alignSelf: "center",
                  color: "white",
                }}
              >
                2048
              </Text>
            </View>

            <View style={styled.scoreBox}>
              <Text style={styled.scoreBoxText}>High Score</Text>
              <Text
                style={{ fontSize: 21, fontWeight: "bold", color: "#E8C234" }}
              >
                {theHigestScore}
              </Text>
            </View>
          </View>

                </View>
        <Text style={styled.noteBox}>Join numbers to make 2048 title!</Text>

        <GameComponent gameArray={gameArray} size={size} variant={variant} />
        <View
          style={{
            flex: 1,
            marginTop: 75,
            // borderColor: "red",
            // borderWidth: 5,
            // height: "",
            // width: "100%",
          }}
        >
          <GameAds />
        </View>
      </GestureRecognizer>
    </View>
  );
}

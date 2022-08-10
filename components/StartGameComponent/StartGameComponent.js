import "react-native-gesture-handler";

import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
// import { AsyncStorage } from "react-native";
import { LEFT_BUTTON } from "../../constants/buttons/leftButton";
import { RIGHT_BUTTON } from "../../constants/buttons/rightButton";
import { styled } from "./style";
import { GameComponent } from "../GameComponent/GameComponent";
import { DisplaySizeComp } from "../DisplaySizeComp/DisplaySizeComp";
import { UnMatchedSizeComponent } from "../UnMatchedSizeComponent/UnmatchedSizeComponent";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { GameAds } from "../AdsManagement/GameAds";

export function StartGameComponent(props) {
  const {
    onLeftButtonClick,
    onRightButtonClick,
    displaySize,
    navigation,
    gameStarted,
    generateNew,
    imageSourse,
    gameArray,
    size,
    setSize,
  } = props;
  const variant = "small";
  function generateNewArray() {
    generateNew();
    navigation.navigate("Game");
  }

  return (
    <View style={styled.container}>
      <View style={styled.contentBox}>
        <View style={{ height: 345 }}>
          <DisplaySizeComp
            navigation={navigation}
            gameArray={gameArray}
            displaySize={displaySize}
            variant={variant}
            size={size}
            generateNew={generateNew}
            setSize={setSize}
          />
        </View>
        {/* <View>
          <UnMatchedSizeComponent
            navigation={navigation}
            gameArray={gameArray}
            displaySize={displaySize}
            variant={variant}
            size={size}
            generateNew={generateNew}
            setSize={setSize}
          />
        </View> */}
        {/* <View
          style={{
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <View
            style={{
              marginHorizontal: 10,
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons name="circle-box" size={50} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginHorizontal: 10,
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons name="circle-box" size={50} />
            </TouchableOpacity>
          </View>
        </View> */}
        {gameStarted ? (
          <View>
            {/* for play button */}
            <TouchableOpacity
              onPress={() => {
                generateNewArray();
              }}
            >
              <View style={{ alignSelf: "center", marginTop: 20 }}>
                <AntDesign name="play" size={65} color="#614242" />
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              generateNewArray();
            }}
          >
            <View style={{ alignSelf: "center", marginTop: 20 }}>
              <AntDesign name="play" size={65} color="#614242" />
            </View>
          </TouchableOpacity>
        )}
        <View style={{ flex: 1, justifyContent: "flex-end", marginTop: 120 }}>
          <GameAds />
        </View>
      </View>
    </View>
  );
}

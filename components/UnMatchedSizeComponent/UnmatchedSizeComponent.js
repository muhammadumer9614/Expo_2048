import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SIZE_TITLES } from "../../constants/titles";

export const UnMatchedSizeComponent = (props) => {
  const [id, setId] = useState("");
  const { navigation, displaySize, generateNew, setSize, size } = props;
  // function generateNewArray() {
  //   generateNew();
  //   navigation.navigate("Game");
  // }
  function set_Size(n) {
    setSize(n);
    setId(n);
  }
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 10 }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderRadius: 32,
              //   borderWidth: size === 4 ? 2 : 0,
              elevation: 5,
            }}
          >
            <Image
              style={{
                height: 130,
                width: 130,
                borderRadius: 30,
                // borderWidth: size === 4 ? 2 : 0,
              }}
              source={require("../../photos/4X4.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              alignSelf: "center",
              color: "#614242",
            }}
          >
            3 X 5
          </Text>
        </View>
        <View style={{ margin: 10 }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderRadius: 32,
              //  borderWidth: size === 5 ? 2 : 0
            }}
          >
            <Image
              style={{ height: 130, width: 130, borderRadius: 30 }}
              source={require("../../photos/5X5.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              alignSelf: "center",
              color: "#614242",
            }}
          >
            4 X 6
          </Text>
        </View>
      </View>

      {/* 2nd row */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 10 }}>
          <TouchableOpacity
            onPress={() => set_Size(6)}
            style={{
              borderRadius: 32,
              //  borderWidth: size === 6 ? 2 : 0
            }}
          >
            <Image
              style={{
                height: 130,
                width: 130,
                borderRadius: 30,
              }}
              source={require("../../photos/6X6.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              alignSelf: "center",
              color: "#614242",
            }}
          >
            5 X 8
          </Text>
        </View>
        <View style={{ margin: 10 }}>
          <TouchableOpacity
            onPress={() => set_Size(8)}
            style={{ borderRadius: 32, borderWidth: size === 8 ? 2 : 0 }}
          >
            <Image
              style={{
                height: 130,
                width: 130,
                borderRadius: 30,
                borderWidth: size === 8 ? 2 : 0,
              }}
              source={require("../../photos/8X8.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              alignSelf: "center",
              color: "#614242",
            }}
          >
            6 X 9
          </Text>
        </View>
      </View>
    </View>
  );
};

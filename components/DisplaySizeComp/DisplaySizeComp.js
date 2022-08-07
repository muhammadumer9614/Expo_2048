import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SIZE_TITLES } from "../../constants/titles";

export const DisplaySizeComp = (props) => {
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
            onPress={() => set_Size(4)}
            style={{
              borderRadius: 32,
              borderWidth: size === 4 ? 2 : 0,
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
            {SIZE_TITLES[1]}
          </Text>
        </View>
        <View style={{ margin: 10 }}>
          <TouchableOpacity
            onPress={() => set_Size(5)}
            style={{ borderRadius: 32, borderWidth: size === 5 ? 2 : 0 }}
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
            {SIZE_TITLES[2]}
          </Text>
        </View>
      </View>

      {/* 2nd row */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 10 }}>
          <TouchableOpacity
            onPress={() => set_Size(6)}
            style={{ borderRadius: 32, borderWidth: size === 6 ? 2 : 0 }}
          >
            <Image
              style={{
                height: 130,
                width: 130,
                borderRadius: 30,
                // borderWidth: size === 8 ? 2 : 0,
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
            {SIZE_TITLES[3]}
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
            {SIZE_TITLES[4]}
          </Text>
        </View>
      </View>

      {/* <View style={{ flexDirection: "row", marginTop: 30 }}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={{ height: 130, width: 130, borderRadius: 30 }}
              source={require("../../photos/5X5.png")}
            />
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#614242" }}
            >
              {SIZE_TITLES[2]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ height: 130, width: 130, borderRadius: 30 }}
              source={require("../../photos/6X6.png")}
            />
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#614242" }}
            >
              {SIZE_TITLES[3]}
            </Text>
          </TouchableOpacity>
        </View> */}
      {/* <View style={{ flexDirection: "row", marginTop: 30 }}>
          <TouchableOpacity>
            <Image
              style={{ height: 130, width: 130, marginRight: 30 }}
              source={require("../../photos/5X5.png")}
            />
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#614242" }}
            >
              {SIZE_TITLES[4]}
            </Text>
          </TouchableOpacity>
        </View> */}
    </View>
  );
};

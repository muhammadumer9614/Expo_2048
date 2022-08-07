import { View, Text, Platform, Button } from "react-native";
import React, { useEffect } from "react";
import { AdMobRewarded, AdMobInterstitial, AdMobBanner } from "expo-ads-admob";

export const GameAds = () => {
  // AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1458002511");

  // useEffect(()=>{
  //     AdMobInterstitial.requestAdAsync
  // })

  let adUnitId = Platform.select({
    ios: "ca-app-pub-3940256099942544/1458002511",
    android: "ca-app-pub-3940256099942544/1458002511",
  });
  // useEffect(() => {
  //   AdMobInterstitial.setAdUnitID("ca-app-pub3940256099942544/1033173712");
  // }, []);
  // let loadAd = async () => {
  // AdMobInterstitial.setAdUnitID("ca-app-pub3940256099942544/1033173712");
  // AdMobInterstitial.showAd();

  // AdMobInterstitial.showAdAsync()
  // await AdMobRewarded.setAdUnitID(adUnitId);
  // await AdMobRewarded.requestAdAsync();
  // };
  //   AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", (reward) => {
  //     console.log("reward is : ", reward);
  //   });
  // loadAd();

  return (
    <View style={{ flex: 1 }}>
      {/* <Button
        title="Ads"
        onPress={() => {
          AdMobRewarded.showAdAsync();
        }}
      /> */}

      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-5836228569391299/8030636754" // Test ID, Replace with your-admob-unit-id
        onDidFailToReceiveAdWithError={(error) => console.error(error)}
      />
    </View>
  );
};

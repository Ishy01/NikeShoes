import { View, Text, Image } from "react-native";
import React from "react";
import SlidingImages from "../components/Swiper";
import Sort from "../components/Sort";

export default function HomePage() {
  return (
    <>
      <View className="px-3 pt-2 flex-row items-center justify-between ">
        <View className="flex-row items-center">
          <View className="mr-5">
            <Image source={require("../assets/fi-rr-align-left.png")} />
          </View>
          <Image source={require("../assets/Nike-logo.png")} />
        </View>
        <Image source={require("../assets/fi-rr-shopping-bag.png")} />
      </View>
      <View>
        <SlidingImages />
      </View>
      <View>
        <Sort />
      </View>
    </>
  );
}

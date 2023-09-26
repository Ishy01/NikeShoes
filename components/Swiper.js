import React from "react";
import { View, Text, Image } from "react-native";
import Swiper from "react-native-swiper";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const images = [
  require("../assets/Green.png"),
  require("../assets/BlueRed.png"),
  require("../assets/Yellow.png"),
  require("../assets/White.png"),
];

export default function SlidingImages() {
  return (
    <View className="mx-3 mt-4" style={{height: hp(26)}}>
      <Swiper
        showsButtons={false}
        autoplay={true}
        loop={true}
        dotStyle={{
          className: "bg-gray-500 bg-opacity-20 w-8 h-8 rounded-md mt-3 mx-2",
        }}
        activeDotStyle={{
          className: "bg-gray-500 bg-opacity-60 w-8 h-8 rounded-md mt-3 mx-2",
        }}
        paginationStyle={{ bottom: 10 }}
      >
        {images.map((image, index) => (
          <View
            key={index}
            className="bg-slate-200 items-center flex-row rounded-2xl"
            style={{height: hp(22)}}
          >
            <View className="ml-6">
              <View className="mb-6">
                <View className="flex-row items-baseline">
                  <Text className="text-4xl font-bold">20% </Text>
                  <Text className="text-2xl font-bold">Discount</Text>
                </View>
                <Text className="text-lg">on your first purchase</Text>
              </View>
              <View className="rounded-full bg-black p-2 mr-10">
                <Text className="text-white text-center text-lg">Shop now</Text>
              </View>
            </View>
            <View className="absolute left-32">
              <Image source={image} style={{height: hp(25), width: wp(60)}} />
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
}
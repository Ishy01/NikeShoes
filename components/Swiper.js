import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const images = [
  require("../assets/Green.png"),
  require("../assets/BlueRed.png"),
  require("../assets/Yellow.png"),
];

export default function SlidingImages() {
  return (
    <View style={styles.wrapper}>
      <Swiper
        showsButtons={false}
        autoplay={true}
        loop={true}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        paginationStyle={{ bottom: 5 }}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <View className="ml-6">
              <View className="mb-6">
                <View className="flex-row items-baseline">
                  <Text className="text-4xl font-bold">20% </Text>
                  <Text className="text-2xl font-bold">Discount</Text>
                </View>
                <Text className="text-lg">on your first purchase</Text>
              </View>
              <View className="rounded-full bg-black p-2">
                <Text className="text-white text-center text-lg">Shop now</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image source={image} style={styles.image} />
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    marginHorizontal: 10,
    marginTop: 15,
    // paddingHorizontal: 10,
    // overflow: "visible",
  },
  slide: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "silver",
    height: 160,
    borderRadius: 20,
    overflow: "visible",
  },
  imageContainer: {
    position: "absolute",
    right: -4,
  },
  image: {
    width: 200,
    height: 200,
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 3,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: "rgba(0,0,0,.6)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 3,
    marginHorizontal: 2,
  },
});

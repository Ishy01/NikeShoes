import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { shoeInfo } from "../constants";

export default function ShoeInfo() {
  return (
      <View className="mx-3 mt-2 flex-row justify-between flex-wrap">
        {shoeInfo.map((info, index) => {
          return (
            <View key={index} className="bg-slate-200 px-1 mb-7 rounded-2xl">
              <Image source={info.image} style={{ height: 150, width: 150 }} />
              <View className="flex-row px-2 pb-3 items-center justify-between">
                <View>
                  <Text className="text-lg font-bold">{info.title}</Text>
                  <Text className="text-base font-medium">{info.price}</Text>
                </View>
                <View className="bg-white p-1 rounded-lg">
                  <AntDesign name="arrowright" size={24} color="black" />
                </View>
              </View>
            </View>
          );
        })}
      </View>    
  );
}

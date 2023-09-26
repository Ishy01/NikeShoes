import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const sortSneakers = ["All", "Running", "Sneakers", "Formal"];

export default function Sort() {
  const [activeSort, setActiveSort] = useState("All");

  return (
    <View className="flex-row px-3 py-1 justify-between">
      {sortSneakers.map((sort, index) => {
        let isActive = sort == activeSort;
        let activeButton = isActive ? "bg-black text-white" : "";
        let activeText = isActive ? "text-white" : "";
        return (
          <TouchableOpacity
            onPress={() => setActiveSort(sort)}
            key={index}
            className={`py-2 px-3 rounded-full ${activeButton}`}
          >
            <Text className={`text-lg text-center ${activeText}`}>{sort}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

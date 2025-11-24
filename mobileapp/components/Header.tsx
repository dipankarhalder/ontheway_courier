import React from "react";
import { View, Text } from "react-native";
import { User } from "../constant/icon";

export default function Header() {
  return (
    <View className="w-full flex-col mb-3 pt-3 px-5">
      <View className="flex-row w-full justify-between">
        <View className="flex-row gap-3 items-center">
          <User color={"#7d8998ff"} />
          <Text className="text-[16px] font-nunitosans-extrabold text-gray-400 mt-[1px]">
            Hello, Dipankar
          </Text>
        </View>
      </View>
    </View>
  );
}

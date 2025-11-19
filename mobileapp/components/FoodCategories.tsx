import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { foodCategories } from "../constant/static";

export default function FoodItemCategories() {
  return (
    <View className="w-full flex-col mb-[30px]">
      <FlatList
        horizontal
        data={foodCategories}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const { id, title, imgUrl } = item;
          return (
            <View
              className="w-[76px] mr-3 flex-col items-center gap-1"
              key={id}
            >
              <Image source={imgUrl} className="w-[60px] h-[60px]" />
              <Text className="text-[13px] text-black font-nunitosans-semibold">
                {title}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

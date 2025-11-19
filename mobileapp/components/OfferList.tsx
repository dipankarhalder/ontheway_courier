import React from "react";
import { View, Text, FlatList } from "react-native";
import { offerList } from "../constant/static";
import { LinearGradient } from "expo-linear-gradient";

export default function OfferList() {
  return (
    <View className="w-full flex-col mb-[40px]">
      <FlatList
        horizontal
        data={offerList}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const { id, title, topColor, bottomColor } = item;
          return (
            <View className="w-[140px] mr-4 flex-col" key={id}>
              <View className="w-full h-[140px] py-2 px-0 relative flex-col justify-center items-center">
                <Text className="text-[14px] text-white uppercase font-nunitosans-semibold z-[1]">
                  Min
                </Text>
                <Text
                  className="text-[40px] text-white pr-2 font-nunitosans-extrabold z-[1]"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {title}
                </Text>
                <Text className="text-[20px] text-white uppercase font-nunitosans-semibold z-[1]">
                  Off
                </Text>
                <LinearGradient
                  colors={[topColor, bottomColor]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 140,
                    zIndex: 0,
                    borderRadius: 8,
                  }}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

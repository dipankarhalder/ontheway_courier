import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { productList } from "../constant/static";
import { Star } from "../constant/icon";

export default function Recommended() {
  return (
    <View className="w-full flex-col mb-[30px]">
      <View className="w-full mb-3">
        <Text className="text-[12px] uppercase text-gray-400 font-nunitosans-bold">
          Recommended for you
        </Text>
      </View>
      <FlatList
        horizontal
        data={productList}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const { id, title, imgUrl, price, rating } = item;
          return (
            <View className="w-[140px] mr-4 flex-col rounded-[10px]" key={id}>
              <View className="w-full overflow-hidden rounded-[10px] relative">
                <Image source={imgUrl} className="w-full h-[90px]" />
              </View>
              <View className="w-full py-2 px-0 relative">
                <View
                  className={`absolute top-[-27px] right-[2px] flex-row items-center justify-center gap-[6px] border border-white border-[2px] px-[8px] py-[2px] rounded-[8px] ${rating > 3.8 ? "bg-green-800" : rating > 2.8 ? "bg-green-600" : "bg-[#ff8d08]"}`}
                >
                  <Star color={"#ffffff"} size={10} />
                  <Text className="text-[12px] text-black font-nunitosans-bold text-white">
                    {rating}
                  </Text>
                </View>
                <Text
                  className="text-[13px] text-black pr-2 font-nunitosans-semibold mb-1"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {title}
                </Text>
                <Text className="text-[14px] text-black font-nunitosans-bold mr-4">
                  ₹ {price} /-
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

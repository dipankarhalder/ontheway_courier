import React from "react";
import { View, Text, Image } from "react-native";
import { productListNew } from "../constant/static";
import { Star, Tringle, Circle1 } from "../constant/icon";
import AddToCartButton from "../components/AddToCartButton";

export default function FeatureProducts() {
  const handleCountChange = (count: number) => {
    console.log("Cart count:", count);
  };

  return (
    <View className="w-full flex-col mb-[24px]">
      <View className="w-full mb-3">
        <Text className="text-[12px] uppercase text-gray-400 font-nunitosans-bold">
          Features
        </Text>
      </View>
      <View className="flex-row flex-wrap w-full gap-5">
        {productListNew.map((item) => (
          <View
            className="w-full flex-row bg-white border-b border-gray-100 pb-9"
            key={item.id}
          >
            <View className="w-[67%] relative">
              <View className="flex-row items-center gap-2 mb-2">
                <View
                  className={`flex items-center justify-center w-[15px] h-[15px] border rounded ${item.type === "veg" ? "border-green-700" : "border-yellow-700"}`}
                >
                  {item.type === "veg" ? (
                    <Circle1 color={"#008236"} size={10} />
                  ) : (
                    <Tringle color={"#a65f00"} size={10} />
                  )}
                </View>
                {item.bestseller && (
                  <Text className="bg-orange-100 text-orange-800 font-nunitosans-semibold py-[1px] px-[5px] text-[11px] rounded">
                    Bestseller
                  </Text>
                )}
              </View>
              <Text className="text-[15px] text-black font-nunitosans-bold mb-1 pr-[20px] leading-tight">
                {item.title}
              </Text>
              <View className="flex-row mb-3">
                <View className="flex-row items-center justify-center gap-[5px]">
                  <View
                    className={`flex items-center justify-center w-[18px] h-[18px] rounded-full ${item.rating > 3.8 ? "bg-green-800" : item.rating > 2.8 ? "bg-green-600" : "bg-[#ff8d08]"}`}
                  >
                    <Star color={"#ffffff"} size={10} />
                  </View>
                  <Text className="text-[12px] text-black font-nunitosans-bold">
                    {item.rating}{" "}
                    <Text className="text-gray-400 font-nunitosans-semibold">
                      ({item.rateUser} rating)
                    </Text>
                  </Text>
                </View>
              </View>
              <View className="flex-row mb-3">
                <Text className="text-[13px] text-black font-nunitosans-bold">
                  ₹ {item.price} /-
                </Text>
                <Text className="text-[13px] text-gray-400 font-nunitosans-semibold ml-3 line-through">
                  ₹ {Number(item.price) - 30} /-
                </Text>
              </View>
              <View className="flex-row">
                <Text className="text-[12px] text-gray-500 font-nunitosans-medium leading-tight">
                  {item.desc.length > 120
                    ? item.desc.slice(0, 70) + "..."
                    : item.desc}
                </Text>
              </View>
            </View>
            <View className="w-[130px] relative">
              <Image
                source={item.imgUrl}
                className="w-full h-[130px] w-[130px] rounded-[10px]"
              />
              <AddToCartButton onChange={handleCountChange} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

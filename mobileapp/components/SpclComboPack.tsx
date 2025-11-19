import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
} from "react-native";

const comboBanners = [
  require("../assets/images/combo1.jpeg"),
  require("../assets/images/combo2.jpg"),
  require("../assets/images/combo3.jpg"),
];
const { width: screenWidth } = Dimensions.get("window");

export default function SpclComboPack() {
  const sliderRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const interval = setInterval(() => {
      if (!isMounted) return;
      const nextIndex = (currentIndex + 1) % comboBanners.length;
      setCurrentIndex(nextIndex);
      sliderRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 3000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <View className="flex w-full mb-[20px]">
      <View className="w-full mb-3">
        <Text className="text-[12px] uppercase text-gray-400 font-nunitosans-bold">
          Special Combo Packages
        </Text>
      </View>
      <View className="w-full rounded-[10px] overflow-hidden">
        <FlatList
          ref={sliderRef}
          data={comboBanners}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <ImageBackground
              source={item}
              resizeMode="cover"
              style={{
                width: screenWidth,
                height: 340,
                justifyContent: "center",
              }}
            />
          )}
          getItemLayout={(_, index) => ({
            length: screenWidth,
            offset: screenWidth * index,
            index,
          })}
          initialScrollIndex={currentIndex}
        />
      </View>
      <View className="flex-row justify-center mt-2">
        {comboBanners.map((_, i) => (
          <View
            key={i}
            className={`w-2 h-2 mx-1 rounded-full ${i === currentIndex ? "bg-[#ff8d08]" : "bg-gray-300"}`}
          />
        ))}
      </View>
    </View>
  );
}

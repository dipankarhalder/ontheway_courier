import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { Next } from "../constant/icon";
import {
  main_splash_screen_logo,
  sp_banner_1,
  sp_banner_2,
  sp_banner_3,
} from "../constant/static";
import { pathItem } from "../constant/routes";

const { width, height } = Dimensions.get("window");
const slides = [
  {
    id: 1,
    text: "Easily track your package",
    desc: "Getting every location updates from our ends",
    img: sp_banner_1,
    bg: "#fdd2a8",
    color: "#f36404",
  },
  {
    id: 2,
    text: "Fast delivery in your area",
    desc: "Your package will come right to your door as soon as possible.",
    img: sp_banner_3,
    bg: "#ffe89c",
    color: "#e1ad01",
  },
  {
    id: 3,
    text: "Delivering your package carefully",
    desc: "We care about your package as you do.",
    img: sp_banner_2,
    bg: "#8bcbfb",
    color: "#0784de",
  },
];

export default function Index() {
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      scrollRef.current?.scrollTo({
        x: width * (activeIndex + 1),
        animated: true,
      });
    } else {
      router.replace(pathItem.login as any);
    }
  };

  return (
    <View className="flex-1 relative">
      <View className="absolute top-[120px] left-0 z-[2] w-full flex items-center">
        <Image
          source={main_splash_screen_logo}
          className="w-[190px] h-[72px]"
        />
      </View>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide) => (
          <View
            key={slide.id}
            style={{ width, height }}
            className="flex-col justify-center pt-2"
          >
            <View className="flex-col w-full h-[auto] flex items-center">
              <Image
                source={slide.img}
                resizeMode="contain"
                style={{ width: 300, height: height * 0.4 }}
              />
            </View>
            <Text className="text-[#0784de] text-2xl font-nunitosans-bold text-center mt-[-40px] px-10">
              {slide.text}
            </Text>
            <Text className="text-black text-[16px] font-nunitosans-semibold text-center mt-[4px] px-[50px]">
              {slide.desc}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View className="absolute bottom-[60px] w-full flex-row justify-center">
        <Pressable
          onPress={handleNext}
          style={{ backgroundColor: slides[activeIndex].color }}
          className="w-[50px] h-[50px] rounded-full p-[10px] flex items-center justify-center"
        >
          <Text className="text-white text-2xl font-nunitosans-semibold">
            <Next />
          </Text>
        </Pressable>
      </View>
      <View className="absolute bottom-[180px] w-full flex-row justify-center items-center gap-2.5">
        {slides.map((_, i) => (
          <View
            key={i}
            style={{
              width: activeIndex === i ? 13 : 10,
              height: activeIndex === i ? 13 : 10,
              borderRadius: 6,
              backgroundColor: activeIndex === i ? "white" : "gray",
            }}
          />
        ))}
      </View>
    </View>
  );
}

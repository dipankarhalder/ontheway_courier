import { useState, useRef } from "react";
import {
  View,
  Text,
  Platform,
  TextInput,
  Animated,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainBanner, footer_heart } from "../../constant/static";
import { Phone } from "../../constant/icon";
import Header from "../../components/Header";
import FoodItemCategories from "../../components/FoodCategories";
import Recommended from "../../components/Recommended";
import SpclComboPack from "../../components/SpclComboPack";
import OfferList from "../../components/OfferList";
import FeatureProducts from "../../components/FeatureProducts";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 356],
    outputRange: [530, 172],
    extrapolate: "clamp",
  });

  const bgImageOpacity = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [0.9, 0],
    extrapolate: "clamp",
  });

  const bgColorChange = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: ["#000000", "#ff8d08"],
    extrapolate: "clamp",
  });

  return (
    <View className="flex-1 bg-white">
      <Animated.View
        style={{
          height: headerHeight,
          width: "100%",
          backgroundColor: "#000000",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          zIndex: 10,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
      >
        <SafeAreaView className="w-full flex-col rounded-[20px] z-[3]">
          <Header />
          <View className="flex px-5">
            <View
              className={`flex-row items-center border border-white bg-white rounded-[10px] gap-4 px-4 mb-0 ${
                Platform.OS === "ios" ? "h-[44px]" : "h-[48px]"
              }`}
            >
              <Phone />
              <TextInput
                value={searchInput}
                placeholder="Search here..."
                onChangeText={(text) => setSearchInput(text)}
                className="text-black flex-1 font-nunitosans-semibold text-[16px]"
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </SafeAreaView>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: 536,
            backgroundColor: bgColorChange,
            zIndex: 0,
          }}
        />
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: 536,
            zIndex: 1,
            opacity: bgImageOpacity,
          }}
        >
          <ImageBackground
            source={mainBanner}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 556, paddingBottom: 0 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled"
      >
        <LinearGradient
          colors={["#ffffff", "rgba(255, 255, 255, 0)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 340,
            zIndex: -1,
          }}
        />
        <View className="flex-col px-5">
          <FoodItemCategories />
          <Recommended />
          <SpclComboPack />
          <OfferList />
          <FeatureProducts />
        </View>
        <View className="flex-col w-full bg-gray-100 px-5 pt-[100px] pb-[120px]">
          <Text className="text-[40px] text-gray-400 font-nunitosans-extrabold leading-tight">
            Our Foods, Our
          </Text>
          <Text className="text-[90px] text-gray-400 font-nunitosans-extrabold leading-tight mt-[-16px]">
            Identity
          </Text>
          <View className="flex-row w-full gap-2 items-center mt-[20px]">
            <Image source={footer_heart} className="h-[40px] w-[40px]" />
            <Text className="text-[26px] text-gray-400 font-nunitosans-bold leading-tight">
              thanks for searching us.
            </Text>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

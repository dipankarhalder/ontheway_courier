import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  searchListItems,
  packages,
  expt_ic_bg_black,
  expt_ic2_bg_black,
  expt_ic_car,
  expt_ic_auto,
} from "../../constant/static";
import { SearchIc, TimerSrch } from "../../constant/icon";
import { pathItem } from "../../constant/routes";

const screenWidth = Dimensions.get("window").width;
const itemWidth = (screenWidth - 56) / 4;

export default function Home() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <View className="flex">
        <SafeAreaView
          edges={["top"]}
          className="w-full flex-col z-[3] bg-white py-[14px] border-b border-gray-300"
        >
          <View className="flex-col w-full px-5">
            <TouchableOpacity
              className={`flex-row w-full items-center border border-gray-100 bg-gray-100 rounded-[10px] gap-[10px] px-4 mb-0 h-[46px]`}
              onPress={() => router.push(pathItem.search as any)}
            >
              <SearchIc size={20} />
              <Text className="text-black flex-1 font-nunitosans-bold text-[14px]">
                Where are you going?
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 0, paddingBottom: 0 }}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-col w-full gap-3 mb-[24px] bg-blue-50 py-[16px] px-5">
          {searchListItems.map((item) => (
            <View key={item.id} className="flex-row gap-3 pb-2 items-start">
              <View className="w-[14px] mt-[3px]">
                <TimerSrch size={14} />
              </View>
              <View className="flex-1">
                <Text className="text-black font-nunitosans-bold text-[13px]">
                  {item.title}
                </Text>
                <Text
                  className="text-gray-500 font-nunitosans-semibold text-[12px]"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.desc}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View className="flex-col px-5">
          <View className="w-full mb-3">
            <Text className="text-[14px] text-gray-500 font-nunitosans-bold">
              Your Daily Friends
            </Text>
          </View>
          <View className="flex-row flex-wrap w-full gap-2 mb-10">
            <View
              style={{ width: itemWidth }}
              className="flex-col items-center justify-center gap-1"
            >
              <View className="bg-blue-50 px-4 py-3 rounded-md w-full flex items-center justify-center">
                <Image source={expt_ic_auto} className="h-[46px] w-[46px]" />
              </View>
              <Text className="text-[12px] text-gray-800 font-nunitosans-bold">
                Auto
              </Text>
            </View>
            <View
              style={{ width: itemWidth }}
              className="flex-col items-center justify-center gap-1"
            >
              <View className="bg-blue-50 px-4 py-3 rounded-md w-full flex items-center justify-center">
                <Image
                  source={expt_ic_bg_black}
                  className="h-[46px] w-[46px]"
                />
              </View>
              <Text className="text-[12px] text-gray-800 font-nunitosans-bold">
                Bike
              </Text>
            </View>
            <View
              style={{ width: itemWidth }}
              className="flex-col items-center justify-center gap-1"
            >
              <View className="bg-blue-50 px-4 py-3 rounded-md w-full flex items-center justify-center">
                <Image source={expt_ic_car} className="h-[46px] w-[46px]" />
              </View>
              <Text className="text-[12px] text-gray-800 font-nunitosans-bold">
                Car
              </Text>
            </View>
            <View
              style={{ width: itemWidth }}
              className="flex-col items-center justify-center gap-1"
            >
              <View className="bg-blue-50 px-4 py-3 rounded-md w-full flex items-center justify-center">
                <Image
                  source={expt_ic2_bg_black}
                  className="h-[46px] w-[46px]"
                />
              </View>
              <Text className="text-[12px] text-gray-800 font-nunitosans-bold">
                Premium
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-col px-5">
          <View className="w-full mb-3">
            <Text className="text-[14px] text-gray-500 font-nunitosans-bold">
              Rider near to you
            </Text>
          </View>
          <View className="flex-col flex-wrap w-full gap-2 mb-10">
            {[1, 2, 3].map((item) => (
              <View
                key={item}
                className="bg-white flex-row items-center px-4 py-3 gap-4 rounded-md border border-gray-300"
              >
                <View>
                  <Image
                    source={item % 2 === 0 ? expt_ic_auto : expt_ic_bg_black}
                    className="h-[46px] w-[46px]"
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-black font-nunitosans-bold text-[14px]">
                    KA 01-236765
                  </Text>
                  <Text className="text-gray-500 font-nunitosans-semibold text-[12px]">
                    256, EN34, Asist Park, Webel More, Sector V, Pin - 200345
                  </Text>
                  <Text className="text-gray-800 font-nunitosans-bold text-[12px] mt-[6px]">
                    5 min away
                  </Text>
                </View>
                <View className="w-[60px] flex items-end">
                  <TouchableOpacity
                    className={`flex-row items-center justify-center rounded-[5px] gap-[10px] px-2 mb-0 h-[32px]`}
                    onPress={() => router.push(pathItem.search as any)}
                  >
                    <Text className="text-black flex-1 font-nunitosans-bold text-[13px] text-center underline">
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View className="flex-col px-5">
          <View className="w-full mb-3">
            <Text className="text-[14px] text-gray-500 font-nunitosans-bold">
              Delivered Packages
            </Text>
          </View>
          <View className="flex-col flex-wrap w-full gap-2 mb-10">
            {[1, 2, 3].map((item) => (
              <View
                key={item}
                className="bg-blue-50 flex-row items-center px-4 py-3 gap-4 rounded-md"
              >
                <View>
                  <Image source={packages} className="h-[40px] w-[40px]" />
                </View>
                <View className="flex-1">
                  <Text className="text-black font-nunitosans-bold text-[14px]">
                    Parcel - 2 wheeler
                  </Text>
                  <Text className="text-gray-500 font-nunitosans-semibold text-[12px] mb-[6px]">
                    Parcel delivery upto 50 kg
                  </Text>
                  <View className="flex-row gap-2 items-center">
                    <Text className="text-gray-700 font-nunitosans-bold text-[11px]">
                      5 min away
                    </Text>
                    <View className="w-[4px] h-[4px] rounded-full bg-gray-300"></View>
                    <Text className="text-gray-700 font-nunitosans-bold text-[11px]">
                      Drop 11:27 am
                    </Text>
                  </View>
                </View>
                <View className="w-[70px] flex items-end">
                  <Text className="text-black font-nunitosans-bold text-[14px]">
                    ₹ 134/-
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View className="flex-col w-full bg-gray-100 mt-[50px] px-5 pt-[60px] pb-[100px]">
          <Text className="text-[30px] text-gray-400 font-nunitosans-extrabold italic leading-tight mb-6">
            #onTheWay
          </Text>
          <Text className="text-[15px] text-gray-400 font-nunitosans-semibold leading-tight">
            🇮🇳 Made in India
          </Text>
          <Text className="text-[15px] text-gray-400 font-nunitosans-semibold">
            ♥️ Crafted in Kolkata
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

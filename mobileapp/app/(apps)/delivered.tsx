import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { expt_ic_bg_black, expt_ic_auto } from "../../constant/static";
import { SearchIc } from "../../constant/icon";
import { pathItem } from "../../constant/routes";

export default function Delivered() {
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
        <View className="flex-col px-5">
          <View className="w-full mb-3 pt-6">
            <Text className="text-[14px] text-gray-500 font-nunitosans-bold">
              Delivery Lists
            </Text>
          </View>
          <View className="flex-col flex-wrap w-full gap-2 mb-10">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <View
                key={item}
                className="flex-row items-center px-4 py-3 gap-4 rounded-md bg-blue-50"
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
                    <Text className="text-blue-700 flex-1 font-nunitosans-bold text-[13px] text-center underline">
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { packages } from "../../constant/static";
import { SearchIc } from "../../constant/icon";
import { pathItem } from "../../constant/routes";

export default function Parcels() {
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
              Delivered Packages
            </Text>
          </View>
          <View className="flex-col flex-wrap w-full gap-2 mb-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <View
                key={item}
                className="bg-blue-50 flex-row items-center px-4 py-3 gap-4 rounded-md"
              >
                <View>
                  <Image source={packages} className="h-[40px] w-[40px]" />
                </View>
                <View className="flex-1">
                  <Text className="text-black font-nunitosans-bold text-[14px]">
                    Parcel - {item} wheeler
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
      </ScrollView>
    </View>
  );
}

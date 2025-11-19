import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

interface AddToCartButtonProps {
  initialCount?: number;
  onChange?: (count: number) => void;
}

export default function AddToCartButton({
  initialCount = 1,
  onChange,
}: AddToCartButtonProps) {
  const [count, setCount] = useState<number>(0);

  const handleAddToCart = () => {
    setCount(initialCount);
    onChange?.(initialCount);
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange?.(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange?.(newCount);

    if (newCount <= 0) {
      setCount(0);
    }
  };

  return (
    <View className="absolute bottom-[-14px] w-[90px] left-[20px]">
      {count === 0 ? (
        <Pressable
          className="bg-orange-100 px-4 rounded-md border border-[#ff8d08]"
          onPress={handleAddToCart}
        >
          <Text className="text-[#ff8d08] leading-[32px] h-[32px] text-center font-nunitosans-bold uppercase">
            Add
          </Text>
        </Pressable>
      ) : (
        <View className="flex-row items-center justify-between space-x-4 bg-[#ff8d08] rounded-md">
          <Pressable onPress={handleDecrement}>
            <Text className="text-xl h-[34px] w-[34px] text-white font-nunitosans-bold text-center leading-[32px]">
              -
            </Text>
          </Pressable>
          <Text className="text-base font-nunitosans-bold text-white">
            {count}
          </Text>
          <Pressable onPress={handleIncrement}>
            <Text className="text-xl h-[34px] w-[34px] text-white font-nunitosans-bold text-center leading-[32px]">
              +
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

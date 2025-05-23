import { View, Text, Pressable } from "react-native";
import React, { ReactNode } from "react";
import { ChevronRight } from "lucide-react-native";

type CardProps = {
  image: ReactNode;
  name: string;
  notes: string;
  onPress?: () => void;
};

export default function Card({ image, name, notes, onPress }: CardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-[#1f1f1f]/35 border border-[#660708]/25 rounded-2xl w-[93%] self-center flex-row p-4 space-x-4 min-h-[160px] items-start"
    >
      <View className="mr-5 w-[45%] h-[140px] rounded-2xl bg-[#3A3A3A] items-center justify-center">
        {image}
      </View>
      <View className="flex-1 justify-start pt-1">
        <Text className="text-[#D3D3D3] text-3xl">{name}</Text>
        <Text className="text-[#D3D3D3] text-lg mt-1">{notes}</Text>
      </View>
      <View className="self-center">
        <ChevronRight color="#D3D3D3" size={20} />
      </View>
    </Pressable>
  );
}

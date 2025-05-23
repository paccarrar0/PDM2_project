import { Plus } from "lucide-react-native";
import { Pressable } from "react-native";

export default function FloatPlusButton() {
  return (
    <Pressable className="bg-[#A4161A] p-4 w-[60px] h-[60px] rounded-full items-center justify-center">
      <Plus color="#0B090A" size={42} />
    </Pressable>
  );
}

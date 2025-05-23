import FullScreen from "@/components/FullScreen";
import Header from "@/components/Header";
import { 
  View } from "react-native";
import Card from "./../components/Card";
import { Camera } from "lucide-react-native";
import FloatPlusButton from "@/components/FloatPlusButton";
import { ScrollView } from "react-native";

export default function index() {
  return (
    <FullScreen>
      <Header />
      <ScrollView className="mt-5">
        {/* future cards flat list */}
        <Card
          image={<Camera color="#B1A7A6" size={48} />}
          name="Name"
          notes="Notes"
          onPress={() => console.log("Card Pressed")}
        />
        <View className="items-end px-5 mt-4">
          <FloatPlusButton />
        </View>
      </ScrollView>
    </FullScreen>
  );
}

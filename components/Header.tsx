import { Image, Pressable } from "react-native";
import { Stack, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  const router = useRouter();

  return (
    <Stack.Screen
      options={{
        headerTitle: () => (
          <Image
            source={require('../assets/images/logo.png')}
            style={{ width: 190, height: 60}}
            resizeMode="contain"
          />
        ),
        headerStyle: {
          backgroundColor: '#0B090A',
        },
        headerRight: () => (
          <Pressable
            onPress={() => router.push('/profile')}
            style={{ marginRight: 15 }}
          >
            <MaterialIcons name="person" size={36} color="#fff"/>
          </Pressable>
        ),
      }}
    />
  );
}

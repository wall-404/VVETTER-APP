// app/(tabs)/_layout.js
import { Tabs } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
export default function AppLayout() {
    return (
        <Tabs>
        <Tabs.Screen
            name="home/index"
            options={{
                title: "Home",
                tabBarIcon: ({ color }) => (
                    <Ionicons
                        size={28}
                        style={{ marginBottom: -3 }}
                        name="home"
                        color={color}
                    />
                ),
            }}
        />

     
     <Tabs.Screen
     name="location/index"
     options={{
         title: "Location",
         tabBarIcon: ({ color }) => (
             <Ionicons
                 size={28}
                 style={{ marginBottom: -3 }}
                 name="pin"
                 color={color}
             />
         ),
     }}
 />


<Tabs.Screen
     name="settings/index"
     options={{
         title: "Settings",
         tabBarIcon: ({ color }) => (
             <Ionicons
                 size={28}
                 style={{ marginBottom: -3 }}
                 name="settings"
                 color={color}
             />
         ),
     }}
 />
</Tabs>


     
    )
}

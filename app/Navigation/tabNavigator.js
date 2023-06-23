import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePost from "../Screens/CreatePost";
import Feed from "../Screens/Feed";
import { NavigationContainer } from "@react-navigation/native";
import { color } from "react-native-reanimated";
import { Header } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator()

export default function TabNav (){
        return(
                <Tab.Navigator screenOptions={{headerShown:false, headerBackground: 'blue'}}>
                    <Tab.Screen component={Feed} name="Feed"/>
                    <Tab.Screen component={CreatePost} name="CreatePost"/>
                </Tab.Navigator>
        )
}
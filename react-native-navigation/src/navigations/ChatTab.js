import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatStackNavigator from "./ChatStack";
import { FriendScreen, SettingsScreen } from "../screens/ChatScreens";

const ChatTap = createBottomTabNavigator();

const ChatTapNavigator = () => {
    return (
        <ChatTap.Navigator>
            <ChatTap.Screen name="Friends" component={FriendScreen} />
            <ChatTap.Screen name="Chat" component={ChatStackNavigator} />
            <ChatTap.Screen name="Settings" component={SettingsScreen} />
        </ChatTap.Navigator>
    );
};

export default ChatTapNavigator;
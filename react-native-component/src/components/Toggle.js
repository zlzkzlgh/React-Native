import React, { useState,Fragment } from "react";
import { View, Text, Button } from "react-native";


const ToggleText = () => {
    
    const [toggle , setToggle] = useState(true);
    
    return (
        <View>
            <Button title="Toggle Text" onPress={() => setToggle(!toggle)} />
            {toggle && <Text>This text can be toggle</Text>}
        </View>
    )
}

export default ToggleText;
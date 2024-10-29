import React, { useState,Fragment } from "react";
import { View, Text } from "react-native";
import MyButton from "./MyComponent";

const Counter = () => {
    const [count, setCounter] = useState(0);

    return(
        <Fragment>
            <Text>{count}</Text>
            <MyButton title="+1" onPress={() => setCounter(count + 1)}/>
            <MyButton title="-1" onPress={() => setCounter(count - 1)}/>
        </Fragment>
    )
}

export default Counter;
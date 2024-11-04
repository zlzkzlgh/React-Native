import React,{useEffect,useRef,useState} from "react";
import { Text, View } from "react-native";
import Button from "./Button";

const Timer = () => {
    const[count,setCount] = useState(0);
    const timer = useRef(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            timer.current += 1;
            console.log("Timer :",timer.current);
        },1000);

        return () => clearInterval(interval);
    },[]);

    let num = 10;

    return (
        <View>
            <Text>
                Count : {count}
            </Text>
            <Text>
                localNum : {num}
            </Text>
            <Button
                title="+"
                onPress={()=>setCount(prev=>prev+1)}
                />
        </View>);
}

export default Timer;
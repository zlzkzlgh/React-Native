import { Children, createContext,useState } from "react";

//1. Context 생성 및 기본 값 설정
//기본값으로 user 객체와, dispatch함수를 설정
//user는 사용자의 정보, dispatch는 이름을 업데이트하는 함수로 사용할 예정
const UserContext = createContext({
    user : {name:''},
    dispatch : () => {}
});

//2. UserProvider 컴포넌트를 정의
//UserContext의 값을 제공하는 역할을 한다.
//하위 컴포넌트들이 UserContext에 접근할 수 있게 해준다.
const UserProvider = ({children}) => {
    const [name,setName] = useState('react');

    //value 객체에는 현재 user의 상태와 상태를 업데이트할 함수 dispatch를 포함
    //dispatch에다 setName함수를 전달하여 하위 컴포넌트들도 이름을 업데이트 할 수 있도록 한다.
    const value = {user : {name},dispatch : setName};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

//3. Consumer 컴포넌트 정의
//UserConsumer는 UserContext.Consumer를 의미한다.
//하위 컴포넌트에서 UserConsumer를 사용하여 UserContext의 값에 접근할 수 있다.
const UserConsumer = UserContext.Consumer;

export {UserProvider,UserConsumer}
export default UserContext;
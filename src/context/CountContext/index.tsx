import React, {createContext, useState, useContext} from 'react'

type Count = {
    count:number;
    setCount: any;
};
const CountContext = createContext({} as Count);


export default function CountProvider({children}:any) {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
}

export function useCount()
{
    const context = useContext(CountContext);
    const {count, setCount} = context;
    return {count, setCount};
}
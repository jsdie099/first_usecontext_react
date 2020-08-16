import React from 'react';
import { useCount} from '../../context/CountContext';

export default function Count() {
    const {count, setCount} = useCount();
    return (
        <div>
            <span>Count: <b>{count}</b></span><br/>
            <button onClick={()=>setCount(count+1)}>ADD</button>
        </div>
    )
}

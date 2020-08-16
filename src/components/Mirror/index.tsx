import React from 'react';
import { useCount} from '../../context/CountContext';
export default function Mirror() {
    const {count} = useCount();
    return (
        <div>
            <span>Mirror: <b>{count}</b></span>
        </div>
    )
}

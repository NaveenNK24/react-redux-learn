import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

import { buyIceCream } from '../redux';


function HooksIceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number Of IceCreams - {numOfIceCreams}</h1>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default HooksIceCreamContainer

import React,{useState} from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h1>Number of Cakes - {props.numOfCakes}</h1>
            <input type="text" value={number} onChange={(e) => {setNumber(e.target.value)}}/>
            <button onClick={() => {props.buyCake(number)}}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.cake.numberOfCakes
    }
}

const mapDispatchToProps = disapatch => {
    return {
        buyCake: (number) => disapatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)

import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of Cakes - {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.numberOfCakes
    }
}

const mapDispatchToProps = disapatch => {
    return {
        buyCake: () => disapatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)

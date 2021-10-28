import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h1>Number of IceCreams - {props.numOfIceCreams}</h1>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams : state.iceCream.numberOfIceCreams
    }
}

const mapDispatchToProps = disapatch => {
    return {
        buyIceCream: () => disapatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)

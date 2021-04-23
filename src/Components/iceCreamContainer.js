import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../Redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2> Number of Ice creams - {props.numOfIceCreams} </h2>
            <button onClick={props.buyIceCream}>Buy Ice creams</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)

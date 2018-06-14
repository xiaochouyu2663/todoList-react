import React, { Component } from 'react'
import {connect} from 'react-redux'
class AddTodo extends Component {

    render() {
        let input;
        return (
            <form onSubmit={(e) => { e.preventDefault(); this.props.dispatch({type:'AddTodo',text:input.value}) }}>
                <input ref={node => { input = node }} type="text" />
                <input type="submit" value="ADD" />
            </form>
        )
    }
}

export default connect()(AddTodo);


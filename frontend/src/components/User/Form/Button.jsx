import React, {Component} from 'react';


export default class Button extends Component{
    render(){
        return(
            <button className={`btn btn-${this.props.background} ${this.props.ml}`} 
                    onClick={(!this.props.param) ? e => this.props.action(e) : 
                                                   _ => this.props.action(this.props.param)}>
                        <i className={`fa fa-${this.props.icon}`}></i>
                        {this.props.actionType}
            </button>
        )
    }

}
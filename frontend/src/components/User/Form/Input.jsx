import React, {Component} from 'react';


export default class Input extends Component{
    render(){
        return(
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label htmlFor="name">
                        {`${this.props.field.charAt(0).toUpperCase()}${this.props.field.slice(1)}` }
                    </label>

                    <input type="text" className="form-control" 
                        name={this.props.name} 
                        value={this.props.value}
                        onChange={event => this.props.change(event)} 
                        placeholder={`Digite o ${this.props.field}`}
                    />
                </div>
            </div>
        )
    }
}

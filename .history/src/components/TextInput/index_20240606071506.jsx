import { Component } from "react";
import './styles.css'


export class TextInput extends Component {
    render () {
        return(
            <input
            value={searchValue} 
            onChange={this.handleChange}
            type='search'/>
        )
    }
}
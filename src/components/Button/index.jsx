import { Component } from 'react';
import './styles.css'
export class Button extends Component {
    render() {
        const {text, onClick, disabled} = this.props
        return(
            <button 
            onClick={onClick} 
            className='btn' 
            disabled={disabled}
            >
                {text}
            </button>
        )
    }
}
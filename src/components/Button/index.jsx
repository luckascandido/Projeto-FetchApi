import { Component } from 'react';
import './button.css'
export class Button extends Component{
    render(){
       const {text,onClick,disabled} = this.props; 
        return (
           <button 
           className='button-page'  
           onClick={onClick}
           disabled={disabled}
             >
             {text}
           </button>
        )
    }
}
import React from "react";
import '../styles/layout.css';
import NavBarComponent from '../components/navbar';

export default class Layout extends React.Component{
    render(){
        return(
        <div className="root">
            <div className="root-header">
                <NavBarComponent />
            </div>
            <div className="root-body">
                {this.props.children}
            </div>
        </div>
        )
       
    }
}
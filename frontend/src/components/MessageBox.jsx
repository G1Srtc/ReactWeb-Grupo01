import React from "react";

export default function MessageBox(props){
    <div className={`alert alert-${props.variant || 'info'}`}>{props.children}</div>
        
   

}
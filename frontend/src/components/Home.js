import React, { Component} from 'react';
import { Link } from 'react-router-dom';
export default  class Map extends Component {

   
    render(){
    
        return(
            <div>
                <h2>CartoLogicTask</h2>
                <h3>Click on the shops button down there to list all shops on the backend</h3>
                <Link to='/shops'>
                    <button>Shops</button>
                </Link>
            </div>
        )
    }
}
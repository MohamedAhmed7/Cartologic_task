import React, { Component} from 'react';
import { Link } from 'react-router-dom';
export default  class Map extends Component {

   
    render(){
    
        return(
            <div>
                <h2>Home Componenet</h2>
                <Link to='/shops'>
                    <button>Shops</button>
                </Link>
            </div>
        )
    }
}
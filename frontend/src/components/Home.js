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
                <h4>Access the Api from &nbsp;  
                  <a href='http://localhost:8000/api/api_overview'>API </a>
                </h4>
                <h4>Access the Admin Panel from &nbsp;  
                  <a href='http://localhost:8000/admin'>Admin </a>
                </h4>
                <h4>Hint: use these credentials to login as test user </h4>
                <h4>username: test</h4>
                <h4>pass: testing321</h4>
            </div>
        )
    }
}
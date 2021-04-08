import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


export default  class Map extends Component {

    constructor(props){
        super(props);
        this.state = {
            isDataLoaded: false,
            data:[]
        }
    }
    
    componentDidMount(){
        console.log('component did mount');
        setTimeout(() => {
            fetch('/api').then((response) =>{
                if (!response.ok){
                    console.log('err');
                }else{
                    return response.json()
                    console.log(response.json);
                }
            } ).then((data) => {
                console.log(data);
                this.setState({
                    data,
                    isDataLoaded:true
                })
            
            })
        }, 1000);
        
    }
    render(){
    
        return(
            <div>
           
            {!this.state.isDataLoaded ? <div>Loading...</div> :
            <MapContainer center={[51.0, -0.9]} zoom={2} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {this.state.data.map(shop => (
            <Marker key={shop.id} position={[shop.lng, shop.lat]}>
                <Popup>
                {shop.title} <br /> {shop.description}
                </Popup>
            </Marker>
            ))}
            
            
            </MapContainer>
            }
            
            </div>
        )
    }
}
import React, { Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


export default  class Map extends Component {

    constructor(props){
        super(props);
        this.state = {
            isDataLoaded: false,
            data:[],
            center:{
                lng:30.0,
                lat:32.0
            }
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
                if(!data){
                    console.log('no shops');
                }
                //console.log(data);
                console.log('len');


                this.setState({
                    data,
                    isDataLoaded:true
                })

            })
        }, 1000);
        
    }
    render(){
        const position = [this.state.center.lng, this.state.center.lat];

        return(
            <div>
           
            {!this.state.isDataLoaded ?
            
            <div>Loading...</div> :
          
            <MapContainer center={position} zoom={2} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker  position={position}>
                <Popup>
                <p>Example Shop</p>
                
                </Popup>
            </Marker>
            {this.state.data.map(shop => (
            <Marker key={shop.id} position={[shop.lng, shop.lat]}>
                <Popup>
                <p><b>title:</b> {shop.title}</p>
                <p><b>description:</b> {shop.description}</p>
                <p><b>lng:</b> {shop.lng}</p>
                <p><b>lat:</b> {shop.lat}</p>
                </Popup>
            </Marker>
            ))}
            </MapContainer>
  
            }
            
            </div>
        )
    }
}
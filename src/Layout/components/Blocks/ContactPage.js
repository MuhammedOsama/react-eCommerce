import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

    const mapStyles = {
        width: '100%',
        height: '100%'
    };

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stores: [
                {latitude: 47.49855629475769, longitude: -122.14184416996333},
                {latitude: 47.359423, longitude: -122.021071},
                {latitude: 47.2052192687988, longitude: -121.988426208496},
                {latitude: 47.6307081, longitude: -122.1434325},
                {latitude: 47.3084488, longitude: -122.2140121},
                {latitude: 47.5524695, longitude: -122.0425407}
            ]
        }
    }
    
    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
            lat: store.latitude,
            lng: store.longitude
            }}
            onClick={() => console.log("You clicked me!")} />
        });
    }

    render() {
        return(
            <div id="contact">
                <div className="cover">
                    <h2>Contact</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            {/* <Map
                                google={this.props.google}
                                zoom={8}
                                initialCenter={{ lat: 47.444, lng: -122.176}}
                            >
                                {this.displayMarkers()}
                            </Map> */}

                            <Map
                                google={this.props.google}
                                zoom={11}
                                style={mapStyles}
                                initialCenter={{
                                    latitude: -1.2884,
                                    longitude: 36.8233
                                }}
                            />

                        </div>
                        <div className="col-lg-6 col-12">
                            <h1>Send us your message</h1>
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Phone Number" />
                            <input type="text" placeholder="E-mail Address" />
                            <textarea placeholder="Message"></textarea>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default Contact;

export default GoogleApiWrapper({
    apiKey: 'YOUR_GOOGLE_API_KEY_GOES_HERE'
})(Contact);
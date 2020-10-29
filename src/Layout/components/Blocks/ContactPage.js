import React, { useEffect, useState } from 'react';
import firebase from "../firebase/Config";

export default () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        firebase.database().ref("ContactPage").once('value').then(response => {
            let contactPage = [];
            response.forEach(item => {
                contactPage.push(item.val());
            });
            setItems(contactPage);
        }).catch((err) => console.log(err));

    }, [items]);

    return(
        <div id="contact">
            <div className="cover">
                <h2>Contact</h2>
            </div>
            <div className="container">
                <div className="row">
                    {items.map((item, id) => {
                        return(
                            <div key={id} className="col-lg-6 col-12">
                                <iframe title="map" src={item.map}></iframe>
                            </div>
                        );
                    })}
                    
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
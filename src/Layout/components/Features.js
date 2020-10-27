import React, { useState, useEffect } from 'react'
import firebase from './firebase/Config';

export default () => {

    const column = [
        {header: "Free Delivery Worldwide", color: "info", para: "Click here for more info"},
        {header: "30 Days Return", para: "Simply return it within 30 days for an exchange."},
        {header: "Store Opening", para: "Shop open from Monday to Sunday"}
    ]

    const [items, setItems] = useState([]);

    useEffect(() => {

        firebase.database().ref("Features").once('value').then(response => {
            let features = [];
            response.forEach(items => {
                features.push(items.val());
            });
            setItems(features);
        }).catch((err) => console.log(err));

    }, [items]);

    return(
        <div id="features">
            <div className="header">
                <h2>@ Follow Us On Instagram</h2>
            </div>
            <div className="grid-container">

                {items.map((item, id) => {
                    return (
                        <div key={id}>
                            <div className="grid-item">
                                <img src={item.image} alt={item.alter} />
                                <div className="features-img new-features">
                                    <span className="icon">
                                        <i className="far fa-heart"> {item.i}</i>
                                    </span>
                                    <p>{item.details}</p>
                                    <span>{item.span}</span>
                                </div>
                            </div>
                        </div> 
                    );
                })}

            </div>
            <div className="container-fluid text-center">
                <div className="row">
                    {column.map((item, id) => {
                        return (
                            <div key={id} className="col-md-4 col-12 details">
                                <h4>{item.header}</h4>
                                <p className={item.color}>{item.para}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
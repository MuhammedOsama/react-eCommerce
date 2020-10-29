import React, { useState, useEffect } from 'react';
import firebase from '../firebase/Config';

export default () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        firebase.database().ref("AboutPage").once('value').then(response => {
            let aboutPage = [];
            response.forEach(item => {
               aboutPage.push(item.val());
            });
            setItems(aboutPage);
        }).catch((err) => console.log(err));

    }, [items]);

    return(
        <div id="about">
            <div className="cover">
                <h2>About</h2>
            </div>
            <div className="container">
                {items.map((item, id) => {
                    return(
                        <div key={id} className="row">
                            <div className="col-md-4 col-12">
                                <div className="pos-relative hov-img-zoom">
                                    <img src={item.image} alt={item.alter}/>
                                </div>
                            </div>
                            <div className="col-md-8 col-12">
                                <h1>{item.header}</h1>
                                <p>{item.desc}</p>
                                <p>{item.details}</p>
                                <span>{item.span}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
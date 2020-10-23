import React, { useState, useEffect } from 'react';
import firebase from './firebase/Config';

export default () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        firebase.database().ref("Blog").once('value').then(response => {
            let blog = [];
            response.forEach(item => {
                blog.push(item.val());
            });
            setItems(blog);
        }).catch((err) => console.log(err));

    }, [items]);

    return(
        <div id="blog">
            <h2>Our Blog</h2>
            <div className="container">
                <div className="row">
                    {items.map((item, id) => {
                        return(
                            <div key={id} className="col-md-4 col-12">
                                <div className="pos-relative hov-img-zoom">
                                    <img src={item.image} alt={item.alter} />
                                </div>
                                <a href="/">{item.link}</a>
                                <span>{item.desc}</span>
                                <p>{item.details}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
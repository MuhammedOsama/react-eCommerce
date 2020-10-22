import React from 'react';

export default () => {

    const items = [
        {map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7427676.845545295!2d44.43396640624999!3d24.630737943760682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1602009296678!5m2!1sar!2seg"}
    ]

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
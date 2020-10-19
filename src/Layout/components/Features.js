import React from 'react';

export default () => {

    const items = [
        {image: "./gallery-03.jpg", alter: "Bag", i: " 39", details: "Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.", span: "Photo by @nancyward"},
        {image: "./gallery-07.jpg", alter: "Girl", i: " 39", details: "Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.", span: "Photo by @nancyward"},
        {image: "./gallery-09.jpg", alter: "Set", i: " 39", details: "Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.", span: "Photo by @nancyward"},
        {image: "./gallery-13.jpg", alter: "Jump", i: " 39", details: "Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.", span: "Photo by @nancyward"},
        {image: "./gallery-15.jpg", alter: "Shoes", i: " 39", details: "Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.", span:"Photo by @nancyward"}
    ]
    const column = [
        {header: "Free Delivery Worldwide", color: "info", para: "Click here for more info"},
        {header: "30 Days Return", para: "Simply return it within 30 days for an exchange."},
        {header: "Store Opening", para: "Shop open from Monday to Sunday"}
    ]

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
                                        <i className="far fa-heart">{item.i}</i>
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
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return(
        <dev>
            <div className="home">
                <div className="home__container">
                    <img src="https://stock.adobe.com/in/images/various-equipment-at-illuminated-hardware-store/298157293?prev_url=detail" alt="" className="home__image" />

                    <div className="home__row">
                        <Product
                        id
                        title 
                        price
                        rating
                        image
                        />
                        <Product />
                    </div>
                    <div className="home__row">
                    <Product />
                    <Product />
                    <Product /> 
                    <Product />
                    </div>
                    <div className="home__row">
                    <Product/>
                    <Product/>
                    </div>
                </div>
            </div>

        </dev>
    )
}

export default Home
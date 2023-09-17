import React from "react";
import Card from "./Components/Card";
import card1 from "../../../assests/card1.jpg";
import card2 from "../../../assests/card2.jpg";
import card3 from "../../../assests/card3.jpg";
import logo from "../../../assests/card1.jpg";
import "./Components/styles.css";

export default function ProductCategory() {
    const categories = [
        { image: card1, title: "Visiting card", price: "₹300 per 1000 pcs." },
        { image: card2, title: "Letter head", price: "₹300 per 1000 pcs." },
        { image: card3, title: "Cover", price: "₹300 per 1000 pcs." },
        { image: logo, title: "Logo", price: "₹300 per 1000 pcs." },
    ];

    return (
        <>
            <div className="product-section px-6 py-[100px]">
                <div className="mx-auto flex flex-row items-center">
                    {categories.map((el, index) => (
                        <Card {...el} />
                    ))}
                </div>
            </div>
        </>
    );
}

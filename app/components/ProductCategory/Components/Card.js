import React from "react";
import addIcon from "../../../../assests/cross.svg";
import Image from "next/image";

export default function Card(props) {
    const { image, title, price } = props;

    return (
        <div className="mb-5 mx-2 w-1/4">
            <a className="product-item" href="/">
                <Image src={image} height={200} width={200} className="w-full px-5 product-thumbnail" />
                <h3 className="font-semibold text-base text-[#2f2f2f]">{title}</h3>
                <strong className="font-extrabold text-lg text-[#2f2f2f]">{price}</strong>

                <span className="icon-cross">
                    <Image src={addIcon} height={10} width={10} />
                </span>
            </a>
        </div>
    );
}

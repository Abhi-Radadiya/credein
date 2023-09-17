import React from "react";

export default function ListItem(props) {
    const { item } = props;
    return (
        <li className="leading-none m-0 p-0 border-solid mx-8">
            <div className="group relative inline-block">
                <span className="absolute inline-block overflow-hidden pb-1 w-0 whitespace-pre text-white transition-[width] duration-500 border-b-4 border-[#f9bf29] border-solid group-hover:w-full">
                    <a href="/">{item}</a>
                </span>
                <a href="/" className="text-[#9baca6] font-bold">
                    {item}
                </a>
            </div>
        </li>
    );
}

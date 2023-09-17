import React from "react";
import userLogo from "../../../assests/user.svg";
import Image from "next/image";
import cartLogo from "../../../assests/cart.svg";
import ListItem from "./Components/ListItem";

export default function Navbar() {
    return (
        <>
            <div className="z-30 h-[72px] bg-gray-900 backdrop-blur backdrop-filter bg-[#3b5d50] pt-3">
                <div className="mx-auto max-w-8xl xl:px-8">
                    <div className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8 xl:px-0 max-w-[1300px] w-full mx-auto">
                        <span>Logo</span>
                        <ul className="flex flex-row items-center list-none">
                            <ListItem item="Home" />
                            <ListItem item="Product" />
                            <ListItem item="Blogs" />
                            <ListItem item="About us" />
                            <span className="max-w-[16px] h-auto w-full mx-10">
                                <Image src={userLogo} width={100} height={100} alt="user" />
                            </span>

                            <span className="max-w-[16px] h-auto w-full ml-5">
                                <Image src={cartLogo} width={100} height={100} alt="cart" />
                            </span>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

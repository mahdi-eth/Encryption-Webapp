import React from "react";
import { UilGithub } from "@iconscout/react-unicons";

export function Footer({ condition }) {
    const footerClasses =
        "p-2 text-center shadow dark:bg-gray-800 transition duration-200";

    return (
        <>
            <footer
                className={
                    condition
                        ? "bg-blue-600  hover:bg-blue-500 " + footerClasses
                        : "bg-red-600  hover:bg-red-500 " + footerClasses
                }>
                <a
                    className="text-white font-bold"
                    href="https://github.com/mahdi-Eth">
                    <div className="flex justify-center items-center gap-2">
                        <p className="text-md">Creator : Mahdi Ettehadnejad</p>
                        <UilGithub />
                    </div>
                </a>
            </footer>
        </>
    );
}

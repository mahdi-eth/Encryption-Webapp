import React from "react";
import { UilGithub } from "@iconscout/react-unicons";

export function Footer({ condition }) {
    return (
        <>
            <div class="mt-16 p-2 text-center bg-blue-600 shadow dark:bg-gray-800 hover:bg-blue-500 transition duration-200">
                <a class="text-white" href="https://github.com/mahdi-Eth">
                    <div className="flex justify-center items-center gap-2">
                        <p className="text-md">Creator : Mahdi Ettehadnejad</p>
                        <UilGithub />
                    </div>
                </a>
            </div>
        </>
    );
}

import React from "react";
import { useForm } from "react-hook-form";

export function Encryption({ condition }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="w-auto grid h-96 mt-16 mx-48 px-16 divide-y-2">
            <div>
                <form className="flex flex-col gap-6 justify-center mt-10 mb-10 px-16 w-full">
                    <div>
                        <input
                            type="text"
                            className="w-36 rounded-lg bg-gray-50 focus-visible:ring focus:ring-blue-400 transition duration-75 focus:outline-none border border-gray-300 text-gray-900 text-sm focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Key number"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <textarea
                            rows="4"
                            className="w-full rounded-lg focus-visible:ring focus:ring-blue-400 transition duration-75 focus:outline-none p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write yout plain text here..."></textarea>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Encrypt {/* ++ condition */}
                    </button>
                </form>
            </div>
            <div className="flex justify-center w-full">
                <div className="flex flex-col mt-10 mx-16 p-4 border shadow-lg rounded-lg w-full">
                <button type="button" className="py-2.5 w-40 self-end px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Copy to clipboard</button>
                    <p className="text-gray-500">{"Encrypted text will shown here..."}</p> {/* ++ condition */}
                </div>
            </div>
        </div>
    );
}
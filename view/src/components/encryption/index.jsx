import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UilCopy } from "@iconscout/react-unicons";
import { useForm } from "react-hook-form";

const schema = yup
    .object({
        key: yup.number().required(),
        text: yup.string().required("Text is required!")
    })
    .required();

export function Encryption({ condition }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => console.log(data);

    const keyInputClasses =
        "w-36 rounded-lg shadow-sm bg-gray-50 focus-visible:ring transition duration-75 focus:outline-none border border-gray-300 text-gray-900 text-sm block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
    const textInputClasses =
        "w-full min-h-275 bg-gray-50 shadow-sm rounded-lg focus-visible:ring transition duration-75 focus:outline-none p-2.5 text-sm text-gray-900 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
    const transformBtnClasses =
        "text-white w-full font-bold rounded-lg transition duration-200 focus:ring-4 text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none";
    const copyBtnClasses =
        "py-2.5 self-end px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";

    console.log(errors?.key);

    return (
        <section className="w-auto grid mt-16 divide-y-2">
            <div>
                <form
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6 justify-center mt-10 mb-10 px-4 sm:px-8 lg:px-16 w-full">
                    <div>
                        <p className="mb-2 text-sm text-red-600 dark:text-red-500">
                            {errors?.key?.message ? (
                                <span className="font-medium">Oops! </span>
                            ) : null}{" "}
                            {errors?.key?.message ==
                            'key must be a `number` type, but the final value was: `NaN` (cast from the value `""`).'
                                ? "Key is required & must be a number!"
                                : null}
                        </p>
                        <input
                            type="number"
                            {...register("key")}
                            className={
                                condition
                                    ? "focus:ring-blue-400 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 " +
                                      keyInputClasses
                                    : "focus:ring-red-400 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 " +
                                      keyInputClasses
                            }
                            placeholder="Key number"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-red-600 dark:text-red-500">
                            {errors?.text?.message ? (
                                <span className="font-medium">Oops! </span>
                            ) : null}{" "}
                            {errors?.text?.message}
                        </p>
                        <textarea
                            rows="4"
                            {...register("text")}
                            className={
                                condition
                                    ? "focus:ring-blue-400 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 " +
                                      textInputClasses
                                    : "focus:ring-red-400 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 " +
                                      textInputClasses
                            }
                            placeholder={
                                condition
                                    ? "Write your plain text here..."
                                    : "Write your encrypted text here..."
                            }></textarea>
                    </div>
                    <button
                        type="submit"
                        className={
                            condition
                                ? "bg-blue-600 hover:bg-blue-500 hover:border-blue-500 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " +
                                  transformBtnClasses
                                : "bg-red-600 hover:bg-red-500 hover:border-red-500 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 " +
                                  transformBtnClasses
                        }>
                        {condition ? "Encrypt" : "Decrypt"}
                    </button>
                </form>
            </div>
            {/* After backend */}
            <div className="justify-center w-full hidden">
                <div className="flex flex-col mt-10 mx-4 sm:mx-8 lg:mx-16 p-4 border shadow-sm rounded-lg w-full bg-gray-50">
                    <button
                        type="button"
                        title="Copy"
                        className={
                            condition
                                ? "hover:text-blue-500 " + copyBtnClasses
                                : "hover:text-red-500 " + copyBtnClasses
                        }>
                        <UilCopy />
                    </button>
                    <p className="text-gray-500">
                        {condition
                            ? "Encrypted text will shown here..."
                            : "Decrypted text will shown here..."}
                    </p>
                </div>
            </div>
            {/* After backend */}
        </section>
    );
}

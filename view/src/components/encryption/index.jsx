import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { encryptionService, decryptionService } from "../../api";
import { CopyButton } from "../copybtn";

const schema = yup
    .object({
        key: yup.number().notOneOf([0]).required(),
        text: yup.string().trim().required("Text is required!")
    })
    .required();

export function Encryption({ condition }) {
    const [output, setOutput] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        if (condition) {
            const res = await encryptionService(data);
            setOutput(res?.data?.output);
        } else {
            const res = await decryptionService(data);
            setOutput(res?.data?.output);
        }
    };

    const keyInputClasses =
        "w-36 rounded-lg shadow-sm bg-gray-50 focus-visible:ring transition duration-75 focus:outline-none border border-gray-300 text-gray-900 text-sm block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
    const textInputClasses =
        "w-full min-h-275 bg-gray-50 shadow-sm rounded-lg focus-visible:ring transition duration-75 focus:outline-none p-2.5 text-sm text-gray-900 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
    const transformBtnClasses =
        "text-white w-full font-bold rounded-lg transition duration-200 focus:ring-4 text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none";

    return (
        <section className="w-auto grid mt-16 divide-y-2">
            <div>
                <form
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6 justify-center mt-10 mb-10 px-4 sm:px-8 lg:px-16 w-full">
                    <div>
                        <p className="mb-2 text-sm text-red-600">
                            {errors?.key?.message ? (
                                <span className="font-medium">Oops! </span>
                            ) : null}{" "}
                            {errors?.key?.message &&
                            errors?.key?.message ==
                                'key must be a `number` type, but the final value was: `NaN` (cast from the value `""`).'
                                ? "Key is required & must be a number!"
                                : null}
                            {errors?.key?.message &&
                            errors?.key?.message ==
                                'key must not be one of the following values: 0'
                                ? "The key number cannot be zero."
                                : null}
                        </p>
                        <input
                            type="number"
                            {...register("key")}
                            className={
                                condition
                                    ? "focus:ring-blue-400 focus:border-blue-500 " +
                                      keyInputClasses
                                    : "focus:ring-red-400 focus:border-red-500" +
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
                                    ? "focus:ring-blue-400 focus:border-blue-500 " +
                                      textInputClasses
                                    : "focus:ring-red-400 focus:border-red-500 " +
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
                                ? "bg-blue-600 hover:bg-blue-500 hover:border-blue-500 focus:ring-blue-300  " +
                                  transformBtnClasses
                                : "bg-red-600 hover:bg-red-500 hover:border-red-500 focus:ring-red-300 " +
                                  transformBtnClasses
                        }>
                        {condition ? "Encrypt" : "Decrypt"}
                    </button>
                </form>
            </div>
            {output && (
                <div className="flex flex-col gap-6 justify-center mt-10 mb-10 px-4 sm:px-8 lg:px-16 w-full">
                    <div className="flex flex-col p-4 border shadow-sm rounded-lg mt-10 bg-gray-50">
                        <CopyButton textToCopy={output} />
                        <p className="text-gray-800">{output}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

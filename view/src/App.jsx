import { useState } from "react";
import "./index.css";
import { Encryption } from "./components";

function App() {
    const [encryptionActive, encryptionActivator] = useState(true);

    const encryptionActiveClasses =
        "transition focus-visible:ring focus:ring-blue-200 focus:outline-none ease-in-out duration-150 w-32 tracking-wide font-bold rounded border-b-2  hover:text-white shadow-md py-2 px-6 inline-flex items-center border-blue-500 ";
    const decryptionClasses =
        "transition focus-visible:ring focus:ring-red-200 focus:outline-none ease-in-out duration-150 w-32 tracking-wide font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center";

    return (
        <>
            <div className="grid justify-center gap-6 mt-16">
                <div className="grid grid-cols-2 justify-center">
                    <div
                        onClick={() => {
                            encryptionActivator(true);
                        }}
                        className="m-3 text-center">
                        <button
                            className={
                                encryptionActive
                                    ? "bg-blue-500 text-white hover:bg-blue-400 hover:border-blue-400 " +
                                      encryptionActiveClasses
                                    : "bg-white text-gray-800 hover:bg-blue-500 hover:border-blue-600 " +
                                      encryptionActiveClasses
                            }>
                            <span className="mx-auto">Encryption</span>
                        </button>
                    </div>
                    <div
                        className="m-3 text-center"
                        aria-disabled
                        onClick={() => {
                            encryptionActivator(false);
                        }}>
                        <button
                            className={
                                !encryptionActive
                                    ? "bg-red-500 text-white hover:bg-red-400 hover:border-red-400 " +
                                      decryptionClasses
                                    : "bg-white text-gray-800 hover:bg-red-500 hover:border-red-600 " +
                                      decryptionClasses
                            }>
                            <span className="mx-auto">Decryption</span>
                        </button>
                    </div>
                </div>
            </div>
            <Encryption condition={encryptionActive}/>
        </>
    );
}

export default App;

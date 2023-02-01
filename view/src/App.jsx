import { useState } from "react";
import "./index.css";

function App() {
    const [encryptionActive, encryptionActivator] = useState(false);
    const [decryptionActive, decryptionActivator] = useState(false);

    const encryptionActiveClasses =
        "w-32 tracking-wide font-bold rounded border-b-2  hover:text-white shadow-md py-2 px-6 inline-flex items-center border-blue-500 ";

    return (
        <div className="grid justify-center gap-6 mt-16">
            <div className="grid grid-cols-2 justify-center">
                <div
                    onClick={() => {encryptionActivator(true);}}
                    className="m-3 text-center">
                    <button
                        className={
                            encryptionActive ? "bg-blue-500 text-white hover:bg-blue-400 hover:border-blue-400 " + encryptionActiveClasses : "bg-white text-gray-800 hover:bg-blue-500 hover:border-blue-600 " + encryptionActiveClasses
                        }>
                        <span className="mx-auto">Encryption</span>
                    </button>
                </div>
                <div className="m-3 text-center">
                    <button className="w-32 tracking-wide text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                        <span className="mx-auto">Decryption</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;

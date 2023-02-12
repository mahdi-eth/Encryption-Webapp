import React, { useState } from "react";
import { UilCopy } from "@iconscout/react-unicons";

export const CopyButton = ({ textToCopy }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <button
            className="text-gray-800 inline self-end font-medium py-2 px-4 rounded-lg border bg-gray-50 hover:bg-white"
            title={isCopied ? "Copied!" : "Copy"}
            onClick={handleCopyClick}>
            {isCopied ? (
                <UilCopy
                    className="inline w-6 h-6 text-gray-800"
                    name="ui-check"
                    transform="rotate-45"
                />
            ) : (
                "Copy"
            )}
        </button>
    );
};

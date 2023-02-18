const controlEncryption = (req, res) => {
    const key = req.body.key;
    const text = req.body.text;

    if (!key) return res.status(400).json({ message: "Key is requierd" });
    if (!text) return res.status(400).json({ message: "Text is requierd" });

    const encrypt = (key, plainText) => {
        let encryptedText = "";
        const modKey = key % 128;

        for (let i = 0; i < plainText.length; i++) {
            let charCode = plainText.charCodeAt(i);
            if (plainText[i] === " ") {
                encryptedText += " ";
            } else {
                char = charCode + modKey;
                if (char > 128) {
                    encryptedText += String.fromCharCode(char % 128);
                } else {
                    encryptedText += String.fromCharCode(char);
                }
            }
        }

        return encryptedText;
    };

    const output = encrypt(key, text);

    return res.status(200).json({ output });
};

module.exports = { controlEncryption };

const controlDecryption = (req, res) => {
    const key = req.body.key;
    const text = req.body.text;

    if (!key) return res.status(400).json({ message: "Key is requierd" });
    if (!text) return res.status(400).json({ message: "Text is requierd" });

    const decryptionService = (key, encryptedText) => {
        let decryptedText = "";
        for (let i = 0; i < encryptedText.length; i++) {
            if (encryptedText[i] === " ") {
                decryptedText += " ";
            } else {
                decryptedText += String.fromCharCode(
                    encryptedText.charCodeAt(i) - key
                );
            }
        }
        return decryptedText;
    };

    const output = decryptionService(key, text);

    return res.status(200).json({ output });
};

module.exports = { controlDecryption };

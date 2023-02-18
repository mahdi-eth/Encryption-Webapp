const controlDecryption = (req, res) => {
    const key = req.body.key;
    const text = req.body.text;

    if (!key) return res.status(400).json({ message: "Key is requierd" });
    if (!text) return res.status(400).json({ message: "Text is requierd" });

    const decryptionService = (key, encryptedText) => {
        let decryptedText = "";
        const modKey = key % 128;
        
        for (let i = 0; i < encryptedText.length; i++) {
          if (encryptedText[i] === " ") {
            decryptedText += " ";
          } else {
            let newCharCode = encryptedText.charCodeAt(i) - modKey;
            if (newCharCode < 0) {
              newCharCode += 128;
            }
            decryptedText += String.fromCharCode(newCharCode);
          }
        }
        
        return decryptedText;
      }
      

    const output = decryptionService(key, text);

    return res.status(200).json({ output });
};

module.exports = { controlDecryption };

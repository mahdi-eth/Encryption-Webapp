const controlEncryption = (req, res) => {
    const key = req.body.key;
    const text = req.body.text;

    if (!key) return res.status(400).json({ message: "Key is requierd" });
    if (!text) return res.status(400).json({ message: "Text is requierd" });

    const encrypt = (key, plainText) => {
        let encryptedText = "";
      
        for (let i = 0; i < plainText.length; i++) {
          let charCode = plainText.charCodeAt(i);
          if (plainText[i] === " ") {
            encryptedText += " ";
          } else {
            encryptedText += String.fromCharCode((charCode + key) % 128);
          }
        }
      
        return encryptedText;
      }
      
      const output = encrypt(key, text)

    return res.status(200).json({ output });
};

module.exports = { controlEncryption };

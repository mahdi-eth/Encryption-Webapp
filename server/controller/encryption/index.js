const controlEncryption = (req, res) => {
    const key = req.body.key;
    const text = req.body.text;

    if (!key) return res.status(400).json({ message: "Key is requierd" });
    if (!text) return res.status(400).json({ message: "Text is requierd" });

    let charCodeArr = [];
    for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i) + key;
        charCodeArr.push(code);
    }

    let outPutText = "";
    charCodeArr.forEach((number) => {
        outPutText += String.fromCharCode(number);
    });

    return res.status(200).json({ output: outPutText });
};

module.exports = { controlEncryption };

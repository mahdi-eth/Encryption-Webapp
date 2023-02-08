import { useState } from "react";
import "./index.css";
import { Encryption, Footer, HeadBtns } from "./components";

function App() {
    const [encryptionActive, encryptionActivator] = useState(true);
    
    return (
        <>
            <HeadBtns
                condition={encryptionActive}
                encryptionActivator={encryptionActivator}
            />
            <Encryption
                condition={encryptionActive}
                encryptionActivator={encryptionActivator}
            />
            <Footer
                condition={encryptionActive}
                encryptionActivator={encryptionActivator}
            />
        </>
    );
}

export default App;

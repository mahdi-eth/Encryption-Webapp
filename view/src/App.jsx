import { useState } from "react";
import "./index.css";
import { Encryption, Footer, HeadBtns } from "./components";

function App() {
  const [encryptionActive, encryptionActivator] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <HeadBtns
        condition={encryptionActive}
        encryptionActivator={encryptionActivator}
      />
      <Encryption
        condition={encryptionActive}
        encryptionActivator={encryptionActivator}
      />
      <div className="flex-grow"></div>
      <div className="fixed bottom-0 left-0 right-0">
        <Footer condition={encryptionActive} />
      </div>
    </div>
  );
}

export default App;

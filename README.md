# 📦 React Modal Component

Une simple librairie React permettant d’afficher une **fenêtre modale** réutilisable et personnalisable.  
Elle gère l’ouverture/fermeture, un titre optionnel, un bouton de fermeture et le rendu de contenu enfant.

---

## Installation

```bash
npm i jules-modal-lib
```
## Utilisation

```bash
import { Modal } from "jules-modal-lib";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
    
    function closeModal() : void {
      setOpen(false);
    }
    
    return (
      <>
        <Modal open={open} onClose={closeModal}>
            <Form onActions={closeModal} />
        </Modal>
      </>
    );
}
```

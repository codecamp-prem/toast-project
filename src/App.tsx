import { useRef, useState } from "react";
import "./styles.css";
import { useToast } from "./useToast";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addToast, removeToast } = useToast();
  const [id, setId] = useState<string>();

  const createToast = () => {
    if (inputRef.current == null || inputRef.current.value == "") return;

    setId(addToast(inputRef.current.value, { autoDismiss: false }));

    inputRef.current.value = "";
  };

  return (
    <>
      <div className="form">
        <input type="text" ref={inputRef} />
        <button onClick={createToast}>Add Toast</button>
        <button onClick={() => id != null && removeToast(id)}>
          Remove last Toast
        </button>
      </div>
    </>
  );
}

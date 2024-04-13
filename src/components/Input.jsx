import { useState } from "react";
import { useStore } from "../stores/useStore";

export const Input = () => {
  const { setUserName } = useStore();
  const [newName, setNewName] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setUserName(newName);
    setNewName("");
  };

  const handleChange = event => setNewName(event.target.value);

  return (
    <form
      name="name-form"
      onSubmit={handleSubmit}>
      <input
        name="name-input"
        type="text"
        value={newName}
        onChange={handleChange}
      />
      <button>Start game</button>
    </form>
  );
};

"use client";
import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [isNameDirty, setIsNameDirty] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);

  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  const submit = async () => {
    const data = {
      name,
      phone,
    };
    const response = await fetch("/form/save", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response.json());
  };

  useEffect(() => {
    setIsFormValid(isNameValid && isPhoneValid);
  }, [isNameValid, isPhoneValid]);

  return (
    <div className="App">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "50vw",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div>
          <input
            placeholder="Your name *"
            value={name}
            onChange={(e) => {
              setIsNameDirty(true);
              setName(e.target.value);
              setIsNameValid(e.target.value);
            }}
            onBlur={(e) => setIsNameDirty(true)}
          />
          {isNameDirty && !isNameValid && (
            <span style={{ color: "red" }}>Required</span>
          )}
        </div>
        <hr />
        <input
          placeholder="Your phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setIsPhoneValid(e.target.value);
          }}
        />
        <hr />
        <button disabled={!isFormValid} onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

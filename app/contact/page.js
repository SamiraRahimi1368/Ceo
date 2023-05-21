"use client";
import { useState } from "react";
const style =
  "block mb-2 text-sm font-medium text-gray-900 dark:text-white border m-4";
const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <form className="flex flex-col gap-4 w-48 bg-red-400">
        <input
          className={style}
          value={name}
          placeholder="your name" 
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className={style}
          value={phone}
          placeholder="your phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <textarea
          className={style}
          value={message}
          placeholder="your message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </form>
      {name}
    </div>
  );
};

export default Contact;

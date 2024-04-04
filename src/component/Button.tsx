import React, { useState } from "react";

interface MyButtonProps {
  text: string;
  onClick?: () => void;
}

interface Book {
  name: string;
  price: number;
}

const Button: React.FC<MyButtonProps> = (props) => {
  const { text, onClick } = props;
  //   const [val, setVal] = useState<Book>({
  //     name: "harry potter",
  //     price: 10,
  //   });
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={value}
          placeholder="Enter your name"
        />
        <button type="submit">submit</button>
      </form>

      <p>{value}</p>
    </div>
  );
};

export default Button;

import { FormEvent, useState } from "react";
import axios from "axios";
import { Button, TextArea, Input } from "src/ui";
import { formStyles } from "./styles";

export const AddProductForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = async () => {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body: description,
        userId: 1,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitHandler();
  };

  return (
    <form onSubmit={onSubmit} className={formStyles}>
      <Input
        placeholder="Наименование"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        placeholder="Описание"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Добавить</Button>
    </form>
  );
};

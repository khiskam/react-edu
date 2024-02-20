import { Input } from "src/ui/Input";
import { SearchProps } from "./types";
import { Button } from "src/ui";
import { searchStyles } from "./styles";

export const Search = ({ placeholder, value, onChange }: SearchProps) => {
  return (
    <div className={searchStyles}>
      <Input value={value} placeholder={placeholder} onChange={onChange} />
      <Button>Искать</Button>
    </div>
  );
};

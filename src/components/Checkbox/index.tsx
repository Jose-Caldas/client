import { useState } from "react";
import { InputHTMLAttributes } from "react";
import { Wrapper, Label, Input } from "./styles";

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;

  label?: string;
  labelFor?: string;
  labelColor?: "white" | "black";
} & InputHTMLAttributes<HTMLInputElement>; //aumenta a capacidade do checkbox receber mais atributos

const Checkbox = ({
  onCheck,
  label,
  labelFor = "",
  labelColor = "white",
}: CheckboxProps) => {
  //Controlled components (state)

  const [checked, setChecked] = useState(false);

  const onChange = () => {
    const status = !checked; // true para false | false para true
    setChecked(status);

    if (onCheck) {
      onCheck(status);
    }
  };

  return (
    <Wrapper>
      <Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={checked}
      />
      {!!label && (
        <Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </Label>
      )}
    </Wrapper>
  );
};
export default Checkbox;

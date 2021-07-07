import { useState } from "react";
import { InputHTMLAttributes } from "react";
import { Wrapper, Label, InputWrapper, Input } from "./styles";

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  inicialValue?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  onInput,
  label,
  labelFor = "",
  inicialValue = "",
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(inicialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };
  return (
    <Wrapper>
      {!!label && <Label htmlFor={labelFor}>{label}</Label>}
      <InputWrapper>
        <Input type="text" onChange={onChange} value={value} {...props} />
      </InputWrapper>
    </Wrapper>
  );
};

export default TextField;

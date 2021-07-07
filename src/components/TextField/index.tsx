import { ReactNode, useState } from "react";
import { InputHTMLAttributes } from "react";
import { Wrapper, Label, InputWrapper, Input, Icon, Error } from "./styles";

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  inicialValue?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  onInput,
  label,
  labelFor = "",
  inicialValue = "",
  icon,
  iconPosition = "left",
  disabled = false,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(inicialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };
  return (
    <Wrapper disabled={disabled} error={!!error}>
      {!!label && <Label htmlFor={labelFor}>{label}</Label>}
      <InputWrapper>
        {!!icon && <Icon iconPosition={iconPosition}>{icon}</Icon>}
        <Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        />
      </InputWrapper>
      {!!error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default TextField;

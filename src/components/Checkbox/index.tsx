import { Wrapper, Label, Input } from "./styles";

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: "white" | "black";
};

const Checkbox = ({
  label,
  labelFor = "",
  labelColor = "white",
}: CheckboxProps) => (
  <Wrapper>
    <Input type="checkbox" id={labelFor} />
    {!!label && (
      <Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </Label>
    )}
  </Wrapper>
);

export default Checkbox;

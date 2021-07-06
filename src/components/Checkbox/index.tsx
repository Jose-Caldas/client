import { Wrapper } from "./styles";

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
};

const Checkbox = ({ label, labelFor = "" }: CheckboxProps) => (
  <Wrapper>
    <input type="checkbox" id={labelFor} />
    {!!label && <label htmlFor={labelFor}>{label}</label>}
  </Wrapper>
);

export default Checkbox;

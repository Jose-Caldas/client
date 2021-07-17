import * as S from "./styles";
import Heading from "../Heading";
import TextField from "../TextField";
import Button from "../Button";

const FormProfile = () => (
    <S.Wrapper>
        <Heading lineBottom color="black" size="small">
            My profile
        </Heading>
        <S.Form>
            <TextField
                label="Name"
                name="name"
                placeholder="Name"
                inicialValue="Jhon Doe"
            />
            <TextField
                label="E-mail"
                name="email"
                type="email"
                placeholder="E-mail"
                inicialValue="jhondoe@gmail.com"
                disabled
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                placeholder="Type your password"
            />
            <TextField
                label="New password"
                name="new_password"
                type="password"
                placeholder="New password"
            />
            <Button size="large">Save</Button>
        </S.Form>
    </S.Wrapper>
);

export default FormProfile;

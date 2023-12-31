import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { FaChevronRight } from "react-icons/fa";
import Input from "./Input";
import { BsPersonCircle } from "react-icons/bs";

import Button from "../../reusable-ui/Button";

function Login() {
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate("/order", { state: { username } });
        navigate(`order/${username}`);
    };
    const handleChange = (e) => setUsername(e.target.value);
    return (
        <LoginStyled>
            <h1 className="bonbon">Bienvenue chez nous!</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    value={username}
                    onChange={handleChange}
                    placeholder={"Entre votre prénom"}
                    required={"required"}
                    Icon={<BsPersonCircle className="inputIcon" />}
                    className={"inputContainer"}
                />

                <Button
                    type={"submit"}
                    className="button"
                    Icon={<FaChevronRight className="chevron" />}
                    label={"Accédez à mon espace"}
                />
            </form>
        </LoginStyled>
    );
}

const LoginStyled = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    h1,
    h2 {
        font-family: Amatic SC;
        color: ${theme.colors.white};
        font-weight: ${theme.weights.bold};
    }

    h1 {
        font-size: ${theme.fonts.P5};
    }
    h2 {
        font-size: ${theme.fonts.P4};
        margin-bottom: 10px;
    }
    hr {
        width: 400px;
        border: 1px solid #f56a2c;
        margin: 30px 0;
    }
    input,
    .button {
        width: 400px;
        padding: 18px 24px;
        border-radius: ${theme.borderRadius.round};
        align-items: center;
        border: none;
        display: block;
    }
    input {
        margin: 15px 0;
        padding-left: 50px;
        font-weight: ${theme.weights.regular};
        font-size: 15px;
        color: ${theme.colors.dark};
        border: none;
        &::placeholder {
            color: #d3d3d3;
        }
    }
    .inputContainer {
        position: relative;
        width: 400px;
    }
    .inputIcon {
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 18px;
        color: #d3d3d3;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${theme.colors.white};
        background-color: ${theme.colors.primary_burger};
        font-weight: ${theme.weights.bold};
        font-size: 15px;
        cursor: pointer;

        &:hover {
            color: ${theme.colors.primary_burger};
            background-color: ${theme.colors.white};
            transition: all 0.3s;
        }
    }
    .chevron {
        margin-left: 10px;
        font-size: 15px;
    }
`;

export default Login;

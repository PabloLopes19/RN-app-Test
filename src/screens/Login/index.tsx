import { Text, View } from "react-native";
import { Image } from "react-native";
import Input from "../../components/Input";

import * as s from "./styles";
import * as g from "../../styles/global";

const FindevLogo = "../../assets/FinDev.svg";

export default function Login(){
    const date = new Date(Date.now());
    const year = date.getFullYear();

    return(
        <s.Container>
            <s.CenterDiv />
            <s.CenterDiv>
                <Image 
                    source={require("../../assets/FinDev.png")}
                />

                <s.Slogan>
                    Onde o seu único limite é a <s.Blue>criatividade.</s.Blue>
                </s.Slogan>

                <s.Inputs>
                    <Input 
                        label="Email" 
                        placeholder="Digite aqui o seu email"
                    />
                    
                    <Input 
                        label="Senha" 
                        password
                        placeholder="Digite aqui a sua senha"
                    />
                </s.Inputs>

                <s.Inputs>
                    <g.Button>
                        <Text style={{ color: '#fff', fontWeight: "bold" }}>
                            Fazer login
                        </Text>
                    </g.Button>

                    <s.NewAccount>
                        Não possui uma conta? <s.Blue>Cadastrar agora</s.Blue>
                    </s.NewAccount>
                </s.Inputs>

            </s.CenterDiv>
            <s.Inputs>
                <g.FooterText>©Findev - {year}.</g.FooterText>
            </s.Inputs>
        </s.Container>
    )
}
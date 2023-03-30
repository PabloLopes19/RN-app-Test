import { View } from "react-native";

import * as S from "./styles";

interface props {
    placeholder?: string;
    label?: string;
    password?: boolean
}

export default function Input(props: props){
    return(
        <S.Around>
            { 
                props.label && 
                    <S.Label>{props.label}</S.Label> 
            }
            
            <S.Input 
                secureTextEntry={props.password}
                placeholder={props.placeholder ? props.placeholder : ""} 
            />
        </S.Around>
    )
}
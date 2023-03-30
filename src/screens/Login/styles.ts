import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { light } from "../../styles/global";

export const Slogan = styled.Text`
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    font-family: "Nunito_600SemiBold";
`;

export const Blue = styled.Text`
    color: ${light.fdprimary};
    font-family: "Nunito_700Bold";
`;

export const Container = styled.View`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
`;

export const CenterDiv = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    width: 100%;
    padding: 0 20px;
`;

export const Inputs = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

export const NewAccount = styled.Text`
    font-size: 14px;
    font-family: "Nunito_400Regular";
    color: #666
`;
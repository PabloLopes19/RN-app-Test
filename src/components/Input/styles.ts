import styled from "styled-components";

import { light } from "../../styles/global";

export const Around = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

export const Input = styled.TextInput`
    height: 55px;
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    background: #efefef;
    border: 1px solid ${light.fdborder};
`;

export const Label = styled.Text`
    font-size: 14px;
    font-family: "Nunito_600SemiBold";
    color: #999;
`;
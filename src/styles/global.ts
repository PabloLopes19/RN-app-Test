import styled from "styled-components";
import { View } from "react-native";

export const light = {
    fdBackground: "#F3F4F5",
    fdblue: "#45AAF2",
    fdyellow: "#f1c40f",
    fdyellowghost: "rgba(241, 196, 15, 0.1)",
    fdhover: "#F2F2F2",
    fdgrey: "#666",
    fdlight: "#ddd",
    fddescription: "#B9B9B9",
    fddescriptionDark: "#666",
    fdcard: "#fff",
    fdprimary: "#45AAF2",
    fddanger: "#FC5C65",
    fdsuccess: "#2ECC71",
    fdghost: "rgba(69, 170, 242, 0.15)",
    fdghostdanger: "rgba(252, 92, 101, 0.15)",
    fdghostdark: "rgba(0, 0, 0, 0.15)",
    fdtransparent: "transparent",
    fdtitle: "#333",
    fdborder: '#d9d9d9',
    fdphotobg: "#e9e9e9",
    fddivider: "#ddd",
    fdinputText: "#666",
    fdbrighterbg: "#fefefe",
    fdlightTitle: "#4E4E4E",
    fdice: "#ECF2FF",
    fdcode: "#272727",
    fdtoast: '#fff',
}

export const Background = styled(View)`
    background-color: ${light.fdBackground};
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Nunito_400Regular";
`;

export const Button = styled.TouchableOpacity`
    height: 55px;
    width: 100%;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${light.fdblue};
`;

export const FooterText = styled.Text`
    font-family: "Nunito_700Bold";
    color: #999;
    font-size: 14px;
`;
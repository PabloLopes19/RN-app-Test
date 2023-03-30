import { Text, View } from 'react-native';

import { Title } from "./styles";

interface props {
    name: string;
}

export default function Home(props: props) {
    return(
        <View>
            <Title>Hello {props.name}</Title>
        </View>
    )
}
import { View, Text } from 'react-native';
import React from 'react';

type Props = {}

const Header = ({ }: Props) => {
    return (
        <View className="flex items-center justify-center min-h-[30%] bg-gray-200">
            <Text className="text-neutral-800 text-2xl font-medium text-center">
                The counter app with redux
            </Text>
        </View>
    );
};

export default Header;


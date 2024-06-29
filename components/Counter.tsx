import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks'
import { decrement, increment } from '../slices/counterSlice';

type Props = {}

const Counter = ({ }: Props) => {

    const count = useAppSelector((state: any) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <View style={style.counterWrapper}>
            <View style={style.counterWrapper}>
                <View style={style.counterContainer}>
                    <TouchableOpacity onPress={() => dispatch(decrement())}>
                        <Text style={style.subtractButton}>-</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={style.counterValue}>{count}</Text>
                    </View>
                    <TouchableOpacity onPress={() => dispatch(increment())}>
                        <Text style={style.addButton}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    counterWrapper: {
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
    },
    counterContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    addButton: {
        fontSize: 24,
        lineHeight: 32,
        padding: 8,
        backgroundColor: 'gray',
        color: 'black',
    },
    counterValue: {
        fontSize: 20,
    },
    subtractButton: {
        fontSize: 24,
        lineHeight: 32,
        padding: 8,
        backgroundColor: 'gray',
        color: 'black',
    },
})

export default Counter;

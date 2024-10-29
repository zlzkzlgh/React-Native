import React from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = (props) => {

    MyButton.defaultProps = {
        title: 'Button'
    };
    
    MyButton.propTypes = {
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired
    };

    return (
        <Pressable
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8
            }}
            onPress={()=> props.onPress()}
        >
            <Text style={{color: 'white', fontSize: 24}}>
                {props.children || props.title}
            </Text>
        </Pressable>
    );
};


export default MyButton;
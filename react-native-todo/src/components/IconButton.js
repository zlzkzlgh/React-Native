import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { images } from '../Image';

const Icon = styled.Image`
  tint-color: ${({ theme}) => theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`

const IconButton = ({ type, onPressOut}) => {
    return (
      <Pressable onPressOut={onPressOut}>
        <Icon source={type} />
      </Pressable>
    )
  }

IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func
  }
  
export default IconButton;
import { FontAwesomeFreeSolid } from '@react-native-vector-icons/fontawesome-free-solid';
import React from 'react';

const Icon = ({
  name,
  size,
  color,
}: {
  name: any;
  size: number;
  color: string;
}) => {
  return <FontAwesomeFreeSolid name={name} size={size} color={color} />;
};

export default Icon;

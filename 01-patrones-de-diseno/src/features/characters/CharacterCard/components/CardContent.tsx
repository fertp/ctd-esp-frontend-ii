import React, { FC } from 'react';

interface Props {
  name: string;
}

export const CardContent: FC<Props> = ({ name }) => {
  return <span>{name}</span>;
};

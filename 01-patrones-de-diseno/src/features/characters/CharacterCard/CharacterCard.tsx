import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CharacterCard: FC<Props> = ({ children }) => {
  return <div className={'card'}>{children}</div>;
};

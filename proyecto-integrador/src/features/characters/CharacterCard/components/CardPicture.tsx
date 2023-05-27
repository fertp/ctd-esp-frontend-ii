import { type FC } from 'react';

interface Props {
  image: string;
  name: string;
}

export const CardPicture: FC<Props> = ({ image, name }) => {
  return (
    <div className={'card-image'}>
      <img src={image} alt={name} />
    </div>
  );
};

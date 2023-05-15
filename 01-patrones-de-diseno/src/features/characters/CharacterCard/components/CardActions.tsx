import { FollowingButtonComponent } from 'features/following/button';
import {
  addCharacterToFollowingList,
  removeCharacterToFollowingList
} from 'features/following/following.slices';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';

interface Props {
  id: number;
}

export const CardActions: FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const followingIds = useAppSelector((state) => state.following.followingIds);
  const isFav = followingIds.includes(id);

  const onToggleFavorite = (id: number, setFav: boolean) => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(id));
    } else {
      dispatch(removeCharacterToFollowingList(id));
    }
  };

  return (
    <FollowingButtonComponent
      isFav={isFav}
      onToggleFavorite={(setFav) => onToggleFavorite(id, setFav)}
    />
  );
};

export default CardActions;

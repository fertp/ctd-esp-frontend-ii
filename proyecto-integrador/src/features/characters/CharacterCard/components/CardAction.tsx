import { FollowingButtonComponent } from '@/features/following/button'
import { type FC } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  addCharacterToFollowingList,
  removeCharacterToFollowingList
} from '@/features/following/following.slices'

interface Props {
  id: number
}

export const CardActions: FC<Props> = ({ id }) => {
  const followingIds = useAppSelector(state => state.following.followingIds)

  const isFav = followingIds.includes(id)

  const dispatch = useAppDispatch()
  const onToggleFavorite = (id: number, setFav: boolean): void => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(id))
    } else {
      dispatch(removeCharacterToFollowingList(id))
    }
  }

  return (
    <FollowingButtonComponent
      isFav={isFav}
      onToggleFavorite={isFav => {
        onToggleFavorite(id, isFav)
      }}
    />
  )
}

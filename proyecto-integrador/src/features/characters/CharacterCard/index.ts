import { CharacterCard as Card } from './CharacterCard';
import { CardPicture } from './components/CardPicture';
import { CardContent } from './components/CardContent';
import { CardActions } from './components/CardAction';

export const CharacterCard = Object.assign(Card, {
  Picture: CardPicture,
  Content: CardContent,
  Actions: CardActions
});

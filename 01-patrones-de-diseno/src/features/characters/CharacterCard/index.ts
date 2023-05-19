import { CharacterCard as Card } from './CharacterCard';
import { CardActions } from './components/CardActions';
import { CardContent } from './components/CardContent';
import { CardPicture } from './components/CardPicture';

export const CharacterCard = Object.assign(Card, {
  Action: CardActions,
  Content: CardContent,
  Picture: CardPicture
});

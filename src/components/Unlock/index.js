// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  ImageAndTextContainer,
  Image,
  DisplayText,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)

  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altText = isUnlocked ? 'unlock' : 'lock'
  const displayText = isUnlocked
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onClickButton = () => {
    setIsUnlocked(prevState => !prevState)
  }

  return (
    <AppContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} alt={altText} />
        <DisplayText>{displayText}</DisplayText>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </AppContainer>
  )
}

export default Unlock

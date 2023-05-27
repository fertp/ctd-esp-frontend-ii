import { LanguageContext } from '@/features/language'
import { NavDesktop } from '@/features/navigation/desktop'
import { NavMobile } from '@/features/navigation/mobile'
import { type FC, useContext } from 'react'

const Navbar: FC = () => {
  const { translate } = useContext(LanguageContext)

  return (
    <div
      className={'container'}
      style={{ width: '100vw' }}
    >
      <NavDesktop t={translate} />
      <NavMobile t={translate} />
    </div>
  )
}

export default Navbar

import { TwitchEmbed } from 'react-twitch-embed'
import consoles from '../data/consoles'
import './screen.css'
import imgPath from '../assets/tv.png'
import { SelectedConsole } from '../interfaces'

interface Props {
  selectedConsole: SelectedConsole
}

export default function Screen({ selectedConsole }: Props) {
  const consoleInfo = consoles.find(item => item.name === selectedConsole?.name)

  return (
    <div
      id='tv'
      style={{ backgroundImage: `url(${imgPath})` }}
    >
      {consoleInfo && (
        <>
          <TwitchEmbed
            channel={consoleInfo.channel}
            id={consoleInfo.channel}
            // theme='dark'
            muted
            withChat={false}
            style={{
              marginLeft: '10px',
              marginTop: '14px',
              width: 720,
              height: 400
            }}
            onVideoPause={() => console.log(':(')}
          />
          {/* <TwitchChat channel={consoleInfo.channel} theme="dark" /> */}
          {/* <TwitchClip
            clip="WealthyBumblingKimchiItsBoshyTime"
            parent={["mdqoik.csb.app, codesandbox.io"]}
          /> */}
          {/* <TwitchPlayer video={consoleInfo.channel} /> */}
        </>
      )}
    </div>
  )
}

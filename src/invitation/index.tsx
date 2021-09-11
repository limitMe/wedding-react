import { useState, Suspense } from 'react';
import { useIsMobile } from '../component/Viewport'
import ReactFullpage from '@fullpage/react-fullpage'
import useSound from 'use-sound'
import ForestSound from '../sound/forest.mp3'
import OceanSound from '../sound/ocean.mp3'
import CampfireSound from '../sound/campfire.mp3'
import PCPage from '../PC';
import Loading from '../component/Loading'
import Title from './title'
import Beginning from './beginning'
import ItsTime from './itsTime'
import Fireworks from './fireworks'
import Forest from './forest'
import Names from './names'
import Red from './red'
import Detail from './detail'

const Invitation = () => {
  const isMobile = useIsMobile()

  const [playForestSound, forestSoundHelper] = useSound(ForestSound)
  const [playOceanSound, oceanSoundHelper ] = useSound(OceanSound)
  const [playCampfireSound, campfireSoundHelper] = useSound(CampfireSound)

  const [activeScreen, setActiveScreen] = useState(0)
  const afterLoad = (origin: any, destination: any, direction: any) => {
    setActiveScreen(destination.index)
    if (origin.index === 0 && destination.index === 1) {
      playOceanSound()
    } else if (origin.index === 2 && destination.index === 3) {
      oceanSoundHelper.stop()
      playCampfireSound()
    } else if (origin.index === 3 && destination.index === 4) {
      campfireSoundHelper.stop()
      playForestSound()
    } else if (origin.index === 5 && destination.index === 6) {
      forestSoundHelper.stop()
    // reverse
    } else if (origin.index === 6 && destination.index === 5) {
      playForestSound()
    } else if (origin.index === 4 && destination.index === 3) {
      forestSoundHelper.stop()
      playCampfireSound()
    } else if (origin.index === 2 && destination.index === 3) {
      campfireSoundHelper.stop()
      playOceanSound()
    } else if (origin.index === 1 && destination.index === 0) {
      oceanSoundHelper.stop()
    }
  }

  return (
    <>
      {
        isMobile ?
        <ReactFullpage
          licenseKey = {'YOUR_KEY_HERE'}
          scrollingSpeed = {1000}
          afterLoad = {afterLoad}
          // @ts-ignore
          render={({ state, fullpageApi }) => {
            return (
              <Suspense fallback={<Loading />}>
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <Title />
                  </div>
                  <div className="section">
                    <Beginning active={activeScreen === 1} />
                  </div>
                  <div className="section">
                    <ItsTime active={activeScreen === 2} />
                  </div>
                  <div className="section">
                    <Fireworks active={activeScreen === 3} />
                  </div>
                  <div className="section">
                    <Forest active={activeScreen === 4} />
                  </div>
                  <div className="section">
                    <Names active={activeScreen === 5} />
                  </div>
                  <div className="section">
                    <Red active={activeScreen === 6} />
                  </div>
                  <div className="section">
                    <Detail active={activeScreen === 7} />
                  </div>
                </ReactFullpage.Wrapper>
              </Suspense>
            );
          }}
        /> :
        <PCPage></PCPage>
      }
    </>
  )
}

export default Invitation;

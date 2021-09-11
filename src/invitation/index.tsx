import { useState } from 'react';
import { useIsMobile } from '../component/Viewport';
import ReactFullpage from '@fullpage/react-fullpage';
import PCPage from '../PC';
import Title from './title'
import Beginning from './beginning'

const Invitation = () => {
  const isMobile = useIsMobile()

  const [activeScreen, setActiveScreen] = useState(0)
  const afterLoad = (origin: any, destination: any, direction: any) => {
    setActiveScreen(destination.index);
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
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Title />
                </div>
                <div className="section">
                <Beginning active={activeScreen === 1} />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        /> :
        <PCPage></PCPage>
      }
    </>
  )
}

export default Invitation;

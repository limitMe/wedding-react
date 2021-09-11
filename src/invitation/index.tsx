import { useIsMobile } from '../component/Viewport';
import ReactFullpage from '@fullpage/react-fullpage';
import PCPage from '../PC';
import Title from './title'
import Beginning from './beginning'

const Invitation = () => {
  const isMobile = useIsMobile()
  return (
    <>
      {
        isMobile ?
        <ReactFullpage
          licenseKey = {'YOUR_KEY_HERE'}
          scrollingSpeed = {1000}
          // @ts-ignore
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Title />
                </div>
                <div className="section">
                <Beginning />
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

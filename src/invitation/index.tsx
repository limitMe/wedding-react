import { useIsMobile, useViewport } from '../component/Viewport';
import PCPage from '../PC';
import Title from './title'
import Beginning from './beginning'

const Invitation = () => {
  const isMobile = useIsMobile()
  return (
    <>
      {
        isMobile ?
        <>
          <Title />
          <Beginning />
        </> :
        <PCPage></PCPage>
      }
    </>
  )
}

export default Invitation;

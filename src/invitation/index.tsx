import { useIsMobile, useViewport } from '../component/Viewport';
import PCPage from '../PC';

const Invitation = () => {
  const isMobile = useIsMobile()
  return (
    <>
      {
        isMobile ?
        <div /> :
        <PCPage></PCPage>
      }
    </>
  )
}

export default Invitation;

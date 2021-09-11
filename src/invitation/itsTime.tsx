import Page from '../component/Page'
import useSound from 'use-sound'
import Typist from 'react-typist'
import shipHorn from '../sound/ship_horn.mp3'
import DownArrow from '../component/DownArrow'

const ItsTime = (props: any) => {
  return (
    <Page className="its_time" style={{
      backgroundImage: 'url("/images/its_time.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {
        props.active ?
        <>
          <DownArrow delay={5000} />
        </> : null
      }
    </Page>
  )
}

export default ItsTime;

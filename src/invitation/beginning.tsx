import Page from '../component/Page'
import useSound from 'use-sound'
import Typist from 'react-typist'
import './beginning.scss'
import shipHorn from '../sound/ship_horn.mp3'
import DownArrow from '../component/DownArrow'

const Beginning = (props: any) => {
  const [play] = useSound(shipHorn);
  if (props.active) {
    play()
  }
  return (
    <Page className="beginning" style={{
      backgroundImage: 'url("/images/beginning.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {
        props.active ?
        <>
          <div className="story">
            <Typist>
              十一年前，江边的校园里
              <br />
              <br />
              坐在靠窗第三排的男主
              <br />
              看见了人群中最亮眼的女主
            </Typist>
          </div>
          <DownArrow delay={5000}/>
        </>
        :
        null
      }
      
    </Page>
  )
}

export default Beginning;

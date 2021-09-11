import Page from '../component/Page'
import useSound from 'use-sound'
import Typist from 'react-typist'
import './beginning.scss'
import shipHorn from '../sound/ship_horn.mp3'
import DownArrow from '../component/DownArrow'

const Beginning = (props: any) => {
  const [play] = useSound(shipHorn, {
    volume: 0.2
  });
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
              <br />
              <br />
              Our story begins
              <br />
              故事开始了
              <br />
              但又没完全开始
              <br />
              <br />
              时间像一条大河
              <br />
              起起伏伏
              <br />
              把他们推向分开又重逢的旅途
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

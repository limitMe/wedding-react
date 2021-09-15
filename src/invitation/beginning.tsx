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
            十一年前，江风柔凉
            <br />
            轻飘飘地吹进少年的衣袖
            <br />
            他坐在教室靠窗第三排的位置
            <br />
            看着热腾腾人群里格外耀眼的女孩
            <br />
            于是故事
            <br />像电视剧情节般展开...
            <br />
            <br />
            十一年里，江水荡漾
            <br />
            少年和女孩在时光的长河里
            <br />
            抱紧又推开，离散又重逢...
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

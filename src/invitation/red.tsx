import Page from '../component/Page'
import DownArrow from '../component/DownArrow'
import Typist from 'react-typist'
import { useViewport } from '../component/Viewport'
import './red.scss'

const Red = (props: any) => {
  return (
    <Page className="red" style={{
      backgroundImage: 'url("/images/red.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {
        props.active ?
        <>
          <div className="text">
            <Typist>
            爱情旅途要启航了
            <br />
            这个闪光的日子
            <br />
            <br />
            期待有你
            </Typist>
          </div>
          <DownArrow delay={5000} />
        </> : null
      }
    </Page>
  )
}

export default Red;

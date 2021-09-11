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
              一场青春的盛筵
              <br />
              等你来
            </Typist>
          </div>
          <DownArrow delay={5000} />
        </> : null
      }
    </Page>
  )
}

export default Red;

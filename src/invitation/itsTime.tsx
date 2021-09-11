import Page from '../component/Page'
import Typist from 'react-typist'
import Particles from 'react-particles-js';
import DownArrow from '../component/DownArrow'
import { useViewport } from '../component/Viewport'
import './itsTime.scss'

const ItsTime = (props: any) => {
  const { width, height } = useViewport()

  return (
    <Page className="its_time" style={{
      backgroundImage: 'url("/images/its_time.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{
        height: height + 'px',
        width: width + 'px',
        position: 'absolute',
        zIndex: 2,
        backgroundImage: 'url("/images/its_time_sky.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
      <Particles
        width={(width-4).toString() + 'px'}
        height='300px'
        style={{
          height: '300px',
          width: width + 'px',
          position: 'absolute',
          zIndex: 3,
        }}
        params={{
          "particles": {
              "number": {
                  "value": 280,
                  "density": {
                      "enable": true,
                      "value_area": 1500
                  }
              },
              "line_linked": {
                  "enable": true,
                  "frequency": 0.3,
                  "opacity": 0.1
              },
              "move": {
                  "direction": "right",
                  "speed": 0.05
              },
              "size": {
                  "value": 2
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.3
                  }
              }
          },
          "retina_detect": true
      }} />
      {
        props.active ?
        <>
          <div className="text">
            <Typist>
              转瞬间
              <br />
              四千日月尽
              <br />
              <br />
              恰今朝
              <br />
              三星在天时
              <br />
              <br />
              终于来到这一刻...
            </Typist>
          </div>
          <DownArrow delay={5000} />
        </> : null
      }
    </Page>
  )
}

export default ItsTime;

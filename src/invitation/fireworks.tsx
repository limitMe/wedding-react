import Page from '../component/Page'
import Particles from 'react-particles-js';
import DownArrow from '../component/DownArrow'
import { useViewport } from '../component/Viewport'
import { useSpring, animated } from '@react-spring/web'

const Fireworks = (props: any) => {
  const { width, height } = useViewport()
  const copyAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    pause: !props.active,
    config: {
      duration: 600,
    }
  })

  return (
    <Page className="fireworks" style={{
      backgroundImage: 'url("/images/fireworks.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {
        props.active ?
        <>
          <Particles
            width={(width-4).toString() + 'px'}
            height={(height-4).toString() + 'px'}
            style={{
              height: height + 'px',
              width: width + 'px',
              position: 'absolute',
              zIndex: 3,
            }}
            params={{
              "particles": {
                  "color": {
                    "value": "#ff9933",
                  },
                  "number": {
                      "value": 160,
                      "density": {
                          "enable": false
                      }
                  },
                  "size": {
                      "value": 5,
                      "random": true,
                      "anim": {
                          "speed": 7,
                          "size_min": 0.3
                      }
                  },
                  "line_linked": {
                      "enable": false
                  },
                  "move": {
                      "random": true,
                      "speed": 1,
                      "direction": "top",
                      "out_mode": "out"
                  }
              }
          }} />
          <animated.div style={{
            height: height + 'px',
            width: width + 'px',
            position: 'absolute',
            zIndex: 2,
            backgroundImage: 'url("/images/fireworks_copy.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...copyAnimation
          }} />
          <DownArrow delay={600} />
        </> : null
      }
    </Page>
  )
}

export default Fireworks;

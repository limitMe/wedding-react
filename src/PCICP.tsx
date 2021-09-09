import Particles from 'react-particles-js';
import { useViewport } from './component/Page';
import './PCICP.scss';

const PCICP = () => {
  const { width, height } = useViewport()
  return (
    <div className="PCICP">
      <div className="photo-wrapper" style={{
          width,
          height
        }}>
        <img src="./pcbg.jpg" style={{
          width,
          height,
          objectFit: 'cover'
        }}/>
      </div>
      <div className="particles-wrapper" style={{
          width,
          height
        }}>
        <Particles
          width={(width-4).toString() + 'px'}
          height={(height-4).toString() + 'px'}
          params={{
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
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
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 4
                    }
                }
            }
        }} />
      </div>
      <div className="text-wrapper" style={{
        left: width/20 + 'px',
        top: '50px',
        width: width/2.5 + 'px',
        height: (height - 3 * 50) + 'px'
      }}>
        <div className="main-text" style={{
            paddingTop: height/5 + 'px'
        }}>
          <p>钟典和徐颖</p>
          <p>婚礼将于2021年9月21日举行</p>
        </div>
      </div>
      <div className="icp-text">
        <p>京ICP备15030957号-2</p>
      </div>
    </div>
  );
}

export default PCICP;

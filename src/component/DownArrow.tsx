import { useState, useEffect } from 'react'
import { useViewport } from './Viewport';
import { useSpring, animated } from '@react-spring/web'

const DownArrow = (props: { delay?: number}) => {
  const { width } = useViewport()
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, props.delay ?? 0)
  }, [show])

  const arrowAnimation = useSpring({
    loop: true,
    from: { y: 0, opacity: 0.3 },
    to: { y: 12, opacity: 0.7 },
    config: {
      duration: 1200,
    },
  })
  return (
    show ?
    <animated.div style={{
      position: 'absolute',
      width: width + 'px',
      textAlign: 'center',
      fontSize: '20px',
      color: '#fff',
      zIndex: 3,
      bottom: '30px',
      ...arrowAnimation
    }}>
      <img src='/images/icons/scroll_down_white.png' style={{
          height: '20px',
          width: '20px',
        }}>
      </img>
    </animated.div> : null
  )
}

export default DownArrow;

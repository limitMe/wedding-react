import Page from '../component/Page'
import { useViewport } from '../component/Viewport';
import { useSpring, animated } from '@react-spring/web'
import DownArrow from '../component/DownArrow'

const Title = () => {
  const { width, height } = useViewport()
  const copy1Animation = useSpring({
    from: { top: 400, left: -400, opacity: 0 },
    to: { top: 0, left: 0, opacity: 1 },
    delay: 1000,
    config: {
      duration: 400,
    }
  })

  const copy2Animation = useSpring({
    from: { top: -400, left: 400, opacity: 0 },
    to: { top: 0, left: 0, opacity: 1 },
    delay: 1500,
    config: {
      duration: 600,
    }
  })

  const hintAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2400,
    config: {
      duration: 1000,
    }
  })

  return (
    <Page style={{
      backgroundImage: 'url("/images/title.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <animated.div style={{
        height: height + 'px',
        width: width + 'px',
        position: 'absolute',
        zIndex: 2,
        backgroundImage: 'url("/images/title_copy_1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...copy1Animation
      }} />
      <animated.div style={{
        height: height + 'px',
        width: width + 'px',
        position: 'absolute',
        zIndex: 3,
        backgroundImage: 'url("/images/title_copy_2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...copy2Animation
      }} />
      <animated.div style={{
        position: 'absolute',
        width: width + 'px',
        textAlign: 'center',
        fontSize: '20px',
        color: '#fff',
        zIndex: 3,
        bottom: '50px',
        ...hintAnimation
      }}>
        <p>
          诚邀共见
        </p>
      </animated.div>
      <DownArrow />
    </Page>
  )
}

export default Title;

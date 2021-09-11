import Page from '../component/Page'
import DownArrow from '../component/DownArrow'
import { useViewport } from '../component/Viewport'
import { useSpring, animated } from '@react-spring/web'

const Forest = (props: any) => {
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
    <Page className="forest" style={{
      backgroundImage: 'url("/images/forest.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {
        props.active ?
        <>
          <animated.div style={{
            height: height + 'px',
            width: width + 'px',
            position: 'absolute',
            zIndex: 2,
            backgroundImage: 'url("/images/forest_copy.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...copyAnimation
          }} />
          <DownArrow delay={5000} />
        </> : null
      }
    </Page>
  )
}

export default Forest;

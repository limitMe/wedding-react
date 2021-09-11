import Page from '../component/Page'
import DownArrow from '../component/DownArrow'
import { useViewport } from '../component/Viewport'
import { useSpring, animated } from '@react-spring/web'

const Names = (props: any) => {
  const { width, height } = useViewport()
  const copy1Animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    pause: !props.active,
    config: {
      duration: 600,
    }
  })
  const copy2Animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    pause: !props.active,
    delay: 800,
    config: {
      duration: 600,
    }
  })
  const copy3Animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    pause: !props.active,
    delay: 1600,
    config: {
      duration: 600,
    }
  })
  const copy4Animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    pause: !props.active,
    delay: 2400,
    config: {
      duration: 600,
    }
  })

  return (
    <Page className="names" style={{
      backgroundImage: 'url("/images/names.jpg")',
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
            backgroundImage: 'url("/images/names_copy_1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...copy1Animation
          }} />
          <animated.div style={{
            height: height + 'px',
            width: width + 'px',
            position: 'absolute',
            zIndex: 2,
            backgroundImage: 'url("/images/names_copy_2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...copy2Animation
          }} />
          <animated.div style={{
            height: height + 'px',
            width: width + 'px',
            position: 'absolute',
            zIndex: 2,
            backgroundImage: 'url("/images/names_copy_3.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...copy3Animation
          }} />
          <animated.div style={{
            height: height + 'px',
            width: width + 'px',
            position: 'absolute',
            zIndex: 2,
            backgroundImage: 'url("/images/names_copy_4.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...copy4Animation
          }} />
          <DownArrow delay={3000} />
        </> : null
      }
    </Page>
  )
}

export default Names;

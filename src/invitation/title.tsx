import Page from '../component/Page'
import Viewport, { useViewport } from '../component/Viewport';

const Title = () => {
  const { width, height } = useViewport()
  return (
    <Page style={{
      backgroundImage: 'url("/images/title.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{
        height: height + 'px',
        width: width + 'px',
        position: 'absolute',
        zIndex: 2,
        backgroundImage: 'url("/images/title_copy_1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
      <div style={{
        height: height + 'px',
        width: width + 'px',
        top: 0,
        position: 'absolute',
        zIndex: 3,
        backgroundImage: 'url("/images/title_copy_2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
    </Page>
  )
}

export default Title;

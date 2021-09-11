import Page from '../component/Page'
import DownArrow from '../component/DownArrow'

const Fireworks = (props: any) => {
  return (
    <Page className="fireworks" style={{
      backgroundImage: 'url("/images/fireworks.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {
        props.active ?
        <>
          <DownArrow delay={5000} />
        </> : null
      }
    </Page>
  )
}

export default Fireworks;

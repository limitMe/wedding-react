import Page from '../component/Page'
import DownArrow from '../component/DownArrow'

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
          <DownArrow delay={5000} />
        </> : null
      }
    </Page>
  )
}

export default Red;

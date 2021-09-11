import Page from '../component/Page'
import DownArrow from '../component/DownArrow'

const Forest = (props: any) => {
  return (
    <Page className="forest" style={{
      backgroundImage: 'url("/images/forest.jpg")',
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

export default Forest;

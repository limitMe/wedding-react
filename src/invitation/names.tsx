import Page from '../component/Page'
import DownArrow from '../component/DownArrow'

const Names = (props: any) => {
  return (
    <Page className="names" style={{
      backgroundImage: 'url("/images/names.jpg")',
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

export default Names;

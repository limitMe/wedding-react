import Page from '../component/Page'
import DownArrow from '../component/DownArrow'
import Typist from 'react-typist'
import './fireworks.scss'

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
          <div className="copy">
            <Typist>
              爱是焰火在手心
            </Typist>
          </div>
          <DownArrow delay={5000} />
        </> : null
      }
    </Page>
  )
}

export default Fireworks;

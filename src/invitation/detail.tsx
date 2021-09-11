import Page from '../component/Page'
import { useViewport } from '../component/Viewport'
import { Amap, Marker } from '@amap/amap-react'
import './detail.scss'

const Detail = (props: any) => {
  const { width, height } = useViewport()

  return (
    <Page className="detail">
      {
        <>
          <img
            src='/images/hotel.jpg'
            alt=''
            height={width/16*9 + 'px'}
            width='100%'
          />
          <img
            src='/images/detail.png'
            height={width/2.76 + 8 + 'px'}
            alt=''
            width='100%'
            style={{
              objectFit: 'cover',
              marginTop: '-6px',
            }}
          />
          <div style={{ width: '100%', height: height - width/16*9 - width/2.76 - 2 + 'px', marginTop: '-6px'}}>
            <Amap
              mapStyle="amap://styles/whitesmoke"
              zoom={14}
              center={[106.571068,29.664315]}
            >
              <Marker
                position={[106.571068,29.664315]}
                label={{
                  content: '保利花园皇冠假日酒店',
                  direction: 'bottom',
                }}
              />
            </Amap>
          </div>
        </>
      }
    </Page>
  )
}

export default Detail;

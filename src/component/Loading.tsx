import Page from './Page'
import { useViewport } from '../component/Viewport'

const Loading = (props: any) => {
  const { width, height } = useViewport()
  return (
    <Page className="red" style={{
      backgroundColor: '#504436',
      textAlign: 'center'
    }}>
      <p style={{
        lineHeight: height + 'px',
        fontSize: '20px',
        color: '#fff',
        fontWeight: 600  
      }}>
        加载中，禁用静音模式以取得更好效果
      </p>
    </Page>
  )
}

export default Loading;

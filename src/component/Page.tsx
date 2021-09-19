import { useViewport } from './Viewport';

const Page = (props: any) => {
  const { width, height } = useViewport()
  return (
    <div className={props.className ? `${props.className} page`: 'page'} style={{
      height: height,
      width: width,
      ...props.style
    }}>
      {props.children}
    </div>
  )
}

export default Page;

import { useViewport } from './Viewport';

const Page = (props: any) => {
  const { width, height } = useViewport()
  return (
    <div className="page" style={{
      ...props.style,
      height: height,
      width: width
    }}>
      {props.children}
    </div>
  )
}

export default Page;

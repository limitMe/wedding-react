import React from 'react';

const viewportContext = React.createContext({} as any);

const ViewportProvider = ({ children }: any) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

// You can add break point to layout mobile and pc differently

const Page = (props: any) => {
  const { width, height } = React.useContext(viewportContext);
  return (
    <ViewportProvider>
      <div className="page" style={{
        height: height,
        width: width
      }}>
        {props.children}
      </div>
    </ViewportProvider>
  );
}

export  { useViewport };
export default Page;

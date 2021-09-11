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

const useIsMobile = () => {
  const { width, height } = React.useContext(viewportContext);
  return height / width > 1.3 ? true : false;
};

const Viewport = (props: any) => {
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

export  { useViewport, useIsMobile };
export default Viewport;

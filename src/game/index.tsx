import { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { get } from './Fetch';

const Game = () => {
  const fetchMainData = async () => {
    const result = await get('/');
  }
  useEffect(() => {
    fetchMainData();
  }, [])

  return  <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}
    // @ts-ignore
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" style={{
            backgroundColor: '#0f0'
          }}>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
}

export default Game;
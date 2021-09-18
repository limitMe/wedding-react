import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { get } from './Fetch';

const Admin = () => {

  const fetchAdminData = async () => {
    const result = await get('/admin', 'admin');
    console.log(result)
  }

  useEffect(() => {
    fetchAdminData();
  });

  return  <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}
    // @ts-ignore
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" style={{
            backgroundColor: '#0ff'
          }}>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
}

export default Admin
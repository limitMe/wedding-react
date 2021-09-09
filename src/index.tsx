import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Page from './component/Page'
import PCICP from './PCICP';

ReactDOM.render(
  <React.StrictMode>
    <Page>
      <PCICP />
    </Page>
  </React.StrictMode>,
  document.getElementById('root')
);

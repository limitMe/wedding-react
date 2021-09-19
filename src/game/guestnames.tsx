import { useState, useEffect } from 'react';
import { List, Carousel } from 'antd-mobile';
import 'antd-mobile/lib/list/style/css';
import 'antd-mobile/lib/carousel/style/css';
import { get } from './Fetch';
import exp from 'constants';

const Item = List.Item;

const GuestNames = () => {
  const [data, setData] = useState<any>({});

  const fetchData = async () => {
    const result = await get('/allNames');
    console.log(result)
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return data && data.data ? <List renderHeader={() => '嘉宾姓名'} className="my-list">
    {
      data.data.map((guestName: any) => {
        return <Item multipleLine extra="" key={guestName}>
          { guestName }
        </Item>
      })
    }
  </List>: null
}

export default GuestNames;
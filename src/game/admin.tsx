import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { List, Carousel } from 'antd-mobile';
import 'antd-mobile/lib/list/style/css';
import 'antd-mobile/lib/carousel/style/css';
import { get } from './Fetch';
import Emoji from './Emoji';

const Item = List.Item;
const Brief = Item.Brief;

const NumberPanel = (props: { title: string, numberLine: string, backgroundColor: string }) => {
  return (
    <a
      style={{
        display: 'inline-block',
        width: '100%',
        height: '120px',
        textAlign: 'center',
        backgroundColor: props.backgroundColor
        }}>
      <p style={{fontSize: '16px', fontWeight: 'bold'}}>{props.title}</p>
      <p style={{fontSize: '24px', fontWeight: 'bold'}}>{props.numberLine}</p>
    </a>
  )
}

const Admin = () => {

  const [data, setData] = useState<any>({});

  const fetchAdminData = async () => {
    const result = await get('/admin', 'admin');
    setData(result);
  }

  useEffect(() => {
    fetchAdminData();
  }, []);

  const search = useLocation().search;
  const passcode=new URLSearchParams(search).get("passcode");
  return(
    data && data.success && passcode === 'zddsg' ?
    <div>
      <Carousel
        autoplay={true}
        infinite
      >
        <NumberPanel title="金奖候选人" numberLine={data.totalGoldenNum} backgroundColor="#DFB55A" />
        <NumberPanel title="银奖候选人" numberLine={data.totalSilverNum} backgroundColor="#BABABA" />
        <NumberPanel title="第二关线索还剩" numberLine={data.leftToken2} backgroundColor="#904020" />
        <NumberPanel title="第三关线索还剩" numberLine={data.leftToken3} backgroundColor="#3FB57A" />
      </Carousel>
      <List renderHeader={() => '金奖嘉宾'} className="my-list">
        {
          // @ts-ignore
          data.goldenWinners && data.goldenWinners.length > 0 ? data.goldenWinners.map(guest => {
            return (
              <Item multipleLine extra={`${guest.correctAnswer}:[${guest.answer1},${guest.answer2}]`} key={guest.name}>
                { guest.name }
                <Brief>
                  { guest.number }
                </Brief>
              </Item>
            )
          }) : <Item extra="" key="none"> 暂无人完成挑战 </Item>
        }
      </List>
      <List renderHeader={() => '银奖嘉宾'} className="my-list">
        {
          // @ts-ignore
          data.silverWinners && data.silverWinners.length > 0 ? data.silverWinners.map(guest => {
            return (
              <Item multipleLine extra={`${guest.correctAnswer}:[${guest.answer1},${guest.answer2}]`} key={guest.name}>
                { guest.name }
                <Brief>
                  { guest.number }
                </Brief>
              </Item>
            )
          }) : <Item extra="" key="none"> 暂无人完成挑战 </Item>
        }
      </List>
      <List renderHeader={() => '陪跑嘉宾'} className="my-list">
        {
          // @ts-ignore
          data.peipaoGuests ? data.peipaoGuests.map(guest => {
            return (
              <Item multipleLine extra={`${guest.correctAnswer}:[${guest.answer1},${guest.answer2}]`} key={guest.name}>
                { guest.name }
                <Brief>
                  线索2: {
                    guest.character2Revealed ? <Emoji symbol="✅" /> : <Emoji symbol="❌" />
                  } 线索3: {
                    guest.character3Revealed ? <Emoji symbol="✅" /> : <Emoji symbol="❌" />
                  }
                </Brief>
              </Item>
            )
          }) : null
        }
      </List>
    </div> : <h1>数据加载失败</h1>
  )
}

export default Admin
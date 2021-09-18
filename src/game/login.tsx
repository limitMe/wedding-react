import { useState, useEffect } from 'react';
import { Flex } from 'antd-mobile';
import 'antd-mobile/lib/flex/style/css';
import Page from '../component/Page';
import './login.scss';

const AUTH_KEY = 'auth_key';

const Constellation = (props: {
  imageName: string,
  name: string,
  date: string,
  selected: boolean,
  onClick: any,
}) => {
  return (
    <button onClick={props.onClick} className="zodiac" style={{
      opacity: props.selected ? 1: 0.5
    }}>
      <div className="constellation">
        <img src={`/images/zodiac/${props.imageName}.png`} />
        <p className="name">{props.name}</p>
        <p className="date">{props.date}</p>
      </div>
    </button>
  )
}

const Login = () => {
  const [name, setName] = useState('');
  const [zodiac, setZodiac] = useState('');

  useEffect(() => {
    const key = localStorage.getItem(AUTH_KEY);
    if (key !== undefined && key !== '') {
      window.location.href = '/game';
    }
  }, [])

  return (
    <Page className="login" style={{
      backgroundImage: 'url("/images/game_login.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{ maxHeight: '100%', overflow: 'scroll' }}>
        <p className="hint">
          使用您自己的姓名作为凭证进入游戏<br />选择您的星座来验证身份 <br /> 滑到最底部登录
        </p>
        <div className="nameInput">
          <input placeholder="输入您的姓名" onChange={(e) => setName(e.target.value)}/>
        </div>
        <Flex className="flexLine">
          <Flex.Item>
            <Constellation imageName="aqua" name="水瓶座" date="1.20～2.18" selected={zodiac === '水瓶座'} onClick={() => setZodiac('水瓶座')}/>
          </Flex.Item>
          <Flex.Item>
            <Constellation imageName="pisces" name="双鱼座" date="2.19～3.20" selected={zodiac === '双鱼座'} onClick={() => setZodiac('双鱼座')}/>
          </Flex.Item>
          <Flex.Item>
            <Constellation imageName="aries" name="白羊座" date="3.21~4.19" selected={zodiac === '白羊座'} onClick={() => setZodiac('白羊座')}/>
          </Flex.Item>
        </Flex>
        <Flex className="flexLine">
          <Flex.Item>
            <Constellation imageName="taurus" name="金牛座" date="4.20～5.20" selected={zodiac === '金牛座'} onClick={() => setZodiac('金牛座')}/>
          </Flex.Item>
          <Flex.Item>
            <Constellation imageName="gemini" name="双子座" date="5.21～6.21" selected={zodiac === '双子座'} onClick={() => setZodiac('双子座')}/>
          </Flex.Item>
          <Flex.Item>
            <Constellation imageName="cancer" name="巨蟹座" date="6.22~7.22" selected={zodiac === '巨蟹座'} onClick={() => setZodiac('巨蟹座')}/>
          </Flex.Item>
        </Flex>
        <Flex className="flexLine">
          <Flex.Item>
            <Constellation imageName="leo" name="狮子座" date="7.23～8.22" selected={zodiac === '狮子座'} onClick={() => setZodiac('狮子座')}/>
          </Flex.Item>
          <Flex.Item>
            <Constellation imageName="virgo" name="处女座" date="8.23～9.22" selected={zodiac === '处女座'} onClick={() => setZodiac('处女座')}/>
          </Flex.Item>
          <Flex.Item>
            <Constellation imageName="libra" name="天秤座" date="9.23~10.23" selected={zodiac === '天秤座'} onClick={() => setZodiac('天秤座')}/>
          </Flex.Item>
        </Flex>
        <Flex className="flexLine">
          <Flex.Item>
            <Constellation imageName="scorp" name="天蝎座" date="10.24~11.22" selected={zodiac === '天蝎座'} onClick={() => setZodiac('天蝎座')}/>
          </Flex.Item>
          <Flex.Item>
            <Constellation imageName="sagi" name="射手座" date="11.23～12.21" selected={zodiac === '射手座'} onClick={() => setZodiac('射手座')}/>
          </Flex.Item>
          <Flex.Item>
            <Constellation imageName="capri" name="摩羯座" date="12.22~1.19" selected={zodiac === '摩羯座'} onClick={() => setZodiac('摩羯座')}/>
          </Flex.Item>
        </Flex>
        <button className="action" onClick={
          () => {
            const cookie = encodeURIComponent(`${name}-${zodiac}`);
            localStorage.setItem(AUTH_KEY, cookie);
            window.location.href = '/game';
          }
        }>
          <div className="innerButton">
            登录
          </div>
        </button>
      </div>
    </Page>
  )
}

export default Login;
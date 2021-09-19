import { useState, useEffect } from 'react';
import { Carousel } from 'antd-mobile';
import 'antd-mobile/lib/carousel/style/css';
import { get, post } from './Fetch';
import { useViewport } from '../component/Viewport'
import Page from '../component/Page';
import './index.scss'

enum PageState {
  default,
  inputToken,
  inputAnswer
}

const GameCard = (props: {
  imageName: string,
  title: string,
  info: string
}) => {

  const { width } = useViewport();

  return (
    <div className="gameCard">
      <img className="bgImage" src={`/images/game_${props.imageName}.png`} />
      <p className="title">{props.title}</p>
      {
        props.info.length < 3 ? 
        <p className="info infoNumber" style={{
          lineHeight: width * 0.8 + 'px'
        }}>
          {props.info}
        </p> :
        <p className="info">
          {props.info}
        </p>
      }
      
    </div>
  )
}

const Game = () => {
  const [data, setData] = useState<any>({});
  const [pageState, setState] = useState(PageState.default);
  const [inputResult, setInputResult] = useState('');
  const { width } = useViewport();

  const fetchMainData = async () => {
    const result = await get('/');
    setData(result);
  }

  const activateToken = async () => {
    const result = await post('/activateToken', {
      token: inputResult
    })
    if (!result.success) {
      alert(result.message ?? '服务器返回错误');
    } else {
      alert('恭喜解锁新的线索！');
    }
    await fetchMainData();
    setState(PageState.default);
  }

  const  answer = async () => {
    const result = await post('/answer', {
      answer: inputResult
    })
    if (!result.success) {
      alert(result.message ?? '服务器返回错误');
    } else {
      alert('恭喜回答正确，请记住您的金奖编号！');
    }
    await fetchMainData();
    setState(PageState.default);
  }
  
  useEffect(() => {
    fetchMainData();
  }, []);

  if (data && data.success === false) {
    return <h1>服务器返回错误</h1>
  }
  
  // main data
  let cards = [
    {
      imageName: 'clue',
      title: '线索1',
      info: data.character1 && data.character1 !== '' ? data.character1: '该线索尚未被发现'
    },
    {
      imageName: 'clue',
      title: '线索2',
      info: data.character2 && data.character2 !== '' ? data.character2: '该线索尚未被发现'
    },
    {
      imageName: 'clue',
      title: '线索3',
      info: data.character3 && data.character2 !== '' ? data.character3: '该线索尚未被发现'
    }
  ]
  if (data.silverNum && data.silverNum !== 0) {
    cards.push({
      imageName: 'silver',
      title: '银奖编号',
      info: String(data.silver)
    })
  }
  if (data.goldenNum && data.goldenNum !== 0) {
    cards.push({
      imageName: 'golden',
      title: '金奖编号',
      info: String(data.goldenNum)
    })
  }

  return data ? 
    <Page className="login" style={{
      backgroundImage: 'url("/images/game_login.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
      touchAction: 'pan-x' // forbid scrolling and zooming in safari
    }}>
      { 
        pageState === PageState.default ?
          <Carousel
            autoplay={false}
            infinite
            style={{
              height: '80%'
            }}
            dots={false}
          >
            {
              cards.map(card => (
                <GameCard
                  imageName={card.imageName}
                  title={card.title}
                  info={card.info}
                />
              ))
            }
          </Carousel> :
          <div className="inputPanel">
            <div className="textInput">
              <input
                placeholder={
                  (() => {
                    switch(pageState) {
                      case PageState.inputToken: return '输入口令解锁线索';
                      case PageState.inputAnswer: return '输入TA的姓名';
                      default: return '';
                    }
                  })()
                }
                onChange={(e) => setInputResult(e.target.value)}/>
            </div>
            {
              (() => {
                switch(pageState) {
                  case PageState.inputToken: return (
                    <div className="description">
                      <ul>
                        <li>每个口令只能解锁一次</li>
                        <li>直接输入口令文字，如果正确，系统自动解锁对应关卡的线索</li>
                        <li>不需要打标点，系统会自动过滤掉所有标点</li>
                        <li>解锁所有线索后，您会被分配一个银奖编号，用于抽奖</li>
                        <li>连续输错10次后会被标记作弊</li>
                      </ul>
                    </div>
                  )
                  case PageState.inputAnswer: return (
                    <div className="description">
                      <ul>
                        <li>整个游戏期间，您只有两次输入最终答案的机会</li>
                        <li>一旦用掉所有答题机会，您也不能再额外获得新的线索了</li>
                        <li>使用对方的全名，如有可能询问对方进入游戏时所输入的名字</li>
                        <li>回答正确后，您会被分配一个金奖编号，用于抽奖</li>
                        <li><a href="/game/names">查看全体来宾姓名</a></li>
                      </ul>
                    </div>
                  )
                  default: return null;
                }
              })()
            }
          </div>
      }
      {
        data.chanceUsedUp === false ?
        <div className="footer">
          {
            pageState === PageState.default ?
            <>
              <button
                className="actionButton"
                disabled={data.silverNum !== 0}
                onClick={() => {
                  setState(PageState.inputToken)
                }}
              >
                <img src="/images/game_arrow.png" />
                <span>解锁线索</span>
              </button>
              <button
                className="actionButton"
                disabled={data.goldenNum !== 0}
                onClick={() => {
                  setState(PageState.inputAnswer)
                }}
              >
                <img src="/images/game_sword.png" />
                <span>回答谜题</span>
              </button>
            </> : 
            <>
              <button
                className="actionButton"
                onClick={() => {
                  setState(PageState.default);
                }}
              >
                <img src="/images/game_defense.png" />
                <span style={{
                  paddingLeft: '16px',
                  paddingRight: '16px'
                }}>返回</span>
              </button>
              <button
                className="actionButton"
                disabled={inputResult === ''}
                onClick={() => {
                  if (pageState === PageState.inputToken) {
                    activateToken();
                  } else if (pageState === PageState.inputAnswer) {
                    answer();
                  }
                }}
              >
                <img src="/images/game_magic.png" />
                <span style={{
                  paddingLeft: '16px',
                  paddingRight: '16px'
                }}>确定</span>
              </button>
            </>
          }
        </div>: null
      }
    </Page> : null
}

export default Game;
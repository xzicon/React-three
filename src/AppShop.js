import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import lunbo from './商城_02.jpg';
import { SearchBar, Button, WhiteSpace } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import gouwuche from './购物车.png'
import youhui from './优惠券.png'
import kefu from './客服.png'
import shoucang from './收藏.png'
import guanzhu from './关注.png'
import dizhi from './地址.png'
import { Flex} from 'antd-mobile';
import s from './商城_05.jpg'
import ss from './商城_07.jpg'
import appshop_icon from './购物车.png'
import { NavBar, Icon, Tabs } from 'antd-mobile';
const sss =[s,ss]
const data = Array.from(new Array(10)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));
const data1 = Array.from(new Array(10)).map(() => ({
    icon:[gouwuche,youhui,kefu,shoucang,guanzhu,dizhi,gouwuche,gouwuche,gouwuche]
}));
const c=['pink','orange','yellow','green','blue','orange','brown','pink','green','green','green'];
const data3 = Array.from(new Array(4)).map(() => ({
    icon:[gouwuche,youhui]
}));
const wenzi=['Too Art Studion欧式风格精细研磨','顺顺工艺欧式风格塑料外框黑色']
export default class AppShop extends Component {
    state = {
        data: ['1', '2', '3','4'],
        disabled: false,
        ss: ['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类'],
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: [lunbo,lunbo,lunbo,lunbo],
          });
        }, 100);
    }
    onChange= (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    render() {
        return (
            <div style={{width:'100%'}}>
                    <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        // <p className="appshop_icon"></p>
                        <img src={appshop_icon} style={{width:'30px'}}/>
                    ]}
                    >商城</NavBar>
                <WingBlank style={{width:'100%',marginLeft:"0px",position:'relative'}}>
                        <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.data.map((val,idx) => (
                            <img key={idx}
                                src={`${val}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top'}}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                        </Carousel>
                        <SearchBar placeholder="输入关键字搜索" maxLength={8} style={{opacity:'0.9',position:'absolute',width:'100%',top:'0px'}}/>
                    </WingBlank>

                    <Grid data={data1}
                        columnNum={5}
                        renderItem={(dataItem,idx) => (
                            <div style={{ padding: '12.5px' }}>
                            <img src={dataItem.icon[idx]} style={{ width: '45px', height: '45px' ,borderRadius:'50px',backgroundColor:c[idx]}} alt="" />
                            <div style={{ color: '#888', fontSize: '10px', marginTop: '12px' }}>
                                <span>{this.state.ss[idx]}</span>
                            </div>
                            </div>
                        )}
                    />
                    <Flex>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={sss[0]} style={{width:'100%'}}/>
                            <div>
                                <span>{wenzi[0]}</span>    
                                <br/>
                                <span>$39.95</span>  
                            </div>    
                        </Flex.Item>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={sss[1]} style={{width:'100%'}}/>
                            <div>
                                <span>{wenzi[0]}</span>    
                                <br/>
                                <span>$39.95</span>  
                            </div>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={sss[0]} style={{width:'100%'}}/>
                            <div>
                                <span>{wenzi[0]}</span>    
                                <br/>
                                <span>$39.95</span>  
                            </div>    
                        </Flex.Item>
                    </Flex>
            </div> 
        );
    }
}
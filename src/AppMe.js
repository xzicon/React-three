import React, { Component } from 'react'
import shezhi from './设置.png'
import imm from './我的_02.jpg'
import touxiang from './我的_05.jpg'
import { List } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import gouwuche from './购物车.png'
import youhui from './优惠券.png'
import kefu from './客服.png'
import shoucang from './收藏.png'
import guanzhu from './关注.png'
import dizhi from './地址.png'
import { NavBar, Icon, Tabs } from 'antd-mobile';
const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));
const data1 = Array.from(new Array(9)).map(() => ({
  icon:[gouwuche,youhui,kefu,shoucang,guanzhu,dizhi,gouwuche,gouwuche,gouwuche]
}));
const Item = List.Item;
const Brief = Item.Brief;
const c=['pink','orange','yellow','green','blue','orange','brown','pink','green'];
export default class AppMe extends Component {
    state = {
        disabled: false,
        ss: ['购物车','优惠券','在线客服','我的收藏','我的关注','收货地址','购物车','购物车','购物车'],
      }
    render() {
        return (
            <div style={{width:'100%'}}>
                    <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                       
                        <img src={shezhi} style={{width:'30px'}}/>
                    ]}
                    >我的</NavBar>
                

                <img src={imm} style={{width:'100%'}} />

                <List>
                    <Item align="top"  multipleLine>
                    <img src={touxiang} style={{width:'100px',height:'100px',float:'left'}}/>
                    <div className="me_jieshao">
                        Markeloff //A/
                        <Brief>这个人很懒，什么都没有留下</Brief>
                    </div>
                    </Item>
                </List>

                <List renderHeader={() => ''} className="meme">
                    <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    arrow="horizontal"
                    onClick={() => {}}
                    >我的订单<span>查看我的订单</span></Item>
                </List>

                <Grid data={data1}
                    columnNum={3}
                    renderItem={(dataItem,idx) => (
                        <div style={{ padding: '12.5px' }}>
                        <img src={dataItem.icon[idx]} style={{ width: '45px', height: '45px' ,borderRadius:'50px',backgroundColor:c[idx]}} alt="" />
                        <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                            <span>{this.state.ss[idx]}</span>
                        </div>
                        </div>
                    )}
                />
            </div> 
        );
    }
}
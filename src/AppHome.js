import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import lunbo from './住吧首页_02.jpg';
import lunbo2 from './住吧首页2_02.jpg';
import datu from './住吧首页_17.jpg';
import { Flex, WhiteSpace } from 'antd-mobile';
import f1 from './住吧首页_05.jpg'
import f2 from './住吧首页_07.jpg'
import f3 from './住吧首页_09.jpg'
import { NavBar, Icon, Tabs } from 'antd-mobile';
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
  );
export default class AppHome extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: [lunbo,lunbo2],
          });
        }, 100);
      }
    render() {
        return (
            <div style={{width:'100%'}}>
                {/* <p className="apphome_top">住吧家具</p> */}
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ color:'white', marginRight: '16px' }} />,
                    ]}
                    >住吧家具</NavBar>
                    <WingBlank style={{width:'100%',marginLeft:"0px"}}>
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
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                        </Carousel>
                    </WingBlank>
                    <Flex className="apphome_flex">
                        <Flex.Item id="f1">
                            <img src={f1} style={{width:'100%'}}/>
                            <PlaceHolder />
                            </Flex.Item>
                        <Flex.Item id="f2">
                        <img src={f2} style={{width:'100%'}}/><PlaceHolder /></Flex.Item>
                        <Flex.Item id="f3">
                        <img src={f3} style={{width:'100%'}}/><PlaceHolder /></Flex.Item>
                    </Flex>
                    <div className="h22">
                        <p className="tiao"></p>
                        <span>热门推荐</span>
                    </div>
                    <div className="apphome_bottom">
                        <img src={datu} />
                        <span>什么是英伦装修风格&nbsp;英伦风家装&nbsp;英伦风格装修效果图</span>
                    </div>
            </div> 
        );
    }
}
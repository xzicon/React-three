import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { Flex, WhiteSpace } from 'antd-mobile';
import linggan from './灵感_03.jpg'
import linggan1 from './灵感_05.jpg'
import linggan2 from './灵感_09.jpg'
import linggan3 from './灵感_11.jpg'
import linggan4 from './灵感_16.jpg'
import linggan5 from './灵感_17.jpg'

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);
const tabs2 = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性彩色' },
  ];

export default class AppInspiration extends Component {
    constructor(){
        super();
        this.state = {   //设置默认值
            sr:[linggan,linggan1,linggan2,linggan3,linggan4,linggan5],
        }
    }
    render() {
        return (
            <div style={{width:'100%'}}>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'white', marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                <Tabs tabs={tabs2}
                    initialPage={0}
                    tabBarUnderlineStyle={{border:'0px solid #ffdb2c'}}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
             
                <div style={{alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#eeeeee' }}>
                    <Flex>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={this.state.sr[0]} style={{width:'100%'}}/>
                            <div className="insp">
                                <div className="insp_touxiang"></div>
                                <span>橙色律动</span>    
                                <div className="xin"></div>
                            </div>    
                        </Flex.Item>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={this.state.sr[1]} style={{width:'100%'}}/>
                            <div className="insp">
                                <div className="insp_touxiang1"></div>
                                <span>儿童房</span>    
                                <div className="xin"></div>
                            </div>
                        </Flex.Item>
                        </Flex>
                        <Flex>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={this.state.sr[2]} style={{width:'100%'}}/>
                            <div className="insp">
                                <div className="insp_touxiang2"></div>
                                <span>翻滚吧，地毯军</span>    
                                <div className="xin"></div>
                            </div>
                        </Flex.Item>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={this.state.sr[3]} style={{width:'100%'}}/>
                            <div className="insp">
                                <div className="insp_touxiang3"></div>
                                <span>角落里的瞎想</span>    
                                <div className="xin"></div>
                            </div>
                        </Flex.Item>
                        </Flex>
                        <Flex>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={this.state.sr[4]} style={{width:'100%'}}/>
                            <div className="insp">
                                <div className="insp_touxiang"></div>
                                <span>橙色律动</span>    
                                <div className="xin"></div>
                            </div>
                        </Flex.Item>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={this.state.sr[5]} style={{width:'100%'}}/>
                            <div className="insp">
                                <div className="insp_touxiang"></div>
                                <span>橙色律动</span>    
                                <div className="xin"></div>
                            </div>
                        </Flex.Item>
                    </Flex>
                </div>
                </Tabs>
            </div> 
        );
    }
}
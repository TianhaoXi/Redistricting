import React from 'react';
import './App.less';
import SuccessPopUp from "../../utils/Success"

import { Layout,Row, Col } from 'antd';

import Header from './HomeHeader'
import Map from '../map'
import SiderMenu from './MainSideMenu'
import BoxPlot from './Summary/Chart/boxPlot'
import {connect} from 'react-redux'
import{bindActionCreators}  from 'redux'
import * as mapDisplayAction from '../../actions/mapDisplay'

const {Footer, Content } = Layout;


class App extends React.Component{


  render(){
    return(
      
    <Layout>
    <Header></Header>
    {this.props.PopUp.isPopUp ? <SuccessPopUp></SuccessPopUp> : null}

    <Row>
    
    <Content>
      <Layout className="site-layout-background">
        <SiderMenu></SiderMenu>

        <Content style={{minHeight: '90vh' }}>
          {this.props.MapDisplay.isShow  ?  <Map></Map> : <BoxPlot></BoxPlot>}
  
        </Content>
      </Layout>
    </Content>

    </Row>
    <Footer style={{ textAlign: 'center' }}>CSE416 Team Seahawks</Footer>
  </Layout>
    )
      
  }
}


const mapDispatchToProps = (dispatch) =>{
  return {
    mapDisplayAction:bindActionCreators(mapDisplayAction,dispatch),

  }
}

const mapStateToProps =(state)=>{
  return{
    MapDisplay:state.MapDisplay,
    PopUp: state.PopUp
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App) ;
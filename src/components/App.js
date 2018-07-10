import React from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from '../redux/index.redux';

@connect(
    //属性
    state => ({ num: state.counter }),
    //方法
    { addGun, removeGun, addGunAsync }
)
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>现在有机枪{this.props.num}把</h1>
                <Button type="primary" onClick={this.props.addGun}>申请武器</Button>
                <Button type="warning" onClick={this.props.removeGun}>回收武器</Button>
                <Button type="ghost" onClick={this.props.addGunAsync}>拖两天再给</Button>
            </div>
        )
    }
}
export default App;
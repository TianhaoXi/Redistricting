import React from 'react';
import { Descriptions} from 'antd';


export default class Description extends React.Component {

    state = {
        size: 'default',
      };
      onChange = e => {
        console.log('size checked', e.target.value);
        this.setState({
          size: e.target.value,
        });
      };
    

    render() {
        return (
          <div>
            <Descriptions
              style = {{opacity :this.props.opacity}}
              bordered = {true}
              size={this.state.size}
            >
              <Descriptions.Item  label="Total voting age population:" >
                {this.props.descriptionInfo.VAP}
              </Descriptions.Item>
              <Descriptions.Item label="Hispanic voting age population:" >
                {this.props.descriptionInfo.HVAP}
              </Descriptions.Item>
              <Descriptions.Item label="White voting age population:" >
              {this.props.descriptionInfo.WVAP}
              </Descriptions.Item>
              <Descriptions.Item label="Black voting age population:" >
              {this.props.descriptionInfo.BVAP}
              </Descriptions.Item>
              <Descriptions.Item label="Asian voting age population:" >
              {this.props.descriptionInfo.ASIANVAP}
              </Descriptions.Item>
              <Descriptions.Item label="American Indian voting age population:" >
              {this.props.descriptionInfo.AMINVAP}
              </Descriptions.Item>
              {/* <Descriptions.Item label="Other race voting age population:" >
              {this.props.descriptionInfo.OTHERVAP}
              </Descriptions.Item> */}
            </Descriptions>
          </div>
        );
      }
    }


import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setActiveChannel} from '../../actions/channelActions';

class Channel extends Component {
    render() {
        return (
            <div className='row'>
                <div className=''>
                    <a style={{cursor: 'pointer'}} onClick={() => this.props.setActiveChannel(this.props.id)}>
                        <div className='card light-blue darken-3'>
                            <div className='card-content white-text'>
                                <span className='card-title'>{this.props.name}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default connect(null, {setActiveChannel})(Channel);

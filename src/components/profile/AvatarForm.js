import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import {uploadAvatar} from '../../actions';

class AvatarForm extends Component {
    static propTypes = {
        uploadAvatar: PropTypes.func.isRequired
    };

    _handleFiles(files){
        this.props.uploadAvatar(files[0]);
    }

    render(){
        return (
            <div className="profile-avatar" title="Drag & drop or select manually">
                <div className="text-center avatar-dropzone waves-light">
                    <Dropzone
                        accept="image/gif, image/png, image/jpeg, image/bmp"
                        className="dropzone"
                        multiple={false}
                        onDrop={this._handleFiles.bind(this)}
                    >
                        <i className="large material-icons">cloud_upload</i>
                        <br/>Upload new
                    </Dropzone>
                </div>
            </div>

        );
    }
}

export default connect(null, {uploadAvatar})(AvatarForm);

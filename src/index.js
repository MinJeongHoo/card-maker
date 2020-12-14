import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.module.css';
import AuthService from './service/auth_service'
import ImageUploader from './service/image_uploader';
const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = props => (<ImageFileinput{...props} imageUploader={imageUploader} />)

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);


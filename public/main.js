import ReactDOM from 'react-dom';
import routes from './route';
import '../src/_theme/index.less';
import './style/index.less';

const root = document.getElementById('main-wrapper');

ReactDOM.render(routes, root);

import ReactDOM from 'react-dom';
import routes from './route';
import '@meili/merchant-theme/lib/index.less';
import './style/index.less';

const root = document.getElementById('main-wrapper');

ReactDOM.render(routes, root);

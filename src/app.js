import ReactDOM from 'react-dom';
import {Phoneform} from './components/phoneForm';
import './style.css';

const domContainer = document.querySelector('#phone');
ReactDOM.render(<Phoneform />, domContainer);

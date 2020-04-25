'use strict';
import React from 'react';
import ReactDOM from 'react-dom';


class Phoneform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCodeInput: false,
      showError: false,
      phoneValue: '',
    };
  }
  checkPhone() {
    if (this.state.phoneValue.search(/\+\ [0-9] \([0-9]{3}\) [0-9]{3} - [0-9]{2} - [0-9]{2}/) !== -1) {
      this.state.showCodeInput = true;
      this.state.showError = false;
    } else {
      this.state.showError = true;
    }
    this.inputMask(this.state.phoneValue);
  }

  inputMask(value) {
    switch (value.length) {
      case 0:
        value = '+ 7';
        break;
      case 3:
        value = value.slice(0, 3) + ' (';
        break;
      case 8:
        value = value.slice(0, 8) + ') ';
        break;
      case 13:
        value = value.slice(0, 13) + ' - ';
        break;
      case 18:
        value = value.slice(0, 18) + ' - ';
        break;
    }
    this.setState({ phoneValue: value });
    if (value.length > 22) value = value.slice(0, 22);
    return value;
  }

  render() {
    return (
      <div className='phone'>
        <input
          type='tel'
          placeholder='Введите номер'
          onKeyDown={(event) => (event.target.value = this.inputMask(event.currentTarget.value))}
          onFocus={(event) => (event.target.value = this.inputMask(event.currentTarget.value))}
        />
        {this.state.showCodeInput && <input placeholder='Введите код' />}
        {this.state.showError && <span className='phone-error'>Номер введен неправильно</span>}
        <input
          onClick={(event) => this.checkPhone()}
          type='button'
          value={this.state.showCodeInput ? 'Отправить код' : 'Получить код'}
        />
      </div>
    );
  }
}

const domContainer = document.querySelector('#phone');
ReactDOM.render(<Phoneform />, domContainer);

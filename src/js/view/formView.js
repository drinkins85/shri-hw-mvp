export default class FormView {
  constructor(el) {
    this.el = el;
    this.input = el.querySelector('.view-stub__input');
    this.button = el.querySelector('.view-stub__apply');
    this.output = el.querySelector('.view-stub__label');
    this.label = el.querySelector('.log');
    this.onSubmitCb = function () {};

    this.button.addEventListener('click', (e) => {
      console.log('Нажата кнопка');
      this.printLog('Нажата кнопка');
      this.onSubmitCb(this.input.value);
      this.input.value = '';
      this.input.focus();
    });
  }

  printStatus(data) {
    console.log('Обновлены данные компонента');
    this.printLog('Обновлены данные компонента');
    this.output.innerHTML = data;
  }

  printLog(log) {
    this.label.innerHTML += `${log}<br>`;
  }
}


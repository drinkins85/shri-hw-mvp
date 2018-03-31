
export default class FormPresenter {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.onSubmitCb = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log('Данные отправлены в модель');
    this.view.printLog('Данные отправлены в модель');
    this.model.sendToServer(data)
      .then((res) => {
        console.log('Получены данные из модели');
        this.view.printLog('Получены данные из модели');
        this.view.printStatus(res);
      });
  }

  onAddToLog(data) {
    this.model.addToLog(data);
    const logs = this.model.getLog();
    this.view.printLog(logs);
  }
}


export default class FormModel {
  sendToServer(data) {
    console.log('Модель обработала данные');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Сервер принял данные <b>${data}</b>`);
      }, 1000);
    });
  }
}


import '../styles/main.scss';
import FormModel from './model/formModel';
import FormPresenter from './presenter/formPresenter';
import FormView from './view/formView';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.content');
  const formView = new FormView(form);
  const formModel = new FormModel();
  const formPresenter = new FormPresenter(formView, formModel);
});


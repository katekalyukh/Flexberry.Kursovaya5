import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovaya5ОплатаLForm from './forms/i-i-s-kursovaya5-оплата-l';
import IISKursovaya5ПечатьФотоLForm from './forms/i-i-s-kursovaya5-печать-фото-l';
import IISKursovaya5ФотокиоскLForm from './forms/i-i-s-kursovaya5-фотокиоск-l';
import IISKursovaya5ОплатаEForm from './forms/i-i-s-kursovaya5-оплата-e';
import IISKursovaya5ПечатьФотоEForm from './forms/i-i-s-kursovaya5-печать-фото-e';
import IISKursovaya5ФотокиоскEForm from './forms/i-i-s-kursovaya5-фотокиоск-e';
import IISKursovaya5КоррекцияModel from './models/i-i-s-kursovaya5-коррекция';
import IISKursovaya5ОплатаModel from './models/i-i-s-kursovaya5-оплата';
import IISKursovaya5ПечатьФотоModel from './models/i-i-s-kursovaya5-печать-фото';
import IISKursovaya5ФотокиоскModel from './models/i-i-s-kursovaya5-фотокиоск';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya5-коррекция': IISKursovaya5КоррекцияModel,
    'i-i-s-kursovaya5-оплата': IISKursovaya5ОплатаModel,
    'i-i-s-kursovaya5-печать-фото': IISKursovaya5ПечатьФотоModel,
    'i-i-s-kursovaya5-фотокиоск': IISKursovaya5ФотокиоскModel
  },

  'application-name': 'Kursovaya5',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya5',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya5',
          title: 'Kursovaya5'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        kursovaya5: {
          caption: 'Kursovaya5',
          title: 'Kursovaya5',
          'i-i-s-kursovaya5-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-kursovaya5-фотокиоск-l': {
            caption: 'Фотокиоск',
            title: ''
          },
          'i-i-s-kursovaya5-печать-фото-l': {
            caption: 'Печать фото',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya5-оплата-l': IISKursovaya5ОплатаLForm,
    'i-i-s-kursovaya5-печать-фото-l': IISKursovaya5ПечатьФотоLForm,
    'i-i-s-kursovaya5-фотокиоск-l': IISKursovaya5ФотокиоскLForm,
    'i-i-s-kursovaya5-оплата-e': IISKursovaya5ОплатаEForm,
    'i-i-s-kursovaya5-печать-фото-e': IISKursovaya5ПечатьФотоEForm,
    'i-i-s-kursovaya5-фотокиоск-e': IISKursovaya5ФотокиоскEForm
  },

});

export default translations;

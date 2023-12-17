import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya5',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya5',
          title: 'Kursovaya5'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  адрес: DS.attr('string'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-kursovaya5-фотокиоск.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-kursovaya5-фотокиоск.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya5-фотокиоск.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФотокиоскE', 'i-i-s-kursovaya5-фотокиоск', {
    адрес: attr('Адрес', { index: 0 }),
    iD: attr('ID', { index: 1 }),
    наименование: attr('Наименование', { index: 2 })
  });

  modelClass.defineProjection('ФотокиоскL', 'i-i-s-kursovaya5-фотокиоск', {
    адрес: attr('Адрес', { index: 0 }),
    iD: attr('ID', { index: 1 }),
    наименование: attr('Наименование', { index: 2 })
  });
};

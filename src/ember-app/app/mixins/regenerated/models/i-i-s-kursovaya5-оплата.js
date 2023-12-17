import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видОплаты: DS.attr('i-i-s-kursovaya5-тип-оплаты'),
  время: DS.attr('string'),
  дата: DS.attr('date'),
  стоимость: DS.attr('number'),
  печатьФото: DS.belongsTo('i-i-s-kursovaya5-печать-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  видОплаты: {
    descriptionKey: 'models.i-i-s-kursovaya5-оплата.validations.видОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  время: {
    descriptionKey: 'models.i-i-s-kursovaya5-оплата.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya5-оплата.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-kursovaya5-оплата.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  печатьФото: {
    descriptionKey: 'models.i-i-s-kursovaya5-оплата.validations.печатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-kursovaya5-оплата', {
    видОплаты: attr('Вид оплаты', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 }),
    время: attr('Время', { index: 2 }),
    дата: attr('Дата', { index: 3 }),
    печатьФото: belongsTo('i-i-s-kursovaya5-печать-фото', 'Печать фото', {
      номерЗаказа: attr('Номер заказа', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номерЗаказа' })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-kursovaya5-оплата', {
    видОплаты: attr('Вид оплаты', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 }),
    время: attr('Время', { index: 2 }),
    дата: attr('Дата', { index: 3 }),
    печатьФото: belongsTo('i-i-s-kursovaya5-печать-фото', 'Номер заказа', {
      номерЗаказа: attr('Номер заказа', { index: 4 })
    }, { index: -1, hidden: true })
  });
};

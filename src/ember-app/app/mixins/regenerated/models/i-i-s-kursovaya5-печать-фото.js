import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  номерЗаказа: DS.attr('number'),
  носитель: DS.attr('i-i-s-kursovaya5-вид-носителя'),
  размерВСм: DS.attr('i-i-s-kursovaya5-выбор-размера'),
  фотокиоск: DS.belongsTo('i-i-s-kursovaya5-фотокиоск', { inverse: null, async: false }),
  коррекция: DS.hasMany('i-i-s-kursovaya5-коррекция', { inverse: 'печатьФото', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya5-печать-фото.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-kursovaya5-печать-фото.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  носитель: {
    descriptionKey: 'models.i-i-s-kursovaya5-печать-фото.validations.носитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  размерВСм: {
    descriptionKey: 'models.i-i-s-kursovaya5-печать-фото.validations.размерВСм.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фотокиоск: {
    descriptionKey: 'models.i-i-s-kursovaya5-печать-фото.validations.фотокиоск.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  коррекция: {
    descriptionKey: 'models.i-i-s-kursovaya5-печать-фото.validations.коррекция.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПечатьФотоE', 'i-i-s-kursovaya5-печать-фото', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    носитель: attr('Носитель', { index: 1 }),
    размерВСм: attr('Размер в см', { index: 2 }),
    количество: attr('Количество', { index: 3 }),
    фотокиоск: belongsTo('i-i-s-kursovaya5-фотокиоск', 'Фотокиоск', {
      адрес: attr('Адрес', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'адрес' }),
    коррекция: hasMany('i-i-s-kursovaya5-коррекция', 'Коррекция', {
      кадрирование: attr('Кадрирование', { index: 0 }),
      чБЦвет: attr('Ч б цвет', { index: 1 })
    })
  });

  modelClass.defineProjection('ПечатьФотоL', 'i-i-s-kursovaya5-печать-фото', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    носитель: attr('Носитель', { index: 1 }),
    размерВСм: attr('Размер в см', { index: 2 }),
    количество: attr('Количество', { index: 3 }),
    фотокиоск: belongsTo('i-i-s-kursovaya5-фотокиоск', 'Адрес', {
      адрес: attr('Адрес', { index: 4 })
    }, { index: -1, hidden: true })
  });
};

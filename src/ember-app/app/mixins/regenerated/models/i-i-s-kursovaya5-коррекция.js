import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кадрирование: DS.attr('boolean'),
  чБЦвет: DS.attr('boolean'),
  печатьФото: DS.belongsTo('i-i-s-kursovaya5-печать-фото', { inverse: 'коррекция', async: false })
});

export let ValidationRules = {
  кадрирование: {
    descriptionKey: 'models.i-i-s-kursovaya5-коррекция.validations.кадрирование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  чБЦвет: {
    descriptionKey: 'models.i-i-s-kursovaya5-коррекция.validations.чБЦвет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  печатьФото: {
    descriptionKey: 'models.i-i-s-kursovaya5-коррекция.validations.печатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КоррекцияE', 'i-i-s-kursovaya5-коррекция', {
    кадрирование: attr('Кадрирование', { index: 0 }),
    чБЦвет: attr('Ч б цвет', { index: 1 })
  });
};

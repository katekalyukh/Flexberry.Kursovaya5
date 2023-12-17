import {
  defineNamespace,
  defineProjections,
  Model as КоррекцияMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya5-коррекция';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КоррекцияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

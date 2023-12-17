import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВыборРазмераEnum from '../enums/i-i-s-kursovaya5-выбор-размера';

export default FlexberryEnum.extend({
  enum: ВыборРазмераEnum,
  sourceType: 'IIS.Kursovaya5.ВыборРазмера'
});

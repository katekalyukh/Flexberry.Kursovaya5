import { Serializer as КоррекцияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya5-коррекция';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КоррекцияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

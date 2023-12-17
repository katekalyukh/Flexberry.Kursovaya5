import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya5-коррекция', 'Unit | Serializer | i-i-s-kursovaya5-коррекция', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya5-коррекция',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya5-вид-носителя',
    'transform:i-i-s-kursovaya5-выбор-размера',
    'transform:i-i-s-kursovaya5-тип-оплаты',

    'model:i-i-s-kursovaya5-коррекция',
    'model:i-i-s-kursovaya5-оплата',
    'model:i-i-s-kursovaya5-печать-фото',
    'model:i-i-s-kursovaya5-фотокиоск',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

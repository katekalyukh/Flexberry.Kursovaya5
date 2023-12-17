import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya5-оплата', 'Unit | Model | i-i-s-kursovaya5-оплата', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

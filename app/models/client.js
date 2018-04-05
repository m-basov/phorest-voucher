import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { fragment } from 'ember-data-model-fragments/attributes';

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  photoUrl: attr('string'),
  gender: attr('string'),
  mobile: attr('string'),
  landLine: attr('string'),
  notes: attr('string'),
  birthDate: attr('string'),
  clientSince: attr('date'),
  emailMarketingConsent: attr('boolean'),
  creatingBranchId: attr('string'),
  preferredStaffId: attr('string'),
  smsMarketingConsent: attr('boolean'),
  archived: attr('boolean'),
  version: attr('number'),

  creditAccount: fragment('credit-account'),
  address: fragment('address')
});

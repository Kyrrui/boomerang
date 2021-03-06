'use strict';
import boomerangContract from '../services/BoomerangContractService';
import errorResponse from '../responses/errorResponse';

const getBusinessAddress = function(event) {

  return event.queryStringParameters.businessAddress;
};

const getActorAddress = function(event) {

  return event.queryStringParameters.actorAddress;
};

export default async (event, context, callback) => {

  const businessAddress = getBusinessAddress(event);
  const actorAddress = getActorAddress(event);

  if (businessAddress == null || businessAddress.length < 1) {
    callback(null, errorResponse('businessAddress is required'));
    return;
  }

  if (actorAddress == null || actorAddress.length < 1) {
    callback(null, errorResponse('actorAddress is required'));
    return;
  }

  const nonceValue = await boomerangContract.methods.getNonceValue(businessAddress, actorAddress).call();

  console.log('businessAddress: ' + businessAddress);
  console.log('actorAddress: ' + actorAddress);
  console.log('nonce value: ' + nonceValue);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      nonce: nonceValue
    })
  };

  callback(null, response);
};
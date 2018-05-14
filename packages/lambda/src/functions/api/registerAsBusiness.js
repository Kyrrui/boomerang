'use strict';
import errorResponse from "../../responses/errorResponse";
import storeToIpfs from '../../services/IpfsService';
import storeToS3 from "../../services/S3Service";
import registerAsBusinessTransaction from './RegisterAsBusinessSigner';
import s3errorResponse from "../../responses/s3errorResponse";
import ipfsErrorResponse from "../../responses/ipfsErrorResponse";
import signedTransactionResponse from "../../responses/smartContractReceiptResponse";

const getBusinessAccountAddress = function(event) {

  const jsonBody = JSON.parse(event.body);
  return jsonBody.businessAccountAddress;
};

const getBusinessName = function(event) {

  const jsonBody = JSON.parse(event.body);
  return jsonBody.businessName;
};

const getBusinessDescription = function(event) {

  const jsonBody = JSON.parse(event.body);
  return jsonBody.businessDescription;
};

export default async (event, context, callback) => {

  const businessAccountAddress = getBusinessAccountAddress(event);
  const businessName = getBusinessName(event);
  const businessDescription = getBusinessDescription(event);

  if (businessAccountAddress == null || businessAccountAddress.length < 1) {
    callback(null, errorResponse('businessAccountAddress is required'));
    return;
  }

  if (businessName == null || businessName.length < 1) {
    callback(null, errorResponse('businessName is required'));
    return;
  }

  if (businessDescription == null || businessDescription.length < 1) {
    callback(null, errorResponse('businessDescription is required'));
    return;
  }

  // ---

  const ipfsObject = JSON.parse(event.body);

  let ipfsHash;

  try {
    ipfsHash = await storeToIpfs(ipfsObject);
  } catch (error) {
    return callback(null, ipfsErrorResponse(error));
  }

  console.log('ipfsHash: ' + ipfsHash);

  try {
    await storeToS3('kudos-profiles', ipfsHash, ipfsObject);
  } catch (error) {
    return callback(null, s3errorResponse(error));
  }

  // ---

  let signedTransaction;
  try {
    signedTransaction = await registerAsBusinessTransaction(businessAccountAddress, ipfsHash);
  } catch (error) {
    return callback(null, errorResponse('problem with signing transaction: ' + error));
  }

  callback(null, signedTransactionResponse(signedTransaction));
};
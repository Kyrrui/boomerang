pragma solidity ^0.4.24;

import './BoomerangActor.sol';

contract BoomerangWorker is BoomerangActor {

  event WorkerProfileUpdated(address indexed _workerAddress, bytes32 _ipfsHash);
  event WorkerHasApprovedBusiness(address indexed _workerAddress, address indexed _businessAddress);

  event UserRating( address indexed _userAddress,
                    address indexed _workerAddress,
                    address indexed _businessAddress,
                    uint256 _userRating,
                    bytes32 _ipfsHash);

  function registerAsWorker(address _workerAddress, bytes32 _ipfsHash) public {

    require(isWorker[_workerAddress] == false);
    isWorker[_workerAddress] = true;
    emit WorkerProfileUpdated(_workerAddress, _ipfsHash);
  }

  function updateWorkerProfile(address _workerAddress, bytes32 _ipfsHash) public {
    emit WorkerProfileUpdated(_workerAddress, _ipfsHash);
  }

  function addBusiness(address _workerAddress, address _businessAddress) public {

    workerHasApprovedBusiness[_workerAddress][_businessAddress] = true;
    emit WorkerHasApprovedBusiness(_workerAddress, _businessAddress);

    if (businessHasApprovedWorker[_businessAddress][_workerAddress] && !isEmployed[_businessAddress][_workerAddress]) {
      isEmployed[_businessAddress][_workerAddress] = true;
      workerList[_businessAddress].push(_workerAddress);
    }

    // any add business init
  }

  function rateUser(address _userAddress, address _workerAddress, address _businessAddress, uint256 _userRating, bytes32 _ipfsHash) public {

    if (_userRating < 1 || _userRating > 5) {
      return;
    }

    numberOfUserRatings[_userAddress] += 1;
    userRatingsSum[_userAddress] += _userRating;
    emit UserRating(_userAddress, _workerAddress, _businessAddress, _userRating, _ipfsHash);
  }

  function getWorkerRatingsSum(address _workerAddress, address _businessAddress) public view returns (uint256 _workerRatingsSum) {
    return workerRatingsSum[_businessAddress][_workerAddress];
  }

  function getNumberOfWorkerRatings(address _workerAddress, address _businessAddress) public view returns (uint256 _numberOfWorkerRatings) {
    return numberOfWorkerRatings[_businessAddress][_workerAddress];
  }
}
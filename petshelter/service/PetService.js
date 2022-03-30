'use strict';


/**
 * Add a new pet to the shelter
 *
 * body Pet Pet object that needs to be added to the shelter
 * no response value expected for this operation
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a pet
 *
 * petId Long Pet id to delete
 * user_key String Your access API Key (optional)
 * no response value expected for this operation
 **/
exports.deletePet = function(petId,user_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * user_key String Your access API Key (optional)
 * returns List
 **/
exports.findPetsByStatus = function(status,user_key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "photoUrls" : [ "photo_1_url", "photo_2_url" ],
  "name" : "spotty",
  "id" : 0,
  "category" : {
    "name" : "dogs",
    "id" : 6
  },
  "tags" : [ {
    "name" : "puppy",
    "id" : 1
  }, {
    "name" : "healthy",
    "id" : 1
  } ],
  "status" : "available"
}, {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "Isidoro",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "available"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find pet by ID
 * Returns a single pet
 *
 * petId Long ID of pet to return
 * user_key String Your access API Key (optional)
 * returns Pet
 **/
exports.getPetById = function(petId,user_key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "doggie",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing pet
 *
 * body Pet Pet object that needs to be added to the shelter
 * no response value expected for this operation
 **/
exports.updatePet = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


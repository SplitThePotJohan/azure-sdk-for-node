/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the KeySignParameters class.
 * @constructor
 * The key operations parameters
 *
 * @member {string} algorithm The signing/verification algorithm identifier.
 * For more information on possible algorithm types, see
 * JsonWebKeySignatureAlgorithm. Possible values include: 'RS256', 'RS384',
 * 'RS512', 'RSNULL'
 * 
 * @member {buffer} value
 * 
 */
function KeySignParameters() {
}

/**
 * Defines the metadata of KeySignParameters
 *
 * @returns {object} metadata of KeySignParameters
 *
 */
KeySignParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'KeySignParameters',
    type: {
      name: 'Composite',
      className: 'KeySignParameters',
      modelProperties: {
        algorithm: {
          required: true,
          serializedName: 'alg',
          constraints: {
            MinLength: 1
          },
          type: {
            name: 'String'
          }
        },
        value: {
          required: true,
          serializedName: 'value',
          type: {
            name: 'Base64Url'
          }
        }
      }
    }
  };
};

module.exports = KeySignParameters;
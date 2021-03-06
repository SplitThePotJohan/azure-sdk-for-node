/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Gets Application ssh endpoint
 *
 */
class ApplicationGetEndpoint {
  /**
   * Create a ApplicationGetEndpoint.
   * @member {string} [location] The location of the endpoint.
   * @member {number} [destinationPort] The destinationPort to connect to.
   * @member {number} [publicPort] The publicPort to connect to.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationGetEndpoint
   *
   * @returns {object} metadata of ApplicationGetEndpoint
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGetEndpoint',
      type: {
        name: 'Composite',
        className: 'ApplicationGetEndpoint',
        modelProperties: {
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          destinationPort: {
            required: false,
            serializedName: 'destinationPort',
            type: {
              name: 'Number'
            }
          },
          publicPort: {
            required: false,
            serializedName: 'publicPort',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGetEndpoint;

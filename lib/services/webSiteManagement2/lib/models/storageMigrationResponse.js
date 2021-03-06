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

const models = require('./index');

/**
 * Response for a migration of app content request.
 *
 * @extends models['ProxyOnlyResource']
 */
class StorageMigrationResponse extends models['ProxyOnlyResource'] {
  /**
   * Create a StorageMigrationResponse.
   * @member {string} [operationId] When server starts the migration process,
   * it will return an operation ID identifying that particular migration
   * operation.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StorageMigrationResponse
   *
   * @returns {object} metadata of StorageMigrationResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageMigrationResponse',
      type: {
        name: 'Composite',
        className: 'StorageMigrationResponse',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          operationId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.operationId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StorageMigrationResponse;

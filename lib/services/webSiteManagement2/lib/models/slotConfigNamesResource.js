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
 * Slot Config names azure resource.
 *
 * @extends models['ProxyOnlyResource']
 */
class SlotConfigNamesResource extends models['ProxyOnlyResource'] {
  /**
   * Create a SlotConfigNamesResource.
   * @member {array} [connectionStringNames] List of connection string names.
   * @member {array} [appSettingNames] List of application settings names.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SlotConfigNamesResource
   *
   * @returns {object} metadata of SlotConfigNamesResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SlotConfigNamesResource',
      type: {
        name: 'Composite',
        className: 'SlotConfigNamesResource',
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
          connectionStringNames: {
            required: false,
            serializedName: 'properties.connectionStringNames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          appSettingNames: {
            required: false,
            serializedName: 'properties.appSettingNames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SlotConfigNamesResource;

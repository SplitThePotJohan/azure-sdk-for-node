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
 * @class
 * Initializes a new instance of the RelayNamespaceListResult class.
 * @constructor
 * The response of the List Namespace operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of Namespaces
 *
 */
class RelayNamespaceListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RelayNamespaceListResult
   *
   * @returns {object} metadata of RelayNamespaceListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RelayNamespaceListResult',
      type: {
        name: 'Composite',
        className: 'RelayNamespaceListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RelayNamespaceElementType',
                  type: {
                    name: 'Composite',
                    className: 'RelayNamespace'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RelayNamespaceListResult;
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
 * Information about a service type that is defined in a service manifest of a
 * provisioned application type.
 *
 */
class ServiceTypeInfo {
  /**
   * Create a ServiceTypeInfo.
   * @member {object} [serviceTypeDescription]
   * @member {boolean} [serviceTypeDescription.isStateful] Indicates whether
   * the service type is a stateful service type or a stateless service type.
   * This property is true if the service type is a stateful service type,
   * false otherwise.
   * @member {string} [serviceTypeDescription.serviceTypeName]
   * @member {string} [serviceTypeDescription.placementConstraints] The
   * placement constraint to be used when instantiating this service in a
   * Service Fabric cluster.
   * @member {array} [serviceTypeDescription.servicePlacementPolicies]
   * @member {array} [serviceTypeDescription.extensions]
   * @member {string} [serviceTypeDescription.kind] Polymorphic Discriminator
   * @member {string} [serviceManifestName]
   * @member {string} [serviceManifestVersion] The version of the service
   * manifest in which this service type is defined.
   * @member {boolean} [isServiceGroup] Indicates whether the service is a
   * service group. If it is, the property value is true otherwise false.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceTypeInfo
   *
   * @returns {object} metadata of ServiceTypeInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceTypeInfo',
      type: {
        name: 'Composite',
        className: 'ServiceTypeInfo',
        modelProperties: {
          serviceTypeDescription: {
            required: false,
            serializedName: 'ServiceTypeDescription',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'Kind',
                clientName: 'kind'
              },
              uberParent: 'ServiceTypeDescription',
              className: 'ServiceTypeDescription'
            }
          },
          serviceManifestName: {
            required: false,
            serializedName: 'ServiceManifestName',
            type: {
              name: 'String'
            }
          },
          serviceManifestVersion: {
            required: false,
            serializedName: 'ServiceManifestVersion',
            type: {
              name: 'String'
            }
          },
          isServiceGroup: {
            required: false,
            serializedName: 'IsServiceGroup',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceTypeInfo;

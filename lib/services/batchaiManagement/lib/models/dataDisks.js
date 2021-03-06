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
 * Settings for the data disk which would be created for the File Server.
 *
 */
class DataDisks {
  /**
   * Create a DataDisks.
   * @member {number} diskSizeInGB Initial disk size in GB for blank data
   * disks, and the new desired size for resizing existing data disks.
   * @member {string} [cachingType] None, ReadOnly, ReadWrite. Default value is
   * None. This property is not patchable. Possible values include: 'none',
   * 'readonly', 'readwrite'. Default value: 'none' .
   * @member {number} diskCount Number of data disks to be attached to the VM.
   * RAID level 0 will be applied in the case of multiple disks.
   * @member {string} storageAccountType Specifies the type of storage account
   * to be used on the disk. Possible values are: Standard_LRS or Premium_LRS.
   * Possible values include: 'Standard_LRS', 'Premium_LRS'
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataDisks
   *
   * @returns {object} metadata of DataDisks
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataDisks',
      type: {
        name: 'Composite',
        className: 'DataDisks',
        modelProperties: {
          diskSizeInGB: {
            required: true,
            serializedName: 'diskSizeInGB',
            type: {
              name: 'Number'
            }
          },
          cachingType: {
            required: false,
            readOnly: true,
            serializedName: 'cachingType',
            defaultValue: 'none',
            type: {
              name: 'Enum',
              allowedValues: [ 'none', 'readonly', 'readwrite' ]
            }
          },
          diskCount: {
            required: true,
            serializedName: 'diskCount',
            type: {
              name: 'Number'
            }
          },
          storageAccountType: {
            required: true,
            serializedName: 'storageAccountType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DataDisks;

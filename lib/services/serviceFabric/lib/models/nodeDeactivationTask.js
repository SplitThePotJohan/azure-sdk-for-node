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
 * The task representing the deactivation operation on the node.
 *
 */
class NodeDeactivationTask {
  /**
   * Create a NodeDeactivationTask.
   * @member {object} [nodeDeactivationTaskId]
   * @member {string} [nodeDeactivationTaskId.id] Value of the task id.
   * @member {string} [nodeDeactivationTaskId.nodeDeactivationTaskType]
   * Possible values include: 'Invalid', 'Infrastructure', 'Repair', 'Client'
   * @member {string} [nodeDeactivationIntent] Possible values include:
   * 'Invalid', 'Pause', 'Restart', 'RemoveData', 'RemoveNode'
   */
  constructor() {
  }

  /**
   * Defines the metadata of NodeDeactivationTask
   *
   * @returns {object} metadata of NodeDeactivationTask
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NodeDeactivationTask',
      type: {
        name: 'Composite',
        className: 'NodeDeactivationTask',
        modelProperties: {
          nodeDeactivationTaskId: {
            required: false,
            serializedName: 'NodeDeactivationTaskId',
            type: {
              name: 'Composite',
              className: 'NodeDeactivationTaskId'
            }
          },
          nodeDeactivationIntent: {
            required: false,
            serializedName: 'NodeDeactivationIntent',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NodeDeactivationTask;

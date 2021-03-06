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
 * Summary of the replication job data for this vault.
 *
 */
class JobsSummary {
  /**
   * Create a JobsSummary.
   * @member {number} [failedJobs] Count of failed jobs.
   * @member {number} [suspendedJobs] Count of suspended jobs.
   * @member {number} [inProgressJobs] Count of in-progress jobs.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobsSummary
   *
   * @returns {object} metadata of JobsSummary
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobsSummary',
      type: {
        name: 'Composite',
        className: 'JobsSummary',
        modelProperties: {
          failedJobs: {
            required: false,
            serializedName: 'failedJobs',
            type: {
              name: 'Number'
            }
          },
          suspendedJobs: {
            required: false,
            serializedName: 'suspendedJobs',
            type: {
              name: 'Number'
            }
          },
          inProgressJobs: {
            required: false,
            serializedName: 'inProgressJobs',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = JobsSummary;

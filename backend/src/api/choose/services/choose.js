'use strict';

/**
 * choose service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::choose.choose');

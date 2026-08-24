'use strict';

/**
 * choose controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::choose.choose');

'use strict';

/**
 * choose router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::choose.choose');

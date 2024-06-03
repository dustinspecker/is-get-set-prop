'use strict'
const lowercaseKeys = require('lowercase-keys')
const getSetProps = require('get-set-props')

const lowerGetSetProps = lowercaseKeys(getSetProps)

/**
 * Determine if a property belongs to a type's getter/setters
 * @param {String} type - JS type
 * @param {String} property - name of property
 * @return {Boolean} - type has getter/setter named property
 */
module.exports = (type, property) => {
  if (typeof type !== 'string' || typeof property !== 'string') {
    throw new TypeError('Expected a string')
  }

  const lowerType = type.toLowerCase()

  return !!lowerGetSetProps[lowerType] && lowerGetSetProps[lowerType].indexOf(property) > -1
}

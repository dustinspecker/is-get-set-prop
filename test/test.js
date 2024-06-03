/* global describe, it */
'use strict'
const chai = require('chai')
const isGetSetProp = require('../src/')

const expect = chai.expect

describe('is-get-set-prop', () => {
  it('should throw error when type or property is not a string', () => {
    const typeTest = () => isGetSetProp(1, 'prop')
    const propTest = () => isGetSetProp('type', 1)

    expect(typeTest).to.throw(TypeError, /Expected a string/)
    expect(propTest).to.throw(TypeError, /Expected a string/)
  })

  it('should return false if not a js type', () => {
    expect(isGetSetProp('dog', 'bark')).to.eql(false)
    expect(isGetSetProp('gulp', 'task')).to.eql(false)
  })

  it('should return false if property is not a getter/setter', () => {
    expect(isGetSetProp('Array', 'push')).to.eql(false)
    expect(isGetSetProp('Error', 'ignore')).to.eql(false)
  })

  it('shoud return true if property is a getter/setter', () => {
    expect(isGetSetProp('Array', 'length')).to.eql(true)
    expect(isGetSetProp('Error', 'stack')).to.eql(true)
  })

  it('should be case insensitive for types', () => {
    expect(isGetSetProp('array', 'length')).to.eql(true)
    expect(isGetSetProp('ARRAY', 'length')).to.eql(true)
  })
})

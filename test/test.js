import test from 'ava'
import isGetSetProp from '../src/index.js'

test('should throw error when type or property is not a string', t => {
  const typeTest = () => isGetSetProp(1, 'prop')
  const propTest = () => isGetSetProp('type', 1)

  t.throws(typeTest, {instanceOf: TypeError, message: /Expected a string/})
  t.throws(propTest, {instanceOf: TypeError, message: /Expected a string/})
})

test('should return false if not a js type', t => {
  t.falsy(isGetSetProp('dog', 'bark'))
  t.falsy(isGetSetProp('gulp', 'task'))
})

test('should return false if property is not a getter/setter', t => {
  t.falsy(isGetSetProp('Array', 'push'))
  t.falsy(isGetSetProp('Error', 'ignore'))
})

test('shoud return true if property is a getter/setter', t => {
  t.truthy(isGetSetProp('Array', 'length'))
  t.truthy(isGetSetProp('Error', 'stack'))
})

test('should be case insenstestive for types', t => {
  t.truthy(isGetSetProp('array', 'length'))
  t.truthy(isGetSetProp('ARRAY', 'length'))
})

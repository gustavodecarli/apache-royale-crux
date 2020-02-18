/**
 * Generated by Apache Royale Compiler from mx/utils/ArrayUtil.as
 * mx.utils.ArrayUtil
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.utils.ArrayUtil');
/* Royale Dependency List: mx.collections.IList,mx.utils.ObjectUtil,org.apache.royale.utils.Language,XML*/




/**
 * @constructor
 */
mx.utils.ArrayUtil = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.utils.ArrayUtil', mx.utils.ArrayUtil);


/**
 *  Ensures that an Object can be used as an Array.
 *
 *  <p>If the Object is already an Array, it returns the object. 
 *  If the object is not an Array, it returns an Array
 *  in which the only element is the Object.
 *  If the Object implements IList it returns the IList's array.
 *  As a special case, if the Object is null,
 *  it returns an empty Array.</p>
 *
 *  @asparam obj Object that you want to ensure is an array.
 *
 *  @asreturn An Array. If the original Object is already an Array, 
 *  the original Array is returned. If the original Object is an
 *  IList then it's array is returned. Otherwise, a new Array whose
 *  only element is the Object is returned or an empty Array if 
 *  the Object was null. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} obj
 * @return {Array}
 */
mx.utils.ArrayUtil.toArray = function(obj) {
  if (obj == null)
    return [];
  else if (org.apache.royale.utils.Language.is(obj, Array))
    return org.apache.royale.utils.Language.as(obj, Array);
  else if (org.apache.royale.utils.Language.is(obj, mx.collections.IList))
    return org.apache.royale.utils.Language.as(obj, mx.collections.IList).toArray();
  else
    return [obj];
};


/**
 *  Returns the index of the item in the Array.
 * 
 *  @asparam item The item to find in the Array. 
 *
 *  @asparam source The Array to search for the item.
 * 
 *  @asreturn The index of the item, and -1 if the item is not in the list.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} item
 * @param {Array} source
 * @return {number}
 */
mx.utils.ArrayUtil.getItemIndex = function(item, source) {
  var /** @type {number} */ n = (source.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    if (source[i] === item)
      return i;
  }
  return -1;
};


/**
 *  Checks if the Array instances contain the same values
 *  against the same indexes, even if in different orders.
 *
 *  @asparam a The first Array instance.
 *  @asparam b The second Array instance.
 *  @asparam strictEqualityCheck true if we should compare the
 *  values of the two Arrays using the strict equality
 *  operator (===) or not (==).
 *  @asreturn true if the two Arrays contain the same values
 *  (determined using the strict equality operator) associated
 *  with the same indexes.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Array} a
 * @param {Array} b
 * @param {boolean=} strictEqualityCheck
 * @return {boolean}
 */
mx.utils.ArrayUtil.arraysMatch = function(a, b, strictEqualityCheck) {
  strictEqualityCheck = typeof strictEqualityCheck !== 'undefined' ? strictEqualityCheck : true;
  if (!a || !b)
    return false;
  if (a.length != b.length)
    return false;
  var /** @type {Array} */ indexesA = mx.utils.ObjectUtil.getEnumerableProperties(a);
  for (var /** @type {number} */ i = 0; i < indexesA.length; i++) {
    var /** @type {string} */ index = org.apache.royale.utils.Language.string(indexesA[i]);
    if (!b.hasOwnProperty(index))
      return false;
    if (strictEqualityCheck && a[index] !== b[index])
      return false;
    if (!strictEqualityCheck && a[index] != b[index])
      return false;
  }
  return true;
};


/**
 *  Checks if the Array instances contain the same values,
 *  even if in different orders.
 *
 *  @asparam a The first Array instance.
 *  @asparam b The second Array instance.
 *  @asparam strictEqualityCheck true if we should compare the
 *  values of the two Arrays using the strict equality
 *  operator (===) or not (==).
 *  @asreturn true if the two Arrays contain the same values.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Array} a
 * @param {Array} b
 * @param {boolean=} strictEqualityCheck
 * @return {boolean}
 */
mx.utils.ArrayUtil.arrayValuesMatch = function(a, b, strictEqualityCheck) {
  strictEqualityCheck = typeof strictEqualityCheck !== 'undefined' ? strictEqualityCheck : true;
  if (!a || !b)
    return false;
  var /** @type {Array} */ valuesOfA = mx.utils.ArrayUtil.getArrayValues(a);
  valuesOfA.sort();
  var /** @type {Array} */ valuesOfB = mx.utils.ArrayUtil.getArrayValues(b);
  valuesOfB.sort();
  return mx.utils.ArrayUtil.arraysMatch(valuesOfA, valuesOfB, strictEqualityCheck);
};


/**
 *  Used to obtain the values in an Array, whether indexed
 *  or associative.
 *
 *  @asparam value The Array instance.
 *  @asreturn an indexed Array with the values found in <code>value</code>.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Array} value
 * @return {Array}
 */
mx.utils.ArrayUtil.getArrayValues = function(value) {
  var /** @type {Array} */ result = [];
  if (!value)
    return result;
  var /** @type {Array} */ indexes = mx.utils.ObjectUtil.getEnumerableProperties(value);
  var foreachiter0_target = indexes;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var index = foreachiter0_target[foreachiter0];
  {
    result.push(value[index]);
  }}
  
  return result;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.utils.ArrayUtil.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ArrayUtil', qName: 'mx.utils.ArrayUtil', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.utils.ArrayUtil.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|toArray': { type: 'Array', declaredBy: 'mx.utils.ArrayUtil', parameters: function () { return [ 'Object', false ]; }},
        '|getItemIndex': { type: 'int', declaredBy: 'mx.utils.ArrayUtil', parameters: function () { return [ 'Object', false ,'Array', false ]; }},
        '|arraysMatch': { type: 'Boolean', declaredBy: 'mx.utils.ArrayUtil', parameters: function () { return [ 'Array', false ,'Array', false ,'Boolean', true ]; }},
        '|arrayValuesMatch': { type: 'Boolean', declaredBy: 'mx.utils.ArrayUtil', parameters: function () { return [ 'Array', false ,'Array', false ,'Boolean', true ]; }},
        '|getArrayValues': { type: 'Array', declaredBy: 'mx.utils.ArrayUtil', parameters: function () { return [ 'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.utils.ArrayUtil.prototype.ROYALE_COMPILE_FLAGS = 26;

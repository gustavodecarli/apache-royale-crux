/**
 * Generated by Apache Royale Compiler from mx/collections/SortField.as
 * mx.collections.SortField
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.collections.SortField');
/* Royale Dependency List: mx.collections.SortFieldCompareTypes,mx.collections.errors.SortError,mx.utils.ObjectUtil,org.apache.royale.events.Event,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('mx.collections.ISortField');



/**
 *  Constructor.
 *
 *  @asparam name The name of the property that this field uses for
 *              comparison.
 *              If the object is a simple type, pass <code>null</code>.
 *  @asparam caseInsensitive When sorting strings, tells the comparator
 *              whether to ignore the case of the values.
 *  @asparam descending Tells the comparator whether to arrange items in
 *              descending order.
 *  @asparam numeric Tells the comparator whether to compare sort items as
 *              numbers, instead of alphabetically.
 *  @asparam sortCompareType Gives an indication to SortField which of the
 *              default compare functions to use.
 *  @asparam customCompareFunction Use a custom function to compare the
 *              objects based on this SortField.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {mx.collections.ISortField}
 * @param {string=} name
 * @param {boolean=} caseInsensitive
 * @param {boolean=} descending
 * @param {Object=} numeric
 * @param {string=} sortCompareType
 * @param {Function=} customCompareFunction
 */
mx.collections.SortField = function(name, caseInsensitive, descending, numeric, sortCompareType, customCompareFunction) {
  name = typeof name !== 'undefined' ? name : null;
  caseInsensitive = typeof caseInsensitive !== 'undefined' ? caseInsensitive : false;
  descending = typeof descending !== 'undefined' ? descending : false;
  numeric = typeof numeric !== 'undefined' ? numeric : null;
  sortCompareType = typeof sortCompareType !== 'undefined' ? sortCompareType : null;
  customCompareFunction = typeof customCompareFunction !== 'undefined' ? customCompareFunction : null;
  mx.collections.SortField.base(this, 'constructor');
  this.mx_collections_SortField__name = name;
  this.mx_collections_SortField__caseInsensitive = caseInsensitive;
  this.mx_collections_SortField__descending = descending;
  this.mx_collections_SortField__numeric = numeric;
  this.mx_collections_SortField__sortCompareType = sortCompareType;
  if (customCompareFunction != null) {
    this.compareFunction = customCompareFunction;
  } else if (this.updateSortCompareType() == false) {
    this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.stringCompare, this, 'stringCompare');
  }
};
goog.inherits(mx.collections.SortField, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.collections.SortField', mx.collections.SortField);


/**
 * @private
 * @type {boolean}
 */
mx.collections.SortField.prototype.mx_collections_SortField__caseInsensitive;


/**
 * @private
 * @type {Function}
 */
mx.collections.SortField.prototype.mx_collections_SortField__compareFunction;


/**
 * @private
 * @type {boolean}
 */
mx.collections.SortField.prototype.mx_collections_SortField__descending;


/**
 * @private
 * @type {string}
 */
mx.collections.SortField.prototype.mx_collections_SortField__name;


/**
 * @private
 * @type {Object}
 */
mx.collections.SortField.prototype.mx_collections_SortField__numeric;


/**
 * @private
 * @type {string}
 */
mx.collections.SortField.prototype.mx_collections_SortField__sortCompareType = null;


/**
 * @private
 * @type {boolean}
 */
mx.collections.SortField.prototype.mx_collections_SortField__usingCustomCompareFunction;


/**
 *  @inheritDoc
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} obj
 */
mx.collections.SortField.prototype.initializeDefaultCompareFunction = function(obj) {
  if (!this.usingCustomCompareFunction) {
    if (this.mx_collections_SortField__sortCompareType) {
      if (this.updateSortCompareType() == true) {
        return;
      }
    }
    if (this.numeric == true)
      this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.mx_collections_SortField_numericCompare, this, 'numericCompare');
    else if (this.caseInsensitive || this.numeric == false)
      this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.stringCompare, this, 'stringCompare'); else {
      var /** @type {Object} */ value;
      if (this.mx_collections_SortField__name) {
        value = this.getSortFieldValue(obj);
      }
      if (value == null) {
        value = obj;
      }
      var /** @type {string} */ typ = typeof(value);
      switch (typ) {
        case "string":
          this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.stringCompare, this, 'stringCompare');
          break;
        case "object":
          if (org.apache.royale.utils.Language.is(value, Date)) {
            this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.mx_collections_SortField_dateCompare, this, 'dateCompare');
          } else {
            this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.stringCompare, this, 'stringCompare');
            var /** @type {string} */ test;
            try {
              test = value.toString();
            } catch (error2) {
            }
            if (!test || test == "[object Object]") {
              this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.mx_collections_SortField_nullCompare, this, 'nullCompare');
            }
          }
          break;
        case "xml":
          this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.xmlCompare, this, 'xmlCompare');
          break;
        case "boolean":
        
        case "number":
          this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.mx_collections_SortField_numericCompare, this, 'numericCompare');
          break;
      }
    }
  }
};


/**
 *  @inheritDoc
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
mx.collections.SortField.prototype.reverse = function() {
  this.descending = !this.descending;
};


/**
 *  @inheritDoc
 *
 *  @langversion 3.0
 *  @playerversion Flash 11.8
 *  @playerversion AIR 3.8
 *  @productversion Flex 4.11
 * @export
 * @return {boolean}
 */
mx.collections.SortField.prototype.updateSortCompareType = function() {
  if (!this.mx_collections_SortField__sortCompareType) {
    return false;
  }
  switch (this.mx_collections_SortField__sortCompareType) {
    case mx.collections.SortFieldCompareTypes.DATE:
      this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.mx_collections_SortField_dateCompare, this, 'dateCompare');
      return true;
    case mx.collections.SortFieldCompareTypes.NULL:
      this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.mx_collections_SortField_nullCompare, this, 'nullCompare');
      return true;
    case mx.collections.SortFieldCompareTypes.NUMERIC:
      this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.mx_collections_SortField_numericCompare, this, 'numericCompare');
      return true;
    case mx.collections.SortFieldCompareTypes.STRING:
      this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.stringCompare, this, 'stringCompare');
      return true;
    case mx.collections.SortFieldCompareTypes.XML:
      this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.xmlCompare, this, 'xmlCompare');
      return true;
  }
  return false;
};


/**
 * @export
 * @param {Object} object
 * @return {boolean}
 */
mx.collections.SortField.prototype.objectHasSortField = function(object) {
  return this.getSortFieldValue(object) !== undefined;
};


/**
 * @protected
 * @param {Object} obj
 * @return {*}
 */
mx.collections.SortField.prototype.getSortFieldValue = function(obj) {
  var /** @type {*} */ result = undefined;
  try {
    result = obj[this.mx_collections_SortField__name];
  } catch (error) {
  }
  return result;
};


/**
 * @private
 * @param {Object} a
 * @param {Object} b
 * @return {number}
 */
mx.collections.SortField.prototype.mx_collections_SortField_nullCompare = function(a, b) {
  var /** @type {Object} */ left;
  var /** @type {Object} */ right;
  var /** @type {boolean} */ found = false;
  if (a == null && b == null) {
    return 0;
  }
  if (this.mx_collections_SortField__name) {
    left = this.getSortFieldValue(a);
    right = this.getSortFieldValue(b);
  }
  if (left == null && right == null)
    return 0;
  if (left == null && !this.mx_collections_SortField__name)
    left = a;
  if (right == null && !this.mx_collections_SortField__name)
    right = b;
  var /** @type {string} */ typeLeft = typeof(left);
  var /** @type {string} */ typeRight = typeof(right);
  if (typeLeft == "string" || typeRight == "string") {
    found = true;
    this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.stringCompare, this, 'stringCompare');
  } else if (typeLeft == "object" || typeRight == "object") {
    if (org.apache.royale.utils.Language.is(left, Date) || org.apache.royale.utils.Language.is(right, Date)) {
      found = true;
      this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.mx_collections_SortField_dateCompare, this, 'dateCompare');
    }
  } else if (typeLeft == "xml" || typeRight == "xml") {
    found = true;
    this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.xmlCompare, this, 'xmlCompare');
  } else if (typeLeft == "number" || typeRight == "number" || typeLeft == "boolean" || typeRight == "boolean") {
    found = true;
    this.mx_collections_SortField__compareFunction = org.apache.royale.utils.Language.closure(this.mx_collections_SortField_numericCompare, this, 'numericCompare');
  }
  if (found) {
    return (this.mx_collections_SortField__compareFunction(left, right)) >> 0;
  } else {
    var /** @type {string} */ message = "noComparatorSortField";
    throw new mx.collections.errors.SortError(message);
  }
};


/**
 *  Pull the numbers from the objects and call the implementation.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @private
 * @param {Object} a
 * @param {Object} b
 * @return {number}
 */
mx.collections.SortField.prototype.mx_collections_SortField_numericCompare = function(a, b) {
  var /** @type {number} */ fa = this.mx_collections_SortField__name == null ? Number(a) : Number(this.getSortFieldValue(a));
  var /** @type {number} */ fb = this.mx_collections_SortField__name == null ? Number(b) : Number(this.getSortFieldValue(b));
  return mx.utils.ObjectUtil.numericCompare(fa, fb);
};


/**
 *  Pull the date objects from the values and compare them.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @private
 * @param {Object} a
 * @param {Object} b
 * @return {number}
 */
mx.collections.SortField.prototype.mx_collections_SortField_dateCompare = function(a, b) {
  var /** @type {Date} */ fa = this.mx_collections_SortField__name == null ? org.apache.royale.utils.Language.as(a, Date) : org.apache.royale.utils.Language.as(this.getSortFieldValue(a), Date);
  var /** @type {Date} */ fb = this.mx_collections_SortField__name == null ? org.apache.royale.utils.Language.as(b, Date) : org.apache.royale.utils.Language.as(this.getSortFieldValue(b), Date);
  return mx.utils.ObjectUtil.dateCompare(fa, fb);
};


/**
 *  Pull the strings from the objects and call the implementation.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @protected
 * @param {Object} a
 * @param {Object} b
 * @return {number}
 */
mx.collections.SortField.prototype.stringCompare = function(a, b) {
  var /** @type {string} */ fa = this.mx_collections_SortField__name == null ? String(a) : String(this.getSortFieldValue(a));
  var /** @type {string} */ fb = this.mx_collections_SortField__name == null ? String(b) : String(this.getSortFieldValue(b));
  return mx.utils.ObjectUtil.stringCompare(fa, fb, this.mx_collections_SortField__caseInsensitive);
};


/**
 *  Pull the values out fo the XML object, then compare
 *  using the string or numeric comparator depending
 *  on the numeric flag.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @protected
 * @param {Object} a
 * @param {Object} b
 * @return {number}
 */
mx.collections.SortField.prototype.xmlCompare = function(a, b) {
  var /** @type {string} */ sa = org.apache.royale.utils.Language.string(this.mx_collections_SortField__name == null ? a.toString() : this.getSortFieldValue(a).toString());
  var /** @type {string} */ sb = org.apache.royale.utils.Language.string(this.mx_collections_SortField__name == null ? b.toString() : this.getSortFieldValue(b).toString());
  if (this.numeric == true) {
    return mx.utils.ObjectUtil.numericCompare(parseFloat(sa), parseFloat(sb));
  } else {
    return mx.utils.ObjectUtil.stringCompare(sa, sb, this.mx_collections_SortField__caseInsensitive);
  }
};


mx.collections.SortField.prototype.get__arraySortOnOptions = function() {
  if (this.usingCustomCompareFunction || this.name == null || this.mx_collections_SortField__compareFunction == org.apache.royale.utils.Language.closure(this.xmlCompare, this, 'xmlCompare') || this.mx_collections_SortField__compareFunction == org.apache.royale.utils.Language.closure(this.mx_collections_SortField_dateCompare, this, 'dateCompare')) {
    return -1;
  }
  var /** @type {number} */ options = 0;
  if (this.caseInsensitive)
    options |= (1) >> 0;
  if (this.descending)
    options |= (2) >> 0;
  if (this.numeric == true || this.mx_collections_SortField__compareFunction == org.apache.royale.utils.Language.closure(this.mx_collections_SortField_numericCompare, this, 'numericCompare'))
    options |= (16) >> 0;
  return options;
};


mx.collections.SortField.prototype.get__caseInsensitive = function() {
  return this.mx_collections_SortField__caseInsensitive;
};


mx.collections.SortField.prototype.set__caseInsensitive = function(value) {
  if (value != this.mx_collections_SortField__caseInsensitive) {
    this.mx_collections_SortField__caseInsensitive = value;
    this.dispatchEvent(new org.apache.royale.events.Event("caseInsensitiveChanged"));
  }
};


mx.collections.SortField.prototype.get__compareFunction = function() {
  return this.mx_collections_SortField__compareFunction;
};


mx.collections.SortField.prototype.set__compareFunction = function(c) {
  this.mx_collections_SortField__compareFunction = c;
  this.mx_collections_SortField__usingCustomCompareFunction = (c != null);
};


mx.collections.SortField.prototype.get__descending = function() {
  return this.mx_collections_SortField__descending;
};


mx.collections.SortField.prototype.set__descending = function(value) {
  if (this.mx_collections_SortField__descending != value) {
    this.mx_collections_SortField__descending = value;
    this.dispatchEvent(new org.apache.royale.events.Event("descendingChanged"));
  }
};


mx.collections.SortField.prototype.get__name = function() {
  return this.mx_collections_SortField__name;
};


mx.collections.SortField.prototype.set__name = function(n) {
  this.mx_collections_SortField__name = n;
  this.dispatchEvent(new org.apache.royale.events.Event("nameChanged"));
};


mx.collections.SortField.prototype.get__numeric = function() {
  return this.mx_collections_SortField__numeric;
};


mx.collections.SortField.prototype.set__numeric = function(value) {
  if (this.mx_collections_SortField__numeric != value) {
    this.mx_collections_SortField__numeric = value;
    this.dispatchEvent(new org.apache.royale.events.Event("numericChanged"));
  }
};


mx.collections.SortField.prototype.get__sortCompareType = function() {
  return this.mx_collections_SortField__sortCompareType;
};


mx.collections.SortField.prototype.set__sortCompareType = function(value) {
  if (this.mx_collections_SortField__sortCompareType != value) {
    this.mx_collections_SortField__sortCompareType = value;
    this.dispatchEvent(new org.apache.royale.events.Event("sortCompareTypeChanged"));
  }
  this.updateSortCompareType();
};


mx.collections.SortField.prototype.get__usingCustomCompareFunction = function() {
  return this.mx_collections_SortField__usingCustomCompareFunction;
};


Object.defineProperties(mx.collections.SortField.prototype, /** @lends {mx.collections.SortField.prototype} */ {
/**
  * @export
  * @type {number} */
arraySortOnOptions: {
get: mx.collections.SortField.prototype.get__arraySortOnOptions},
/**
  * @export
  * @type {boolean} */
caseInsensitive: {
get: mx.collections.SortField.prototype.get__caseInsensitive,
set: mx.collections.SortField.prototype.set__caseInsensitive},
/**
  * @export
  * @type {Function} */
compareFunction: {
get: mx.collections.SortField.prototype.get__compareFunction,
set: mx.collections.SortField.prototype.set__compareFunction},
/**
  * @export
  * @type {boolean} */
descending: {
get: mx.collections.SortField.prototype.get__descending,
set: mx.collections.SortField.prototype.set__descending},
/**
  * @export
  * @type {string} */
name: {
get: mx.collections.SortField.prototype.get__name,
set: mx.collections.SortField.prototype.set__name},
/**
  * @export
  * @type {Object} */
numeric: {
get: mx.collections.SortField.prototype.get__numeric,
set: mx.collections.SortField.prototype.set__numeric},
/**
  * @export
  * @type {string} */
sortCompareType: {
get: mx.collections.SortField.prototype.get__sortCompareType,
set: mx.collections.SortField.prototype.set__sortCompareType},
/**
  * @export
  * @type {boolean} */
usingCustomCompareFunction: {
get: mx.collections.SortField.prototype.get__usingCustomCompareFunction}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.collections.SortField.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SortField', qName: 'mx.collections.SortField', kind: 'class' }], interfaces: [mx.collections.ISortField] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.collections.SortField.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'arraySortOnOptions': { type: 'int', access: 'readonly', declaredBy: 'mx.collections.SortField'},
        'caseInsensitive': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.collections.SortField', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'caseInsensitiveChanged' } ] } ]; }},
        'compareFunction': { type: 'Function', access: 'readwrite', declaredBy: 'mx.collections.SortField'},
        'descending': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.collections.SortField', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'descendingChanged' } ] } ]; }},
        'name': { type: 'String', access: 'readwrite', declaredBy: 'mx.collections.SortField', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'nameChanged' } ] } ]; }},
        'numeric': { type: 'Object', access: 'readwrite', declaredBy: 'mx.collections.SortField', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'numericChanged' } ] } ]; }},
        'sortCompareType': { type: 'String', access: 'readwrite', declaredBy: 'mx.collections.SortField', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'sortCompareTypeChanged' } ] } ]; }},
        'usingCustomCompareFunction': { type: 'Boolean', access: 'readonly', declaredBy: 'mx.collections.SortField'}
      };
    },
    methods: function () {
      return {
        'SortField': { type: '', declaredBy: 'mx.collections.SortField', parameters: function () { return [ 'String', true ,'Boolean', true ,'Boolean', true ,'Object', true ,'String', true ,'Function', true ]; }},
        'initializeDefaultCompareFunction': { type: 'void', declaredBy: 'mx.collections.SortField', parameters: function () { return [ 'Object', false ]; }},
        'reverse': { type: 'void', declaredBy: 'mx.collections.SortField'},
        'updateSortCompareType': { type: 'Boolean', declaredBy: 'mx.collections.SortField'},
        'objectHasSortField': { type: 'Boolean', declaredBy: 'mx.collections.SortField', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.collections.SortField.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./SortField.js.map

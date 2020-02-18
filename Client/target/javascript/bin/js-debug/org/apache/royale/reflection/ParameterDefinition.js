/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/ParameterDefinition.as
 * org.apache.royale.reflection.ParameterDefinition
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.ParameterDefinition');
/* Royale Dependency List: org.apache.royale.reflection.TypeDefinition*/

goog.require('org.apache.royale.reflection.DefinitionBase');



/**
 * @constructor
 * @extends {org.apache.royale.reflection.DefinitionBase}
 * @param {number} index
 * @param {Object} rawData
 */
org.apache.royale.reflection.ParameterDefinition = function(index, rawData) {
  org.apache.royale.reflection.ParameterDefinition.base(this, 'constructor', "parameter " + index, rawData);
};
goog.inherits(org.apache.royale.reflection.ParameterDefinition, org.apache.royale.reflection.DefinitionBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.reflection.ParameterDefinition', org.apache.royale.reflection.ParameterDefinition);


/**
 * A string representation of this parameter definition
 * @export
 * @return {string}
 */
org.apache.royale.reflection.ParameterDefinition.prototype.toString = function() {
  return this._name + ", optional:" + this.optional + ", type:" + this.type.qualifiedName;
};


org.apache.royale.reflection.ParameterDefinition.prototype.get__type = function() {
  
  return org.apache.royale.reflection.TypeDefinition.internalGetDefinition(org.apache.royale.utils.Language.string(this._rawData.type));
};


org.apache.royale.reflection.ParameterDefinition.prototype.get__optional = function() {
  
  return !!(this._rawData.optional);
};


org.apache.royale.reflection.ParameterDefinition.prototype.get__index = function() {
  
  return (this._rawData.index) >>> 0;
};


Object.defineProperties(org.apache.royale.reflection.ParameterDefinition.prototype, /** @lends {org.apache.royale.reflection.ParameterDefinition.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.reflection.TypeDefinition} */
type: {
get: org.apache.royale.reflection.ParameterDefinition.prototype.get__type},
/**
  * @export
  * @type {boolean} */
optional: {
get: org.apache.royale.reflection.ParameterDefinition.prototype.get__optional},
/**
  * @export
  * @type {number} */
index: {
get: org.apache.royale.reflection.ParameterDefinition.prototype.get__index}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.reflection.ParameterDefinition.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ParameterDefinition', qName: 'org.apache.royale.reflection.ParameterDefinition', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.reflection.ParameterDefinition.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'type': { type: 'org.apache.royale.reflection.TypeDefinition', access: 'readonly', declaredBy: 'org.apache.royale.reflection.ParameterDefinition'},
        'optional': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.reflection.ParameterDefinition'},
        'index': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.reflection.ParameterDefinition'}
      };
    },
    methods: function () {
      return {
        'ParameterDefinition': { type: '', declaredBy: 'org.apache.royale.reflection.ParameterDefinition', parameters: function () { return [ 'uint', false ,'Object', false ]; }},
        'toString': { type: 'String', declaredBy: 'org.apache.royale.reflection.ParameterDefinition'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.reflection.ParameterDefinition.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ParameterDefinition.js.map
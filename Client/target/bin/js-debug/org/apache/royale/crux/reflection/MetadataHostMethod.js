/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/reflection/MetadataHostMethod.as
 * org.apache.royale.crux.reflection.MetadataHostMethod
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.reflection.MetadataHostMethod');
/* Royale Dependency List: org.apache.royale.crux.reflection.MethodParameter,org.apache.royale.reflection.MethodDefinition*/

goog.require('org.apache.royale.crux.reflection.BaseMetadataHost');



/**
 * Constructor sets <code>returnType</code> property based on value found in <code>hostNode</code> XML node,
 * as long as return type is not <code>void</code> or <code>* </code>. Also populates <code>parameters</code>
 * property from information found in <code>hostNode</code> XML node.
 *
 * @asparam hostNode XML node from <code>describeType</code> output that represents this method.
 * @constructor
 * @extends {org.apache.royale.crux.reflection.BaseMetadataHost}
 */
org.apache.royale.crux.reflection.MetadataHostMethod = function() {
  
  this._parameters = [];
  org.apache.royale.crux.reflection.MetadataHostMethod.base(this, 'constructor');
};
goog.inherits(org.apache.royale.crux.reflection.MetadataHostMethod, org.apache.royale.crux.reflection.BaseMetadataHost);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.reflection.MetadataHostMethod', org.apache.royale.crux.reflection.MetadataHostMethod);


/**
 * @protected
 * @type {org.apache.royale.reflection.MethodDefinition}
 */
org.apache.royale.crux.reflection.MetadataHostMethod.prototype._sourceDefinition;


/**
 * @protected
 * @type {Object}
 */
org.apache.royale.crux.reflection.MetadataHostMethod.prototype._returnType;


/**
 * @protected
 * @type {Array}
 */
org.apache.royale.crux.reflection.MetadataHostMethod.prototype._parameters;


org.apache.royale.crux.reflection.MetadataHostMethod.prototype.get__sourceDefinition = function() {
  return this._sourceDefinition;
};


org.apache.royale.crux.reflection.MetadataHostMethod.prototype.set__sourceDefinition = function(value) {
  this._sourceDefinition = value;
};


org.apache.royale.crux.reflection.MetadataHostMethod.prototype.get__returnType = function() {
  return this._returnType;
};


org.apache.royale.crux.reflection.MetadataHostMethod.prototype.set__returnType = function(value) {
  this._returnType = value;
};


org.apache.royale.crux.reflection.MetadataHostMethod.prototype.get__parameters = function() {
  return this._parameters;
};


org.apache.royale.crux.reflection.MetadataHostMethod.prototype.get__parameterCount = function() {
  return (this.parameters.length) >> 0;
};


org.apache.royale.crux.reflection.MetadataHostMethod.prototype.get__requiredParameterCount = function() {
  var /** @type {number} */ requiredParameterCount = 0;
  var foreachiter0_target = this.parameters;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var parameter = foreachiter0_target[foreachiter0];
  {
    if (!parameter.optional)
      requiredParameterCount++;
  }}
  
  return requiredParameterCount;
};


Object.defineProperties(org.apache.royale.crux.reflection.MetadataHostMethod.prototype, /** @lends {org.apache.royale.crux.reflection.MetadataHostMethod.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.reflection.MethodDefinition} */
sourceDefinition: {
get: org.apache.royale.crux.reflection.MetadataHostMethod.prototype.get__sourceDefinition,
set: org.apache.royale.crux.reflection.MetadataHostMethod.prototype.set__sourceDefinition},
/**
  * @export
  * @type {Object} */
returnType: {
get: org.apache.royale.crux.reflection.MetadataHostMethod.prototype.get__returnType,
set: org.apache.royale.crux.reflection.MetadataHostMethod.prototype.set__returnType},
/**
  * @export
  * @type {Array} */
parameters: {
get: org.apache.royale.crux.reflection.MetadataHostMethod.prototype.get__parameters},
/**
  * @export
  * @type {number} */
parameterCount: {
get: org.apache.royale.crux.reflection.MetadataHostMethod.prototype.get__parameterCount},
/**
  * @export
  * @type {number} */
requiredParameterCount: {
get: org.apache.royale.crux.reflection.MetadataHostMethod.prototype.get__requiredParameterCount}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.reflection.MetadataHostMethod.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MetadataHostMethod', qName: 'org.apache.royale.crux.reflection.MetadataHostMethod', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.reflection.MetadataHostMethod.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'sourceDefinition': { type: 'org.apache.royale.reflection.MethodDefinition', access: 'readwrite', declaredBy: 'org.apache.royale.crux.reflection.MetadataHostMethod'},
        'returnType': { type: 'Class', access: 'readwrite', declaredBy: 'org.apache.royale.crux.reflection.MetadataHostMethod'},
        'parameters': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.crux.reflection.MetadataHostMethod'},
        'parameterCount': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.crux.reflection.MetadataHostMethod'},
        'requiredParameterCount': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.crux.reflection.MetadataHostMethod'}
      };
    },
    methods: function () {
      return {
        'MetadataHostMethod': { type: '', declaredBy: 'org.apache.royale.crux.reflection.MetadataHostMethod'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.reflection.MetadataHostMethod.prototype.ROYALE_COMPILE_FLAGS = 10;

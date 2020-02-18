/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/reflection/BaseMetadataTag.as
 * org.apache.royale.crux.reflection.BaseMetadataTag
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.reflection.BaseMetadataTag');
/* Royale Dependency List: org.apache.royale.crux.reflection.IMetadataHost,org.apache.royale.crux.reflection.MetadataArg*/

goog.require('org.apache.royale.crux.reflection.IMetadataTag');



/**
 * Constructor
 * @constructor
 * @implements {org.apache.royale.crux.reflection.IMetadataTag}
 */
org.apache.royale.crux.reflection.BaseMetadataTag = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.reflection.BaseMetadataTag', org.apache.royale.crux.reflection.BaseMetadataTag);


/**
 * @protected
 * @type {string}
 */
org.apache.royale.crux.reflection.BaseMetadataTag.prototype._name;


/**
 * @protected
 * @type {Array}
 */
org.apache.royale.crux.reflection.BaseMetadataTag.prototype._args;


/**
 * @protected
 * @type {org.apache.royale.crux.reflection.IMetadataHost}
 */
org.apache.royale.crux.reflection.BaseMetadataTag.prototype._host;


/**
 * @protected
 * @type {string}
 */
org.apache.royale.crux.reflection.BaseMetadataTag.prototype._defaultArgName;


/**
 * @export
 * @param {string} argName
 * @return {boolean}
 */
org.apache.royale.crux.reflection.BaseMetadataTag.prototype.hasArg = function(argName) {
  var foreachiter0_target = this.args;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var arg = foreachiter0_target[foreachiter0];
  {
    if (arg.key == argName || (arg.key == "" && argName == this.defaultArgName))
      return true;
  }}
  
  return false;
};


/**
 * @export
 * @param {string} argName
 * @return {org.apache.royale.crux.reflection.MetadataArg}
 */
org.apache.royale.crux.reflection.BaseMetadataTag.prototype.getArg = function(argName) {
  var foreachiter1_target = this.args;
  for (var foreachiter1 in foreachiter1_target) 
  {
  var arg = foreachiter1_target[foreachiter1];
  {
    if (arg.key == argName || (arg.key == "" && argName == this.defaultArgName))
      return arg;
  }}
  
  return null;
};


/**
 * @export
 * @param {org.apache.royale.crux.reflection.IMetadataTag} metadataTag
 */
org.apache.royale.crux.reflection.BaseMetadataTag.prototype.copyFrom = function(metadataTag) {
  this.name = metadataTag.name;
  this.args = metadataTag.args;
  this.host = metadataTag.host;
};


/**
 * Utility method useful for development and debugging
 * that returns string showing what this tag looked like defined in code.
 *
 * @asreturn String representation of this tag as it looks in code.
 * @export
 * @return {string}
 */
org.apache.royale.crux.reflection.BaseMetadataTag.prototype.toString = function() {
  var /** @type {string} */ str = "[" + this.name;
  if (this.args != null && this.args.length > 0) {
    str += "( ";
    for (var /** @type {number} */ i = 0; i < this.args.length; i++) {
      var /** @type {org.apache.royale.crux.reflection.MetadataArg} */ arg = this.args[i];
      if (arg.key != "")
        str += arg.key + "=";
      str += "\"" + arg.value + "\"";
      if (i + 1 < this.args.length)
        str += ", ";
    }
    str += " )";
  }
  str += "]";
  return str;
};


org.apache.royale.crux.reflection.BaseMetadataTag.prototype.get__name = function() {
  return this._name;
};


org.apache.royale.crux.reflection.BaseMetadataTag.prototype.set__name = function(value) {
  this._name = value;
};


org.apache.royale.crux.reflection.BaseMetadataTag.prototype.get__args = function() {
  return this._args;
};


org.apache.royale.crux.reflection.BaseMetadataTag.prototype.set__args = function(value) {
  this._args = value;
};


org.apache.royale.crux.reflection.BaseMetadataTag.prototype.get__host = function() {
  return this._host;
};


org.apache.royale.crux.reflection.BaseMetadataTag.prototype.set__host = function(value) {
  this._host = value;
};


org.apache.royale.crux.reflection.BaseMetadataTag.prototype.get__defaultArgName = function() {
  return this._defaultArgName;
};


org.apache.royale.crux.reflection.BaseMetadataTag.prototype.set__defaultArgName = function(value) {
  this._defaultArgName = value;
};


org.apache.royale.crux.reflection.BaseMetadataTag.prototype.get__asTag = function() {
  return this.toString();
};


Object.defineProperties(org.apache.royale.crux.reflection.BaseMetadataTag.prototype, /** @lends {org.apache.royale.crux.reflection.BaseMetadataTag.prototype} */ {
/**
  * @export
  * @type {string} */
name: {
get: org.apache.royale.crux.reflection.BaseMetadataTag.prototype.get__name,
set: org.apache.royale.crux.reflection.BaseMetadataTag.prototype.set__name},
/**
  * @export
  * @type {Array} */
args: {
get: org.apache.royale.crux.reflection.BaseMetadataTag.prototype.get__args,
set: org.apache.royale.crux.reflection.BaseMetadataTag.prototype.set__args},
/**
  * @export
  * @type {org.apache.royale.crux.reflection.IMetadataHost} */
host: {
get: org.apache.royale.crux.reflection.BaseMetadataTag.prototype.get__host,
set: org.apache.royale.crux.reflection.BaseMetadataTag.prototype.set__host},
/**
  * @export
  * @type {string} */
defaultArgName: {
get: org.apache.royale.crux.reflection.BaseMetadataTag.prototype.get__defaultArgName,
set: org.apache.royale.crux.reflection.BaseMetadataTag.prototype.set__defaultArgName},
/**
  * @export
  * @type {string} */
asTag: {
get: org.apache.royale.crux.reflection.BaseMetadataTag.prototype.get__asTag}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.reflection.BaseMetadataTag.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BaseMetadataTag', qName: 'org.apache.royale.crux.reflection.BaseMetadataTag', kind: 'class' }], interfaces: [org.apache.royale.crux.reflection.IMetadataTag] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.reflection.BaseMetadataTag.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'name': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataTag'},
        'args': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataTag'},
        'host': { type: 'org.apache.royale.crux.reflection.IMetadataHost', access: 'readwrite', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataTag'},
        'defaultArgName': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataTag'},
        'asTag': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataTag'}
      };
    },
    methods: function () {
      return {
        'BaseMetadataTag': { type: '', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataTag'},
        'hasArg': { type: 'Boolean', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataTag', parameters: function () { return [ 'String', false ]; }},
        'getArg': { type: 'org.apache.royale.crux.reflection.MetadataArg', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataTag', parameters: function () { return [ 'String', false ]; }},
        'copyFrom': { type: 'void', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataTag', parameters: function () { return [ 'org.apache.royale.crux.reflection.IMetadataTag', false ]; }},
        'toString': { type: 'String', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataTag'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.reflection.BaseMetadataTag.prototype.ROYALE_COMPILE_FLAGS = 10;
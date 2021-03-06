/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/reflection/BaseMetadataHost.as
 * org.apache.royale.crux.reflection.BaseMetadataHost
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.reflection.BaseMetadataHost');
/* Royale Dependency List: org.apache.royale.crux.reflection.IMetadataTag*/

goog.require('org.apache.royale.crux.reflection.IMetadataHost');



/**
 * Constructor initializes <code>metadataTags</code> Array.
 * @constructor
 * @implements {org.apache.royale.crux.reflection.IMetadataHost}
 */
org.apache.royale.crux.reflection.BaseMetadataHost = function() {
  this.metadataTags = [];
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.reflection.BaseMetadataHost', org.apache.royale.crux.reflection.BaseMetadataHost);


/**
 * @protected
 * @type {*}
 */
org.apache.royale.crux.reflection.BaseMetadataHost.prototype._name;


/**
 * @protected
 * @type {Object}
 */
org.apache.royale.crux.reflection.BaseMetadataHost.prototype._type;


/**
 * @protected
 * @type {Array}
 */
org.apache.royale.crux.reflection.BaseMetadataHost.prototype._metadataTags;


/**
 * @export
 * @param {string} name
 * @return {org.apache.royale.crux.reflection.IMetadataTag}
 */
org.apache.royale.crux.reflection.BaseMetadataHost.prototype.getMetadataTagByName = function(name) {
  var foreachiter0_target = this.metadataTags;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var metadataTag = foreachiter0_target[foreachiter0];
  {
    if (metadataTag.name == name) {
      return metadataTag;
    }
  }}
  
  return null;
};


/**
 * @export
 * @param {string} name
 * @return {boolean}
 */
org.apache.royale.crux.reflection.BaseMetadataHost.prototype.hasMetadataTagByName = function(name) {
  return this.getMetadataTagByName(name) != null;
};


org.apache.royale.crux.reflection.BaseMetadataHost.prototype.get__name = function() {
  return this._name;
};


org.apache.royale.crux.reflection.BaseMetadataHost.prototype.set__name = function(value) {
  this._name = value;
};


org.apache.royale.crux.reflection.BaseMetadataHost.prototype.get__type = function() {
  return this._type;
};


org.apache.royale.crux.reflection.BaseMetadataHost.prototype.set__type = function(value) {
  this._type = value;
};


org.apache.royale.crux.reflection.BaseMetadataHost.prototype.get__metadataTags = function() {
  return this._metadataTags;
};


org.apache.royale.crux.reflection.BaseMetadataHost.prototype.set__metadataTags = function(value) {
  this._metadataTags = value;
};


Object.defineProperties(org.apache.royale.crux.reflection.BaseMetadataHost.prototype, /** @lends {org.apache.royale.crux.reflection.BaseMetadataHost.prototype} */ {
/**
  * @export
  * @type {*} */
name: {
get: org.apache.royale.crux.reflection.BaseMetadataHost.prototype.get__name,
set: org.apache.royale.crux.reflection.BaseMetadataHost.prototype.set__name},
/**
  * @export
  * @type {Object} */
type: {
get: org.apache.royale.crux.reflection.BaseMetadataHost.prototype.get__type,
set: org.apache.royale.crux.reflection.BaseMetadataHost.prototype.set__type},
/**
  * @export
  * @type {Array} */
metadataTags: {
get: org.apache.royale.crux.reflection.BaseMetadataHost.prototype.get__metadataTags,
set: org.apache.royale.crux.reflection.BaseMetadataHost.prototype.set__metadataTags}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.reflection.BaseMetadataHost.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BaseMetadataHost', qName: 'org.apache.royale.crux.reflection.BaseMetadataHost', kind: 'class' }], interfaces: [org.apache.royale.crux.reflection.IMetadataHost] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.reflection.BaseMetadataHost.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'name': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataHost'},
        'type': { type: 'Class', access: 'readwrite', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataHost'},
        'metadataTags': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataHost'}
      };
    },
    methods: function () {
      return {
        'BaseMetadataHost': { type: '', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataHost'},
        'getMetadataTagByName': { type: 'org.apache.royale.crux.reflection.IMetadataTag', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataHost', parameters: function () { return [ 'String', false ]; }},
        'hasMetadataTagByName': { type: 'Boolean', declaredBy: 'org.apache.royale.crux.reflection.BaseMetadataHost', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.reflection.BaseMetadataHost.prototype.ROYALE_COMPILE_FLAGS = 10;

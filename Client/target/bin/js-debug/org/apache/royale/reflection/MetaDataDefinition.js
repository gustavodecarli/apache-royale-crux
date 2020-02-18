/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/MetaDataDefinition.as
 * org.apache.royale.reflection.MetaDataDefinition
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.MetaDataDefinition');
/* Royale Dependency List: org.apache.royale.reflection.MetaDataArgDefinition*/

goog.require('org.apache.royale.reflection.DefinitionBase');



/**
 * @constructor
 * @extends {org.apache.royale.reflection.DefinitionBase}
 * @param {string} name
 * @param {Object} rawData
 */
org.apache.royale.reflection.MetaDataDefinition = function(name, rawData) {
  org.apache.royale.reflection.MetaDataDefinition.base(this, 'constructor', name, rawData);
};
goog.inherits(org.apache.royale.reflection.MetaDataDefinition, org.apache.royale.reflection.DefinitionBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.reflection.MetaDataDefinition', org.apache.royale.reflection.MetaDataDefinition);


/**
 * @private
 * @type {Array}
 */
org.apache.royale.reflection.MetaDataDefinition.prototype.org_apache_royale_reflection_MetaDataDefinition__args;


/**
 * convenience method for retrieving a set of args with a specific key
 * Most often this would be of length 1, but it is possible for there to be
 * multiple MetaDataArgDefinitions with the same key
 * @asparam key the key to search for
 * @asreturn an array of MetaDataArgDefinitions with the matching key.
 * @export
 * @param {string} key
 * @return {Array}
 */
org.apache.royale.reflection.MetaDataDefinition.prototype.getArgsByKey = function(key) {
  var /** @type {Array} */ ret = [];
  var /** @type {Array} */ source = this.org_apache_royale_reflection_MetaDataDefinition__args || this.args;
  var /** @type {number} */ i = 0, /** @type {number} */ l = (source.length) >>> 0;
  for (; i < l; i++) {
    var /** @type {org.apache.royale.reflection.MetaDataArgDefinition} */ arg = source[i];
    if (arg.key == key)
      ret.push(arg);
  }
  return ret;
};


/**
 * Used primarily for debugging purposes, this provides a string representation of this
 * MetaDataDefinition
 * @asreturn a String representation of this MetaDataDefinition
 * @export
 * @return {string}
 */
org.apache.royale.reflection.MetaDataDefinition.prototype.toString = function() {
  var /** @type {number} */ i = 0;
  var /** @type {string} */ s = "item: '" + this._name + "', ";
  var /** @type {Array} */ args = this.args;
  //var /** @type {number} */ i = 0;
  var /** @type {number} */ l = (args.length) >>> 0;
  if (!l)
    s += "args:{none}"; else {
    s += "args:";
    for (i = 0; i < l; i++) {
      s += "\n\t" + args[i].toString();
    }
  }
  return s;
};


org.apache.royale.reflection.MetaDataDefinition.prototype.get__args = function() {
  if (this.org_apache_royale_reflection_MetaDataDefinition__args)
    return this.org_apache_royale_reflection_MetaDataDefinition__args.slice();
  var /** @type {Array} */ results = [];
  
  var /** @type {*} */ rdata = this.rawData;
  if (rdata !== undefined) {
    var /** @type {Array} */ args = rdata.args;
    if (args) {
      args = args.slice();
      while (args.length) {
        var /** @type {Object} */ argDef = args.shift();
        results.push(new org.apache.royale.reflection.MetaDataArgDefinition(argDef.key, argDef.value));
      }
    }
  }
  this._rawData = null;
  this.org_apache_royale_reflection_MetaDataDefinition__args = results.slice();
  return results;
};


Object.defineProperties(org.apache.royale.reflection.MetaDataDefinition.prototype, /** @lends {org.apache.royale.reflection.MetaDataDefinition.prototype} */ {
/**
  * @export
  * @type {Array} */
args: {
get: org.apache.royale.reflection.MetaDataDefinition.prototype.get__args}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.reflection.MetaDataDefinition.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MetaDataDefinition', qName: 'org.apache.royale.reflection.MetaDataDefinition', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.reflection.MetaDataDefinition.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'args': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.reflection.MetaDataDefinition'}
      };
    },
    methods: function () {
      return {
        'MetaDataDefinition': { type: '', declaredBy: 'org.apache.royale.reflection.MetaDataDefinition', parameters: function () { return [ 'String', false ,'Object', false ]; }},
        'getArgsByKey': { type: 'Array', declaredBy: 'org.apache.royale.reflection.MetaDataDefinition', parameters: function () { return [ 'String', false ]; }},
        'toString': { type: 'String', declaredBy: 'org.apache.royale.reflection.MetaDataDefinition'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.reflection.MetaDataDefinition.prototype.ROYALE_COMPILE_FLAGS = 10;

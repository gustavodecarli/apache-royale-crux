/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/DefinitionWithMetaData.as
 * org.apache.royale.reflection.DefinitionWithMetaData
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.DefinitionWithMetaData');
/* Royale Dependency List: org.apache.royale.reflection.MetaDataDefinition,org.apache.royale.reflection.getDefinitionByName*/

goog.require('org.apache.royale.reflection.DefinitionBase');



/**
 * @constructor
 * @extends {org.apache.royale.reflection.DefinitionBase}
 * @param {string} name
 * @param {Object=} rawData
 */
org.apache.royale.reflection.DefinitionWithMetaData = function(name, rawData) {
  rawData = typeof rawData !== 'undefined' ? rawData : null;
  org.apache.royale.reflection.DefinitionWithMetaData.base(this, 'constructor', name, rawData);
};
goog.inherits(org.apache.royale.reflection.DefinitionWithMetaData, org.apache.royale.reflection.DefinitionBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.reflection.DefinitionWithMetaData', org.apache.royale.reflection.DefinitionWithMetaData);


/**
 * @private
 * @type {Array}
 */
org.apache.royale.reflection.DefinitionWithMetaData.prototype.org_apache_royale_reflection_DefinitionWithMetaData__metaData;


/**
 * A convenience method for retrieving metadatas
 * @asparam name the name of the metadata item to retrieve.
 *        It can occur more than once, so an array is returned
 * @asreturn an array of all MetaDataDefinition items with matching 'name'
 *
 * @export
 * @param {string} name
 * @return {Array}
 */
org.apache.royale.reflection.DefinitionWithMetaData.prototype.retrieveMetaDataByName = function(name) {
  var /** @type {Array} */ source = this.org_apache_royale_reflection_DefinitionWithMetaData__metaData || this.metadata;
  var /** @type {Array} */ results = [];
  var /** @type {number} */ i = 0, /** @type {number} */ l = (source.length) >>> 0;
  if (l != 0) {
    for (; i < l; i++)
      if (source[i].name == name)
        results.push(source[i]);
  }
  return results;
};


org.apache.royale.reflection.DefinitionWithMetaData.prototype.get__metadata = function() {
  if (this.org_apache_royale_reflection_DefinitionWithMetaData__metaData)
    return this.org_apache_royale_reflection_DefinitionWithMetaData__metaData.slice();
  var /** @type {Array} */ results = [];
  
  var /** @type {*} */ rdata;
  var /** @type {Object} */ data = this.rawData;
  if (data.names !== undefined) {
    var /** @type {string} */ name = org.apache.royale.utils.Language.string(data.names[0].qName);
    var /** @type {Object} */ def = org.apache.royale.reflection.getDefinitionByName(name);
    if (def.prototype.ROYALE_REFLECTION_INFO)
      rdata = def.prototype.ROYALE_REFLECTION_INFO();
    else
      rdata = data;
  }
  else
    rdata = data;
  if (rdata !== undefined && rdata.metadata !== undefined) {
    var /** @type {Array} */ metadatas = rdata.metadata();
    if (metadatas) {
      var /** @type {number} */ i = 0;
      var /** @type {number} */ l = (metadatas.length) >> 0;
      for (; i < l; i++) {
        var /** @type {Object} */ mdDef = metadatas[i];
        results[i] = new org.apache.royale.reflection.MetaDataDefinition(mdDef.name, mdDef);
      }
    }
  }
  this.org_apache_royale_reflection_DefinitionWithMetaData__metaData = results.slice();
  return results;
};


Object.defineProperties(org.apache.royale.reflection.DefinitionWithMetaData.prototype, /** @lends {org.apache.royale.reflection.DefinitionWithMetaData.prototype} */ {
/**
  * @export
  * @type {Array} */
metadata: {
get: org.apache.royale.reflection.DefinitionWithMetaData.prototype.get__metadata}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.reflection.DefinitionWithMetaData.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DefinitionWithMetaData', qName: 'org.apache.royale.reflection.DefinitionWithMetaData', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.reflection.DefinitionWithMetaData.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'metadata': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.reflection.DefinitionWithMetaData'}
      };
    },
    methods: function () {
      return {
        'DefinitionWithMetaData': { type: '', declaredBy: 'org.apache.royale.reflection.DefinitionWithMetaData', parameters: function () { return [ 'String', false ,'Object', true ]; }},
        'retrieveMetaDataByName': { type: 'Array', declaredBy: 'org.apache.royale.reflection.DefinitionWithMetaData', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.reflection.DefinitionWithMetaData.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./DefinitionWithMetaData.js.map

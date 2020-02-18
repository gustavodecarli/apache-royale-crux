/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/reflection/IMetadataTag.as
 * org.apache.royale.crux.reflection.IMetadataTag
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.reflection.IMetadataTag');
/* Royale Dependency List: org.apache.royale.crux.reflection.IMetadataHost,org.apache.royale.crux.reflection.MetadataArg*/




/**
 * @interface
 */
org.apache.royale.crux.reflection.IMetadataTag = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.reflection.IMetadataTag', org.apache.royale.crux.reflection.IMetadataTag);
/**  * @type {string}
 */org.apache.royale.crux.reflection.IMetadataTag.prototype.name;
/**  * @type {Array}
 */org.apache.royale.crux.reflection.IMetadataTag.prototype.args;
/**  * @type {org.apache.royale.crux.reflection.IMetadataHost}
 */org.apache.royale.crux.reflection.IMetadataTag.prototype.host;
/**  * @type {string}
 */org.apache.royale.crux.reflection.IMetadataTag.prototype.asTag;
/**
 * @asparam argName Name of argument whose existence on this tag will be checked.
 * @asreturn Flag indicating whether or not this tag contains an argument for the given name.
 * @export
 * @param {string} argName
 * @return {boolean}
 */
org.apache.royale.crux.reflection.IMetadataTag.prototype.hasArg = function(argName) {
};
/**
 * @asparam argName Name of argument to retrieve.
 * @asreturn Argument for the given name.
 * @export
 * @param {string} argName
 * @return {org.apache.royale.crux.reflection.MetadataArg}
 */
org.apache.royale.crux.reflection.IMetadataTag.prototype.getArg = function(argName) {
};
/**
 * @export
 * @param {org.apache.royale.crux.reflection.IMetadataTag} metadataTag
 */
org.apache.royale.crux.reflection.IMetadataTag.prototype.copyFrom = function(metadataTag) {
};
/**
 * @export
 * @return {string}
 */
org.apache.royale.crux.reflection.IMetadataTag.prototype.toString = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.reflection.IMetadataTag.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IMetadataTag', qName: 'org.apache.royale.crux.reflection.IMetadataTag', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.reflection.IMetadataTag.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'name': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.crux.reflection.IMetadataTag'},
        'args': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.crux.reflection.IMetadataTag'},
        'host': { type: 'org.apache.royale.crux.reflection.IMetadataHost', access: 'readwrite', declaredBy: 'org.apache.royale.crux.reflection.IMetadataTag'},
        'asTag': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.crux.reflection.IMetadataTag'}
      };
    },
    methods: function () {
      return {
        'hasArg': { type: 'Boolean', declaredBy: 'org.apache.royale.crux.reflection.IMetadataTag', parameters: function () { return [ 'String', false ]; }},
        'getArg': { type: 'org.apache.royale.crux.reflection.MetadataArg', declaredBy: 'org.apache.royale.crux.reflection.IMetadataTag', parameters: function () { return [ 'String', false ]; }},
        'copyFrom': { type: 'void', declaredBy: 'org.apache.royale.crux.reflection.IMetadataTag', parameters: function () { return [ 'org.apache.royale.crux.reflection.IMetadataTag', false ]; }},
        'toString': { type: 'String', declaredBy: 'org.apache.royale.crux.reflection.IMetadataTag'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.reflection.IMetadataTag.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IMetadataTag.js.map

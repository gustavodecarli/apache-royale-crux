/**
 * Generated by Apache Royale Compiler from org/apache/royale/utils/net/IExternalizable.as
 * org.apache.royale.utils.net.IExternalizable
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.net.IExternalizable');
/* Royale Dependency List: org.apache.royale.utils.net.IDataInput,org.apache.royale.utils.net.IDataOutput*/




/**
 * @interface
 */
org.apache.royale.utils.net.IExternalizable = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.utils.net.IExternalizable', org.apache.royale.utils.net.IExternalizable);
/**
 * @export
 * @param {org.apache.royale.utils.net.IDataInput} input
 */
org.apache.royale.utils.net.IExternalizable.prototype.readExternal = function(input) {
};
/**
 * @export
 * @param {org.apache.royale.utils.net.IDataOutput} output
 */
org.apache.royale.utils.net.IExternalizable.prototype.writeExternal = function(output) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.utils.net.IExternalizable.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IExternalizable', qName: 'org.apache.royale.utils.net.IExternalizable', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.utils.net.IExternalizable.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'readExternal': { type: 'void', declaredBy: 'org.apache.royale.utils.net.IExternalizable', parameters: function () { return [ 'org.apache.royale.utils.net.IDataInput', false ]; }},
        'writeExternal': { type: 'void', declaredBy: 'org.apache.royale.utils.net.IExternalizable', parameters: function () { return [ 'org.apache.royale.utils.net.IDataOutput', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.utils.net.IExternalizable.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IExternalizable.js.map

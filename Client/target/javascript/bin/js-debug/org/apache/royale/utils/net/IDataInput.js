/**
 * Generated by Apache Royale Compiler from org/apache/royale/utils/net/IDataInput.as
 * org.apache.royale.utils.net.IDataInput
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.net.IDataInput');
/* Royale Dependency List: */

goog.require('org.apache.royale.utils.IBinaryDataInput');



/**
 * @interface
 * @extends {org.apache.royale.utils.IBinaryDataInput}
 */
org.apache.royale.utils.net.IDataInput = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.utils.net.IDataInput', org.apache.royale.utils.net.IDataInput);
/**
 * @export
 * @return {*}
 */
org.apache.royale.utils.net.IDataInput.prototype.readObject = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.utils.net.IDataInput.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IDataInput', qName: 'org.apache.royale.utils.net.IDataInput', kind: 'interface' }], interfaces: [org.apache.royale.utils.IBinaryDataInput] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.utils.net.IDataInput.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'readObject': { type: '*', declaredBy: 'org.apache.royale.utils.net.IDataInput'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.utils.net.IDataInput.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IDataInput.js.map

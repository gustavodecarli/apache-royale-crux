/**
 * Generated by Apache Royale Compiler from org/apache/royale/utils/net/IDynamicPropertyWriter.as
 * org.apache.royale.utils.net.IDynamicPropertyWriter
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.net.IDynamicPropertyWriter');
/* Royale Dependency List: org.apache.royale.utils.net.IDynamicPropertyOutput*/




/**
 * @interface
 */
org.apache.royale.utils.net.IDynamicPropertyWriter = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.utils.net.IDynamicPropertyWriter', org.apache.royale.utils.net.IDynamicPropertyWriter);
/**
 * Writes the name and value of an IDynamicPropertyOutput object to an object with dynamic properties.
 * If ObjectEncoding.dynamicPropertyWriter is set, this method is invoked for each object with dynamic properties.
 *
 * @asparam name  The name of the property. You can use this parameter either to specify the name of an existing property of the dynamic object or to create a new property.
 * @asparam value The value to write to the specified property.
 * @export
 * @param {Object} obj
 * @param {org.apache.royale.utils.net.IDynamicPropertyOutput} output
 */
org.apache.royale.utils.net.IDynamicPropertyWriter.prototype.writeDynamicProperties = function(obj, output) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.utils.net.IDynamicPropertyWriter.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IDynamicPropertyWriter', qName: 'org.apache.royale.utils.net.IDynamicPropertyWriter', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.utils.net.IDynamicPropertyWriter.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'writeDynamicProperties': { type: 'void', declaredBy: 'org.apache.royale.utils.net.IDynamicPropertyWriter', parameters: function () { return [ 'Object', false ,'org.apache.royale.utils.net.IDynamicPropertyOutput', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.utils.net.IDynamicPropertyWriter.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IDynamicPropertyWriter.js.map

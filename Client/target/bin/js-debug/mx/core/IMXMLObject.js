/**
 * Generated by Apache Royale Compiler from mx/core/IMXMLObject.as
 * mx.core.IMXMLObject
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.core.IMXMLObject');
/* Royale Dependency List: XML*/



/**
 * @interface
 */
mx.core.IMXMLObject = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.core.IMXMLObject', mx.core.IMXMLObject);
/**
 *  Called after the implementing object has been created and all
 *  component properties specified on the MXML tag have been initialized.
 *
 *  @asparam document The MXML document that created this object.
 *
 *  @asparam id The identifier used by <code>document</code> to refer
 *  to this object.
 *  If the object is a deep property on <code>document</code>,
 *  <code>id</code> is null.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} document
 * @param {string} id
 */
mx.core.IMXMLObject.prototype.initialized = function(document, id) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.core.IMXMLObject.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IMXMLObject', qName: 'mx.core.IMXMLObject', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.core.IMXMLObject.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'initialized': { type: 'void', declaredBy: 'mx.core.IMXMLObject', parameters: function () { return [ 'Object', false ,'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.core.IMXMLObject.prototype.ROYALE_COMPILE_FLAGS = 26;

/**
 * Generated by Apache Royale Compiler from mx/core/IFlexModuleFactory.as
 * mx.core.IFlexModuleFactory
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.core.IFlexModuleFactory');
/* Royale Dependency List: XML*/



/**
 * @interface
 */
mx.core.IFlexModuleFactory = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.core.IFlexModuleFactory', mx.core.IFlexModuleFactory);
/**
 *  Get the implementation for an interface.
 *  Similar to <code>Singleton.getInstance()</code> method, but per-
 *  IFlexModuleFactory.
 *
 *  @asparam interfaceName The interface.
 *
 *  @asreturn The implementation for the interface.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Flex 4
 * @export
 * @param {string} interfaceName
 * @return {Object}
 */
mx.core.IFlexModuleFactory.prototype.getImplementation = function(interfaceName) {
};
/**
 *  Returns a block of key/value pairs
 *  that hold static data known to the module.
 *  This method always succeeds, but can return an empty object.
 *
 *  @asreturn An object containing key/value pairs. Typically, this object
 *  contains information about the module or modules created by this 
 *  factory; for example:
 * 
 *  <pre>
 *  return {"description": "This module returns 42."};
 *  </pre>
 *  
 *  Other common values in the returned object include the following:
 *  <ul>
 *   <li><code>fonts</code>: A list of embedded font faces.</li>
 *   <li><code>rsls</code>: A list of run-time shared libraries.</li>
 *   <li><code>mixins</code>: A list of classes initialized at startup.</li>
 *  </ul>
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {Object}
 */
mx.core.IFlexModuleFactory.prototype.info = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.core.IFlexModuleFactory.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IFlexModuleFactory', qName: 'mx.core.IFlexModuleFactory', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.core.IFlexModuleFactory.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'getImplementation': { type: 'Object', declaredBy: 'mx.core.IFlexModuleFactory', parameters: function () { return [ 'String', false ]; }},
        'info': { type: 'Object', declaredBy: 'mx.core.IFlexModuleFactory'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.core.IFlexModuleFactory.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IFlexModuleFactory.js.map

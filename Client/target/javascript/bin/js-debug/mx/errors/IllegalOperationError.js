/**
 * Generated by Apache Royale Compiler from mx/errors/IllegalOperationError.as
 * mx.errors.IllegalOperationError
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.errors.IllegalOperationError');
/* Royale Dependency List: XML*/



/**
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 * @param {string=} message
 */
mx.errors.IllegalOperationError = function(message) {
  message = typeof message !== 'undefined' ? message : "";
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.errors.IllegalOperationError', mx.errors.IllegalOperationError);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.errors.IllegalOperationError.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IllegalOperationError', qName: 'mx.errors.IllegalOperationError', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.errors.IllegalOperationError.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'IllegalOperationError': { type: '', declaredBy: 'mx.errors.IllegalOperationError', parameters: function () { return [ 'String', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.errors.IllegalOperationError.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IllegalOperationError.js.map

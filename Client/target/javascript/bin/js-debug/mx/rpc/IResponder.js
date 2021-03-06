/**
 * Generated by Apache Royale Compiler from mx/rpc/IResponder.as
 * mx.rpc.IResponder
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.IResponder');
/* Royale Dependency List: XML*/



/**
 * @interface
 */
mx.rpc.IResponder = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.IResponder', mx.rpc.IResponder);
/**
 *  This method is called by a service when the return value
 *  has been received. 
 *  While <code>data</code> is typed as Object, it is often
 *  (but not always) an mx.rpc.events.ResultEvent object.
 *
 *  @asparam data Contains the information returned from the request.
 * @export
 * @param {Object} data
 */
mx.rpc.IResponder.prototype.result = function(data) {
};
/**
 *  This method is called by a service when an error has been received.
 *  While <code>info</code> is typed as Object it is often
 *  (but not always) an mx.rpc.events.FaultEvent object.
 *
 *  @asparam info Contains the information about the error that 
 *  occured.
 * @export
 * @param {Object} info
 */
mx.rpc.IResponder.prototype.fault = function(info) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.IResponder.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IResponder', qName: 'mx.rpc.IResponder', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.IResponder.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'result': { type: 'void', declaredBy: 'mx.rpc.IResponder', parameters: function () { return [ 'Object', false ]; }},
        'fault': { type: 'void', declaredBy: 'mx.rpc.IResponder', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.IResponder.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IResponder.js.map

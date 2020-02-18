/**
 * Generated by Apache Royale Compiler from mx/rpc/Responder.as
 * mx.rpc.Responder
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.Responder');
/* Royale Dependency List: XML*/

goog.require('mx.rpc.IResponder');



/**
 *  Constructs an instance of the responder with the specified handlers.
 *  
 *  @asparam  result Function that should be called when the request has
 *           completed successfully.
 *  @asparam  fault Function that should be called when the request has
 *          completed with errors.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @implements {mx.rpc.IResponder}
 * @param {Function} result
 * @param {Function} fault
 */
mx.rpc.Responder = function(result, fault) {
  ;
  this.mx_rpc_Responder__resultHandler = result;
  this.mx_rpc_Responder__faultHandler = fault;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.Responder', mx.rpc.Responder);


/**
 *  This method is called by a remote service when the return value has been 
 *  received.
 *
 *  @asparam data Object containing the information about the error that occured. .
 *  While <code>data</code> is typed as Object, it is often (but not always) 
 *  an mx.rpc.events.ResultEvent.
 * @export
 * @param {Object} data
 */
mx.rpc.Responder.prototype.result = function(data) {
  this.mx_rpc_Responder__resultHandler(data);
};


/**
 *  This method is called by a service when an error has been received.
 *
 *  @asparam info Object containing the information returned from the request.
 *  While <code>info</code> is typed as Object, it is often (but not always) 
 *  an mx.rpc.events.FaultEvent.
 * @export
 * @param {Object} info
 */
mx.rpc.Responder.prototype.fault = function(info) {
  this.mx_rpc_Responder__faultHandler(info);
};


/**
 * @private
 * @type {Function}
 */
mx.rpc.Responder.prototype.mx_rpc_Responder__resultHandler;


/**
 * @private
 * @type {Function}
 */
mx.rpc.Responder.prototype.mx_rpc_Responder__faultHandler;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.Responder.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Responder', qName: 'mx.rpc.Responder', kind: 'class' }], interfaces: [mx.rpc.IResponder] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.Responder.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'Responder': { type: '', declaredBy: 'mx.rpc.Responder', parameters: function () { return [ 'Function', false ,'Function', false ]; }},
        'result': { type: 'void', declaredBy: 'mx.rpc.Responder', parameters: function () { return [ 'Object', false ]; }},
        'fault': { type: 'void', declaredBy: 'mx.rpc.Responder', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.Responder.prototype.ROYALE_COMPILE_FLAGS = 26;

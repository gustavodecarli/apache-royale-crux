/**
 * Generated by Apache Royale Compiler from mx/rpc/AsyncRequest.as
 * mx.rpc.AsyncRequest
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.AsyncRequest');
/* Royale Dependency List: mx.core.mx_internal,mx.messaging.events.MessageEvent,mx.messaging.events.MessageFaultEvent,mx.messaging.messages.AcknowledgeMessage,mx.messaging.messages.ErrorMessage,mx.messaging.messages.IMessage,mx.rpc.IResponder,org.apache.royale.utils.Language,XML*/

goog.require('mx.messaging.Producer');



/**
 *  Constructs a new asynchronous request.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {mx.messaging.Producer}
 */
mx.rpc.AsyncRequest = function() {
  
  this.mx_rpc_AsyncRequest__pendingRequests = {};
  mx.rpc.AsyncRequest.base(this, 'constructor');
};
goog.inherits(mx.rpc.AsyncRequest, mx.messaging.Producer);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.AsyncRequest', mx.rpc.AsyncRequest);


/**
 *  Delegates to the results to responder
 *  @asparam    ack Message acknowlegdement of message previously sent
 *  @asparam    msg Message that was recieved the acknowledgement
 *  @asprivate
 * @export
 * @override
 */
mx.rpc.AsyncRequest.prototype.acknowledge = function(ack, msg) {
  var /** @type {boolean} */ error = !!(ack.headers[mx.messaging.messages.AcknowledgeMessage.ERROR_HINT_HEADER]);
  mx.rpc.AsyncRequest.superClass_.acknowledge.apply(this, [ ack, msg] );
  if (!error) {
    var /** @type {string} */ act = ack.correlationId;
    var /** @type {mx.rpc.IResponder} */ resp = org.apache.royale.utils.Language.as(this.mx_rpc_AsyncRequest__pendingRequests[act], mx.rpc.IResponder, true);
    if (resp) {
      delete this.mx_rpc_AsyncRequest__pendingRequests[act];
      resp.result(mx.messaging.events.MessageEvent.createEvent(mx.messaging.events.MessageEvent.RESULT, ack));
    }
  }
};


/**
 *  Delegates to the fault to responder
 *  @asparam    error message.
 *            The error codes and information are contained in the
 *            <code>headers</code> property
 *  @asparam    msg Message original message that caused the fault.
 *  @asprivate
 * @export
 * @override
 */
mx.rpc.AsyncRequest.prototype.fault = function(errMsg, msg) {
  mx.rpc.AsyncRequest.superClass_.fault.apply(this, [ errMsg, msg] );
  if (this._ignoreFault)
    return;
  var /** @type {string} */ act = msg.messageId;
  var /** @type {mx.rpc.IResponder} */ resp = org.apache.royale.utils.Language.as(this.mx_rpc_AsyncRequest__pendingRequests[act], mx.rpc.IResponder, true);
  if (resp) {
    delete this.mx_rpc_AsyncRequest__pendingRequests[act];
    resp.fault(mx.messaging.events.MessageFaultEvent.createEvent(errMsg));
  }
};


/**
 * Returns <code>true</code> if there are any pending requests for the passed in message.
 * 
 * @asparam msg The message for which the existence of pending requests is checked.
 *
 * @asreturn Returns <code>true</code> if there are any pending requests for the 
 * passed in message; otherwise, returns <code>false</code>.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @override
 */
mx.rpc.AsyncRequest.prototype.hasPendingRequestForMessage = function(msg) {
  var /** @type {string} */ act = msg.messageId;
  return !!(this.mx_rpc_AsyncRequest__pendingRequests[act]);
};


/**
 *  Dispatches the asynchronous request and stores the responder to call
 *  later.
 *
 * @asparam msg The message to be sent asynchronously.
 *
 * @asparam responder The responder to be called later.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {mx.messaging.messages.IMessage} msg
 * @param {mx.rpc.IResponder} responder
 */
mx.rpc.AsyncRequest.prototype.invoke = function(msg, responder) {
  this.mx_rpc_AsyncRequest__pendingRequests[msg.messageId] = responder;
  this.send(msg);
};


/**
 * @private
 * @type {Object}
 */
mx.rpc.AsyncRequest.prototype.mx_rpc_AsyncRequest__pendingRequests;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.AsyncRequest.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AsyncRequest', qName: 'mx.rpc.AsyncRequest', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.AsyncRequest.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'AsyncRequest': { type: '', declaredBy: 'mx.rpc.AsyncRequest'},
        'acknowledge': { type: 'void', declaredBy: 'mx.rpc.AsyncRequest', parameters: function () { return [ 'mx.messaging.messages.AcknowledgeMessage', false ,'mx.messaging.messages.IMessage', false ]; }},
        'fault': { type: 'void', declaredBy: 'mx.rpc.AsyncRequest', parameters: function () { return [ 'mx.messaging.messages.ErrorMessage', false ,'mx.messaging.messages.IMessage', false ]; }},
        'hasPendingRequestForMessage': { type: 'Boolean', declaredBy: 'mx.rpc.AsyncRequest', parameters: function () { return [ 'mx.messaging.messages.IMessage', false ]; }},
        'invoke': { type: 'void', declaredBy: 'mx.rpc.AsyncRequest', parameters: function () { return [ 'mx.messaging.messages.IMessage', false ,'mx.rpc.IResponder', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.AsyncRequest.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./AsyncRequest.js.map
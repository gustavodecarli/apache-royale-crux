/**
 * Generated by Apache Royale Compiler from mx/rpc/AsyncToken.as
 * mx.rpc.AsyncToken
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.AsyncToken');
/* Royale Dependency List: mx.core.mx_internal,mx.events.PropertyChangeEvent,mx.messaging.messages.IMessage,mx.rpc.IResponder,mx.rpc.events.FaultEvent,mx.rpc.events.ResultEvent,XML*/

goog.require('org.apache.royale.events.EventDispatcher');



/**
 * Constructs an instance of the token with the specified message.
 *
 * @asparam message The message with which the token is associated.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @param {mx.messaging.messages.IMessage=} message
 */
mx.rpc.AsyncToken = function(message) {
  message = typeof message !== 'undefined' ? message : null;
  mx.rpc.AsyncToken.base(this, 'constructor');
  this.mx_rpc_AsyncToken__message = message;
};
goog.inherits(mx.rpc.AsyncToken, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.AsyncToken', mx.rpc.AsyncToken);


/**
 * @private
 * @type {mx.messaging.messages.IMessage}
 */
mx.rpc.AsyncToken.prototype.mx_rpc_AsyncToken__message;


/**
 *  @asprivate
 * @export
 * @param {mx.messaging.messages.IMessage} message
 */
mx.rpc.AsyncToken.prototype.http_$$www_adobe_com$2006$flex$mx$internal__setMessage = function(message) {
  this.mx_rpc_AsyncToken__message = message;
};


/**
 * @private
 * @type {Array}
 */
mx.rpc.AsyncToken.prototype.mx_rpc_AsyncToken__responders;


/**
 * @private
 * @type {Object}
 */
mx.rpc.AsyncToken.prototype.mx_rpc_AsyncToken__result;


/**
 *  Adds a responder to an Array of responders. 
 *  The object assigned to the responder parameter must implement
 *  <code>mx.rpc.IResponder</code>.
 *
 *  @asparam responder A handler which will be called when the asynchronous request completes.
 * 
 *  @see mx.rpc.IResponder
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {mx.rpc.IResponder} responder
 */
mx.rpc.AsyncToken.prototype.addResponder = function(responder) {
  if (this.mx_rpc_AsyncToken__responders == null)
    this.mx_rpc_AsyncToken__responders = [];
  this.mx_rpc_AsyncToken__responders.push(responder);
};


/**
 * Determines if this token has at least one <code>mx.rpc.IResponder</code> registered.
 * @asreturn true if at least one responder has been added to this token. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {boolean}
 */
mx.rpc.AsyncToken.prototype.hasResponder = function() {
  return (this.mx_rpc_AsyncToken__responders != null && this.mx_rpc_AsyncToken__responders.length > 0);
};


/**
 * @asprivate
 * @export
 * @param {mx.rpc.events.FaultEvent} event
 */
mx.rpc.AsyncToken.prototype.http_$$www_adobe_com$2006$flex$mx$internal__applyFault = function(event) {
  if (this.mx_rpc_AsyncToken__responders != null) {
    for (var /** @type {number} */ i = 0; i < this.mx_rpc_AsyncToken__responders.length; i++) {
      var /** @type {mx.rpc.IResponder} */ responder = this.mx_rpc_AsyncToken__responders[i];
      if (responder != null) {
        responder.fault(event);
      }
    }
  }
};


/**
 * @asprivate
 * @export
 * @param {mx.rpc.events.ResultEvent} event
 */
mx.rpc.AsyncToken.prototype.http_$$www_adobe_com$2006$flex$mx$internal__applyResult = function(event) {
  this.http_$$www_adobe_com$2006$flex$mx$internal__setResult(event.result);
  if (this.mx_rpc_AsyncToken__responders != null) {
    for (var /** @type {number} */ i = 0; i < this.mx_rpc_AsyncToken__responders.length; i++) {
      var /** @type {mx.rpc.IResponder} */ responder = this.mx_rpc_AsyncToken__responders[i];
      if (responder != null) {
        responder.result(event);
      }
    }
  }
};


/**
 * @asprivate
 * @export
 * @param {Object} newResult
 */
mx.rpc.AsyncToken.prototype.http_$$www_adobe_com$2006$flex$mx$internal__setResult = function(newResult) {
  if (this.mx_rpc_AsyncToken__result !== newResult) {
    var /** @type {mx.events.PropertyChangeEvent} */ event = mx.events.PropertyChangeEvent.createUpdateEvent(this, "result", this.mx_rpc_AsyncToken__result, newResult);
    this.mx_rpc_AsyncToken__result = newResult;
    this.dispatchEvent(event);
  }
};


mx.rpc.AsyncToken.prototype.get__message = function() {
  return this.mx_rpc_AsyncToken__message;
};


mx.rpc.AsyncToken.prototype.get__responders = function() {
  return this.mx_rpc_AsyncToken__responders;
};


mx.rpc.AsyncToken.prototype.get__result = function() {
  return this.mx_rpc_AsyncToken__result;
};


Object.defineProperties(mx.rpc.AsyncToken.prototype, /** @lends {mx.rpc.AsyncToken.prototype} */ {
/**
  * @export
  * @type {mx.messaging.messages.IMessage} */
message: {
get: mx.rpc.AsyncToken.prototype.get__message},
/**
  * @export
  * @type {Array} */
responders: {
get: mx.rpc.AsyncToken.prototype.get__responders},
/**
  * @export
  * @type {Object} */
result: {
get: mx.rpc.AsyncToken.prototype.get__result}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.AsyncToken.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AsyncToken', qName: 'mx.rpc.AsyncToken', kind: 'class', isDynamic: true}] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.AsyncToken.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'message': { type: 'mx.messaging.messages.IMessage', access: 'readonly', declaredBy: 'mx.rpc.AsyncToken'},
        'responders': { type: 'Array', access: 'readonly', declaredBy: 'mx.rpc.AsyncToken'},
        'result': { type: 'Object', access: 'readonly', declaredBy: 'mx.rpc.AsyncToken', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'propertyChange' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        'AsyncToken': { type: '', declaredBy: 'mx.rpc.AsyncToken', parameters: function () { return [ 'mx.messaging.messages.IMessage', true ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::setMessage': { type: 'void', declaredBy: 'mx.rpc.AsyncToken', parameters: function () { return [ 'mx.messaging.messages.IMessage', false ]; }},
        'addResponder': { type: 'void', declaredBy: 'mx.rpc.AsyncToken', parameters: function () { return [ 'mx.rpc.IResponder', false ]; }},
        'hasResponder': { type: 'Boolean', declaredBy: 'mx.rpc.AsyncToken'},
        'http://www.adobe.com/2006/flex/mx/internal::applyFault': { type: 'void', declaredBy: 'mx.rpc.AsyncToken', parameters: function () { return [ 'mx.rpc.events.FaultEvent', false ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::applyResult': { type: 'void', declaredBy: 'mx.rpc.AsyncToken', parameters: function () { return [ 'mx.rpc.events.ResultEvent', false ]; }},
        'http://www.adobe.com/2006/flex/mx/internal::setResult': { type: 'void', declaredBy: 'mx.rpc.AsyncToken', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.AsyncToken.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./AsyncToken.js.map

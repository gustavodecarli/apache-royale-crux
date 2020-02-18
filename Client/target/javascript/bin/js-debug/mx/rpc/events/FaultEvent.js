/**
 * Generated by Apache Royale Compiler from mx/rpc/events/FaultEvent.as
 * mx.rpc.events.FaultEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.rpc.events.FaultEvent');
/* Royale Dependency List: mx.core.mx_internal,mx.messaging.events.MessageFaultEvent,mx.messaging.messages.AbstractMessage,mx.messaging.messages.IMessage,mx.rpc.AsyncToken,mx.rpc.Fault,org.apache.royale.events.Event,org.apache.royale.utils.Language,XML*/

goog.require('mx.rpc.events.AbstractEvent');



/**
 * Creates a new FaultEvent. The fault is a required parameter while the call and message are optional.
 *
 * @asparam type The event type; indicates the action that triggered the event.
 * @asparam bubbles Specifies whether the event can bubble up the display list hierarchy.
 * @asparam cancelable Specifies whether the behavior associated with the event can be prevented.
 * @asparam fault Object that holds details of the fault, including a faultCode and faultString.
 * @asparam token Token representing the call to the method. Used in the asynchronous completion token pattern.
 * @asparam message Source Message of the fault.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {mx.rpc.events.AbstractEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {mx.rpc.Fault=} fault
 * @param {mx.rpc.AsyncToken=} token
 * @param {mx.messaging.messages.IMessage=} message
 */
mx.rpc.events.FaultEvent = function(type, bubbles, cancelable, fault, token, message) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : true;
  fault = typeof fault !== 'undefined' ? fault : null;
  token = typeof token !== 'undefined' ? token : null;
  message = typeof message !== 'undefined' ? message : null;
  mx.rpc.events.FaultEvent.base(this, 'constructor', type, bubbles, cancelable, token, message);
  if (message != null && message.headers != null)
    this.mx_rpc_events_FaultEvent__statusCode = (org.apache.royale.utils.Language.as(message.headers[mx.messaging.messages.AbstractMessage.STATUS_CODE_HEADER], org.apache.royale.utils.Language.synthType('int'))) >> 0;
  this.mx_rpc_events_FaultEvent__fault = fault;
};
goog.inherits(mx.rpc.events.FaultEvent, mx.rpc.events.AbstractEvent);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.rpc.events.FaultEvent', mx.rpc.events.FaultEvent);


/**
 * @export
 * @const
 * @type {string}
 */
mx.rpc.events.FaultEvent.FAULT = "fault";


/** 
 * Because this event can be redispatched we have to implement clone to
 * return the appropriate type, otherwise we will get just the standard
 * event type.
 * @asprivate
 * @export
 * @override
 */
mx.rpc.events.FaultEvent.prototype.clone = function() {
  return new mx.rpc.events.FaultEvent(this.type, this.bubbles, this.cancelable, this.fault, this.token, this.message);
};


/**
 * Returns a string representation of the FaultEvent.
 *
 * @asreturn String representation of the FaultEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @override
 */
mx.rpc.events.FaultEvent.prototype.toString = function() {
  return this.formatToString("FaultEvent", "fault", "messageId", "type", "bubbles", "cancelable", "eventPhase");
};


/**
 * @export
 * @override
 */
mx.rpc.events.FaultEvent.prototype.http_$$www_adobe_com$2006$flex$mx$internal__callTokenResponders = function() {
  if (this.token != null)
    this.token.http_$$www_adobe_com$2006$flex$mx$internal__applyFault(this);
};


/**
 *  Given a MessageFaultEvent, this method constructs and
 *  returns a FaultEvent.
 * 
 *  @asparam value MessageFaultEvent reference to extract the appropriate
 *  fault information from.
 *  @asparam token AsyncToken [optional] associated with this fault.
 *  @asreturn Returns a FaultEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {mx.messaging.events.MessageFaultEvent} value
 * @param {mx.rpc.AsyncToken=} token
 * @return {mx.rpc.events.FaultEvent}
 */
mx.rpc.events.FaultEvent.createEventFromMessageFault = function(value, token) {
  token = typeof token !== 'undefined' ? token : null;
  var /** @type {mx.rpc.Fault} */ fault = new mx.rpc.Fault(value.faultCode, value.faultString, value.faultDetail);
  fault.rootCause = value.rootCause;
  return new mx.rpc.events.FaultEvent(mx.rpc.events.FaultEvent.FAULT, false, true, fault, token, value.message);
};


/**
 *  Given a Fault, this method constructs and
 *  returns a FaultEvent.
 * 
 *  @asparam fault Fault that contains the details of the FaultEvent.
 *  @asparam token AsyncToken [optional] associated with this fault.
 *  @asparam msg Message [optional] associated with this fault.
 *  @asreturn Returns a FaultEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {mx.rpc.Fault} fault
 * @param {mx.rpc.AsyncToken=} token
 * @param {mx.messaging.messages.IMessage=} msg
 * @return {mx.rpc.events.FaultEvent}
 */
mx.rpc.events.FaultEvent.createEvent = function(fault, token, msg) {
  token = typeof token !== 'undefined' ? token : null;
  msg = typeof msg !== 'undefined' ? msg : null;
  return new mx.rpc.events.FaultEvent(mx.rpc.events.FaultEvent.FAULT, false, true, fault, token, msg);
};


/**
 * @private
 * @type {mx.rpc.Fault}
 */
mx.rpc.events.FaultEvent.prototype.mx_rpc_events_FaultEvent__fault;


/**
 * @private
 * @type {Object}
 */
mx.rpc.events.FaultEvent.prototype.mx_rpc_events_FaultEvent__headers;


/**
 * @private
 * @type {number}
 */
mx.rpc.events.FaultEvent.prototype.mx_rpc_events_FaultEvent__statusCode = 0;


mx.rpc.events.FaultEvent.prototype.get__fault = function() {
  return this.mx_rpc_events_FaultEvent__fault;
};


mx.rpc.events.FaultEvent.prototype.get__headers = function() {
  return this.mx_rpc_events_FaultEvent__headers;
};


mx.rpc.events.FaultEvent.prototype.set__headers = function(value) {
  this.mx_rpc_events_FaultEvent__headers = value;
};


mx.rpc.events.FaultEvent.prototype.get__statusCode = function() {
  return this.mx_rpc_events_FaultEvent__statusCode;
};


Object.defineProperties(mx.rpc.events.FaultEvent.prototype, /** @lends {mx.rpc.events.FaultEvent.prototype} */ {
/**
  * @export
  * @type {mx.rpc.Fault} */
fault: {
get: mx.rpc.events.FaultEvent.prototype.get__fault},
/**
  * @export
  * @type {Object} */
headers: {
get: mx.rpc.events.FaultEvent.prototype.get__headers,
set: mx.rpc.events.FaultEvent.prototype.set__headers},
/**
  * @export
  * @type {number} */
statusCode: {
get: mx.rpc.events.FaultEvent.prototype.get__statusCode}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.rpc.events.FaultEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FaultEvent', qName: 'mx.rpc.events.FaultEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.rpc.events.FaultEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'fault': { type: 'mx.rpc.Fault', access: 'readonly', declaredBy: 'mx.rpc.events.FaultEvent'},
        'headers': { type: 'Object', access: 'readwrite', declaredBy: 'mx.rpc.events.FaultEvent'},
        'statusCode': { type: 'int', access: 'readonly', declaredBy: 'mx.rpc.events.FaultEvent'}
      };
    },
    methods: function () {
      return {
        'FaultEvent': { type: '', declaredBy: 'mx.rpc.events.FaultEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'mx.rpc.Fault', true ,'mx.rpc.AsyncToken', true ,'mx.messaging.messages.IMessage', true ]; }},
        'clone': { type: 'org.apache.royale.events.Event', declaredBy: 'mx.rpc.events.FaultEvent'},
        'toString': { type: 'String', declaredBy: 'mx.rpc.events.FaultEvent'},
        'http://www.adobe.com/2006/flex/mx/internal::callTokenResponders': { type: 'void', declaredBy: 'mx.rpc.events.FaultEvent'},
        '|createEventFromMessageFault': { type: 'mx.rpc.events.FaultEvent', declaredBy: 'mx.rpc.events.FaultEvent', parameters: function () { return [ 'mx.messaging.events.MessageFaultEvent', false ,'mx.rpc.AsyncToken', true ]; }},
        '|createEvent': { type: 'mx.rpc.events.FaultEvent', declaredBy: 'mx.rpc.events.FaultEvent', parameters: function () { return [ 'mx.rpc.Fault', false ,'mx.rpc.AsyncToken', true ,'mx.messaging.messages.IMessage', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.rpc.events.FaultEvent.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./FaultEvent.js.map
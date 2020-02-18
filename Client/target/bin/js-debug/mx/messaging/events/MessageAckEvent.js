/**
 * Generated by Apache Royale Compiler from mx/messaging/events/MessageAckEvent.as
 * mx.messaging.events.MessageAckEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.events.MessageAckEvent');
/* Royale Dependency List: mx.messaging.messages.AcknowledgeMessage,mx.messaging.messages.IMessage,org.apache.royale.events.Event,org.apache.royale.utils.Language,XML*/

goog.require('mx.messaging.events.MessageEvent');



/**
 *  Constructs an instance of this event with the specified acknowledge
 *  message and original correlated message.
 *
 *  @asparam type The type for the MessageAckEvent.
 * 
 *  @asparam bubbles Specifies whether the event can bubble up the display 
 *  list hierarchy.
 * 
 *  @asparam cancelable Indicates whether the behavior associated with the 
 *  event can be prevented.
 * 
 *  @asparam ack The AcknowledgeMessage this event should dispatch.
 *  
 *  @asparam correlation The message correlated with this acknowledgement.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 * @extends {mx.messaging.events.MessageEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {mx.messaging.messages.AcknowledgeMessage=} ack
 * @param {mx.messaging.messages.IMessage=} correlation
 */
mx.messaging.events.MessageAckEvent = function(type, bubbles, cancelable, ack, correlation) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  ack = typeof ack !== 'undefined' ? ack : null;
  correlation = typeof correlation !== 'undefined' ? correlation : null;
  mx.messaging.events.MessageAckEvent.base(this, 'constructor', type, bubbles, cancelable, ack);
  this.correlation = correlation;
};
goog.inherits(mx.messaging.events.MessageAckEvent, mx.messaging.events.MessageEvent);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.events.MessageAckEvent', mx.messaging.events.MessageAckEvent);


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.events.MessageAckEvent.ACKNOWLEDGE = "acknowledge";


/**
 *  Utility method to create a new MessageAckEvent that doesn't bubble and
 *  is not cancelable.
 * 
 *  @asparam ack The AcknowledgeMessage this event should dispatch.
 *  
 *  @asparam correlation The Message correlated with this acknowledgement.
 * 
 *  @asreturn New MessageAckEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @param {mx.messaging.messages.AcknowledgeMessage=} ack
 * @param {mx.messaging.messages.IMessage=} correlation
 * @return {mx.messaging.events.MessageAckEvent}
 */
mx.messaging.events.MessageAckEvent.createEvent = function(ack, correlation) {
  ack = typeof ack !== 'undefined' ? ack : null;
  correlation = typeof correlation !== 'undefined' ? correlation : null;
  return new mx.messaging.events.MessageAckEvent(mx.messaging.events.MessageAckEvent.ACKNOWLEDGE, false, false, ack, correlation);
};


/**
 * @export
 * @type {mx.messaging.messages.IMessage}
 */
mx.messaging.events.MessageAckEvent.prototype.correlation;


/**
 *  Clones the MessageAckEvent.
 *
 *  @asreturn Copy of this MessageAckEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @override
 */
mx.messaging.events.MessageAckEvent.prototype.clone = function() {
  return new mx.messaging.events.MessageAckEvent(this.type, this.bubbles, this.cancelable, org.apache.royale.utils.Language.as(this.message, mx.messaging.messages.AcknowledgeMessage), this.correlation);
};


/**
 *  Returns a string representation of the MessageAckEvent.
 *
 *  @asreturn String representation of the MessageAckEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @override
 */
mx.messaging.events.MessageAckEvent.prototype.toString = function() {
  return this.formatToString("MessageAckEvent", "messageId", "correlationId", "type", "bubbles", "cancelable", "eventPhase");
};


mx.messaging.events.MessageAckEvent.prototype.get__acknowledgeMessage = function() {
  return org.apache.royale.utils.Language.as(this.message, mx.messaging.messages.AcknowledgeMessage);
};


mx.messaging.events.MessageAckEvent.prototype.get__correlationId = function() {
  if (this.correlation != null) {
    return this.correlation.messageId;
  }
  return null;
};


Object.defineProperties(mx.messaging.events.MessageAckEvent.prototype, /** @lends {mx.messaging.events.MessageAckEvent.prototype} */ {
/**
  * @export
  * @type {mx.messaging.messages.AcknowledgeMessage} */
acknowledgeMessage: {
get: mx.messaging.events.MessageAckEvent.prototype.get__acknowledgeMessage},
/**
  * @export
  * @type {string} */
correlationId: {
get: mx.messaging.events.MessageAckEvent.prototype.get__correlationId}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.events.MessageAckEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MessageAckEvent', qName: 'mx.messaging.events.MessageAckEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.events.MessageAckEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'correlation': { type: 'mx.messaging.messages.IMessage', get_set: function (/** mx.messaging.events.MessageAckEvent */ inst, /** * */ v) {return v !== undefined ? inst.correlation = v : inst.correlation;}}
      };
    },
    accessors: function () {
      return {
        'acknowledgeMessage': { type: 'mx.messaging.messages.AcknowledgeMessage', access: 'readonly', declaredBy: 'mx.messaging.events.MessageAckEvent'},
        'correlationId': { type: 'String', access: 'readonly', declaredBy: 'mx.messaging.events.MessageAckEvent'}
      };
    },
    methods: function () {
      return {
        '|createEvent': { type: 'mx.messaging.events.MessageAckEvent', declaredBy: 'mx.messaging.events.MessageAckEvent', parameters: function () { return [ 'mx.messaging.messages.AcknowledgeMessage', true ,'mx.messaging.messages.IMessage', true ]; }},
        'MessageAckEvent': { type: '', declaredBy: 'mx.messaging.events.MessageAckEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'mx.messaging.messages.AcknowledgeMessage', true ,'mx.messaging.messages.IMessage', true ]; }},
        'clone': { type: 'org.apache.royale.events.Event', declaredBy: 'mx.messaging.events.MessageAckEvent'},
        'toString': { type: 'String', declaredBy: 'mx.messaging.events.MessageAckEvent'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.events.MessageAckEvent.prototype.ROYALE_COMPILE_FLAGS = 26;

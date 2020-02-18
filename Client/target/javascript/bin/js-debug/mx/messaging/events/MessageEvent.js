/**
 * Generated by Apache Royale Compiler from mx/messaging/events/MessageEvent.as
 * mx.messaging.events.MessageEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.events.MessageEvent');
/* Royale Dependency List: mx.core.mx_internal,mx.messaging.messages.IMessage,XML*/

goog.require('org.apache.royale.events.Event');



/**
 *  Constructs an instance of this event with the specified type and 
 *  message.
 * 
 *  @asparam type The type for the MessageEvent.
 * 
 *  @asparam bubbles Specifies whether the event can bubble up the display 
 *  list hierarchy.
 * 
 *  @asparam cancelable Indicates whether the behavior associated with the 
 *  event can be prevented; used by the RPC subclasses.
 * 
 *  @asparam message The associated message.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 * @extends {org.apache.royale.events.Event}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {mx.messaging.messages.IMessage=} message
 */
mx.messaging.events.MessageEvent = function(type, bubbles, cancelable, message) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  message = typeof message !== 'undefined' ? message : null;
  mx.messaging.events.MessageEvent.base(this, 'constructor', type, bubbles, cancelable);
  this.message = message;
};
goog.inherits(mx.messaging.events.MessageEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.events.MessageEvent', mx.messaging.events.MessageEvent);


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.events.MessageEvent.MESSAGE = "message";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.events.MessageEvent.RESULT = "result";


/**
 *  Utility method to create a new MessageEvent that doesn't bubble and
 *  is not cancelable.
 * 
 *  @asparam type The type for the MessageEvent.
 *  
 *  @asparam message The associated message.
 * 
 *  @asreturn New MessageEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @param {string} type
 * @param {mx.messaging.messages.IMessage} msg
 * @return {mx.messaging.events.MessageEvent}
 */
mx.messaging.events.MessageEvent.createEvent = function(type, msg) {
  return new mx.messaging.events.MessageEvent(type, false, false, msg);
};


/**
 * @export
 * @type {mx.messaging.messages.IMessage}
 */
mx.messaging.events.MessageEvent.prototype.message;


/**
 *  Clones the MessageEvent.
 *
 *  @asreturn Copy of this MessageEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @return {org.apache.royale.events.Event}
 */
mx.messaging.events.MessageEvent.prototype.clone = function() {
  return new mx.messaging.events.MessageEvent(this.type, this.bubbles, this.cancelable, this.message);
};


/**
 *  Returns a string representation of the MessageEvent.
 *
 *  @asreturn String representation of the MessageEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @return {string}
 */
mx.messaging.events.MessageEvent.prototype.toString = function() {
  return this.formatToString("MessageEvent", "messageId", "type", "bubbles", "cancelable", "eventPhase");
};


/**
 * @export
 * @param {string} className
 * @param {...} args
 * @return {string}
 */
mx.messaging.events.MessageEvent.prototype.formatToString = function(className, args) {
  args = Array.prototype.slice.call(arguments, 1);
  var foreachiter0_target = args;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var s = foreachiter0_target[foreachiter0];
  
    className += " " + s;}
  
  return className;
};


mx.messaging.events.MessageEvent.prototype.get__messageId = function() {
  if (this.message != null) {
    return this.message.messageId;
  }
  return null;
};


Object.defineProperties(mx.messaging.events.MessageEvent.prototype, /** @lends {mx.messaging.events.MessageEvent.prototype} */ {
/**
  * @export
  * @type {string} */
messageId: {
get: mx.messaging.events.MessageEvent.prototype.get__messageId}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.events.MessageEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MessageEvent', qName: 'mx.messaging.events.MessageEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.events.MessageEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'message': { type: 'mx.messaging.messages.IMessage', get_set: function (/** mx.messaging.events.MessageEvent */ inst, /** * */ v) {return v !== undefined ? inst.message = v : inst.message;}}
      };
    },
    accessors: function () {
      return {
        'messageId': { type: 'String', access: 'readonly', declaredBy: 'mx.messaging.events.MessageEvent'}
      };
    },
    methods: function () {
      return {
        '|createEvent': { type: 'mx.messaging.events.MessageEvent', declaredBy: 'mx.messaging.events.MessageEvent', parameters: function () { return [ 'String', false ,'mx.messaging.messages.IMessage', false ]; }},
        'MessageEvent': { type: '', declaredBy: 'mx.messaging.events.MessageEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'mx.messaging.messages.IMessage', true ]; }},
        'clone': { type: 'org.apache.royale.events.Event', declaredBy: 'mx.messaging.events.MessageEvent'},
        'toString': { type: 'String', declaredBy: 'mx.messaging.events.MessageEvent'},
        'formatToString': { type: 'String', declaredBy: 'mx.messaging.events.MessageEvent', parameters: function () { return [ 'String', false ,'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.events.MessageEvent.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./MessageEvent.js.map
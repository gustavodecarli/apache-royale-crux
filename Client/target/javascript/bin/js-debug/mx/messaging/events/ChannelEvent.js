/**
 * Generated by Apache Royale Compiler from mx/messaging/events/ChannelEvent.as
 * mx.messaging.events.ChannelEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.events.ChannelEvent');
/* Royale Dependency List: mx.messaging.Channel,XML*/

goog.require('org.apache.royale.events.Event');



/**
 *  Constructs an instance of this event with the specified type and Channel
 *  instance.
 * 
 *  @asparam type The ChannelEvent type.
 * 
 *  @asparam bubbles Specifies whether the event can bubble up the display 
 *  list hierarchy.
 * 
 *  @asparam cancelable Indicates whether the behavior associated with the 
 *  event can be prevented; used by the RPC subclasses.
 *
 *  @asparam channel The Channel generating the event.
 * 
 *  @asparam reconnecting Indicates whether the Channel is in the process of
 *  reconnecting or not.
 * 
 *  @asparam rejected Indicates whether the Channel's connection has been rejected,
 *  which suppresses automatic reconnection.
 * 
 *  @asparam connected Indicates whether the Channel that generated this event 
 *  is already connected.
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
 * @param {mx.messaging.Channel=} channel
 * @param {boolean=} reconnecting
 * @param {boolean=} rejected
 * @param {boolean=} connected
 */
mx.messaging.events.ChannelEvent = function(type, bubbles, cancelable, channel, reconnecting, rejected, connected) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  channel = typeof channel !== 'undefined' ? channel : null;
  reconnecting = typeof reconnecting !== 'undefined' ? reconnecting : false;
  rejected = typeof rejected !== 'undefined' ? rejected : false;
  connected = typeof connected !== 'undefined' ? connected : false;
  mx.messaging.events.ChannelEvent.base(this, 'constructor', type, bubbles, cancelable);
  this.channel = channel;
  this.reconnecting = reconnecting;
  this.rejected = rejected;
  this.connected = connected;
};
goog.inherits(mx.messaging.events.ChannelEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.events.ChannelEvent', mx.messaging.events.ChannelEvent);


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.events.ChannelEvent.CONNECT = "channelConnect";


/**
 * @export
 * @const
 * @type {string}
 */
mx.messaging.events.ChannelEvent.DISCONNECT = "channelDisconnect";


/**
 *  Utility method to create a new ChannelEvent that doesn't bubble and
 *  is not cancelable.
 * 
 *  @asparam type The ChannelEvent type.
 *  
 *  @asparam channel The Channel generating the event.
 * 
 *  @asparam reconnecting Indicates whether the Channel is in the process of
 *  reconnecting or not.
 * 
 *  @asparam rejected Indicates whether the Channel's connection has been rejected,
 *  which suppresses automatic reconnection.
 * 
 *  @asparam connected Indicates whether the Channel that generated this event 
 *  is already connected.
 * 
 *  @asreturn New ChannelEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @param {string} type
 * @param {mx.messaging.Channel=} channel
 * @param {boolean=} reconnecting
 * @param {boolean=} rejected
 * @param {boolean=} connected
 * @return {mx.messaging.events.ChannelEvent}
 */
mx.messaging.events.ChannelEvent.createEvent = function(type, channel, reconnecting, rejected, connected) {
  channel = typeof channel !== 'undefined' ? channel : null;
  reconnecting = typeof reconnecting !== 'undefined' ? reconnecting : false;
  rejected = typeof rejected !== 'undefined' ? rejected : false;
  connected = typeof connected !== 'undefined' ? connected : false;
  return new mx.messaging.events.ChannelEvent(type, false, false, channel, reconnecting, rejected, connected);
};


/**
 * @export
 * @type {mx.messaging.Channel}
 */
mx.messaging.events.ChannelEvent.prototype.channel;


/**
 * @export
 * @type {boolean}
 */
mx.messaging.events.ChannelEvent.prototype.connected;


/**
 * @export
 * @type {boolean}
 */
mx.messaging.events.ChannelEvent.prototype.reconnecting;


/**
 * @export
 * @type {boolean}
 */
mx.messaging.events.ChannelEvent.prototype.rejected;


/**
 *  Clones the ChannelEvent.
 *
 *  @asreturn Copy of this ChannelEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @return {org.apache.royale.events.Event}
 */
mx.messaging.events.ChannelEvent.prototype.clone = function() {
  return new mx.messaging.events.ChannelEvent(this.type, this.bubbles, this.cancelable, this.channel, this.reconnecting, this.rejected, this.connected);
};


/**
 *  Returns a string representation of the ChannelEvent.
 *
 *  @asreturn String representation of the ChannelEvent.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @return {string}
 */
mx.messaging.events.ChannelEvent.prototype.toString = function() {
  return this.formatToString("ChannelEvent", "channelId", "reconnecting", "rejected", "type", "bubbles", "cancelable", "eventPhase");
};


/**
 * @export
 * @param {string} className
 * @param {...} args
 * @return {string}
 */
mx.messaging.events.ChannelEvent.prototype.formatToString = function(className, args) {
  args = Array.prototype.slice.call(arguments, 1);
  var foreachiter0_target = args;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var s = foreachiter0_target[foreachiter0];
  
    className += " " + s;}
  
  return className;
};


mx.messaging.events.ChannelEvent.prototype.get__channelId = function() {
  if (this.channel != null) {
    return this.channel.id;
  }
  return null;
};


Object.defineProperties(mx.messaging.events.ChannelEvent.prototype, /** @lends {mx.messaging.events.ChannelEvent.prototype} */ {
/**
  * @export
  * @type {string} */
channelId: {
get: mx.messaging.events.ChannelEvent.prototype.get__channelId}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.events.ChannelEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ChannelEvent', qName: 'mx.messaging.events.ChannelEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.events.ChannelEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'channel': { type: 'mx.messaging.Channel', get_set: function (/** mx.messaging.events.ChannelEvent */ inst, /** * */ v) {return v !== undefined ? inst.channel = v : inst.channel;}},
        'connected': { type: 'Boolean', get_set: function (/** mx.messaging.events.ChannelEvent */ inst, /** * */ v) {return v !== undefined ? inst.connected = v : inst.connected;}},
        'reconnecting': { type: 'Boolean', get_set: function (/** mx.messaging.events.ChannelEvent */ inst, /** * */ v) {return v !== undefined ? inst.reconnecting = v : inst.reconnecting;}},
        'rejected': { type: 'Boolean', get_set: function (/** mx.messaging.events.ChannelEvent */ inst, /** * */ v) {return v !== undefined ? inst.rejected = v : inst.rejected;}}
      };
    },
    accessors: function () {
      return {
        'channelId': { type: 'String', access: 'readonly', declaredBy: 'mx.messaging.events.ChannelEvent'}
      };
    },
    methods: function () {
      return {
        '|createEvent': { type: 'mx.messaging.events.ChannelEvent', declaredBy: 'mx.messaging.events.ChannelEvent', parameters: function () { return [ 'String', false ,'mx.messaging.Channel', true ,'Boolean', true ,'Boolean', true ,'Boolean', true ]; }},
        'ChannelEvent': { type: '', declaredBy: 'mx.messaging.events.ChannelEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ,'mx.messaging.Channel', true ,'Boolean', true ,'Boolean', true ,'Boolean', true ]; }},
        'clone': { type: 'org.apache.royale.events.Event', declaredBy: 'mx.messaging.events.ChannelEvent'},
        'toString': { type: 'String', declaredBy: 'mx.messaging.events.ChannelEvent'},
        'formatToString': { type: 'String', declaredBy: 'mx.messaging.events.ChannelEvent', parameters: function () { return [ 'String', false ,'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.events.ChannelEvent.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ChannelEvent.js.map

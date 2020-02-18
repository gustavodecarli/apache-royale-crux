/**
 * Generated by Apache Royale Compiler from mx/messaging/channels/SecureAMFChannel.as
 * mx.messaging.channels.SecureAMFChannel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.channels.SecureAMFChannel');
/* Royale Dependency List: XML*/

goog.require('mx.messaging.channels.AMFChannel');



/**
 *  Constructor.
 *
 *  @asparam id The id of this Channel.
 *  
 *  @asparam uri The uri for this Channel.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 * @extends {mx.messaging.channels.AMFChannel}
 * @param {string=} id
 * @param {string=} uri
 */
mx.messaging.channels.SecureAMFChannel = function(id, uri) {
  id = typeof id !== 'undefined' ? id : null;
  uri = typeof uri !== 'undefined' ? uri : null;
  mx.messaging.channels.SecureAMFChannel.base(this, 'constructor', id, uri);
};
goog.inherits(mx.messaging.channels.SecureAMFChannel, mx.messaging.channels.AMFChannel);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.channels.SecureAMFChannel', mx.messaging.channels.SecureAMFChannel);


mx.messaging.channels.SecureAMFChannel.prototype.get__protocol = function() {
  return "https";
};


Object.defineProperties(mx.messaging.channels.SecureAMFChannel.prototype, /** @lends {mx.messaging.channels.SecureAMFChannel.prototype} */ {
/**
  * @export
  * @type {string} */
protocol: {
get: mx.messaging.channels.SecureAMFChannel.prototype.get__protocol}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.channels.SecureAMFChannel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SecureAMFChannel', qName: 'mx.messaging.channels.SecureAMFChannel', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.channels.SecureAMFChannel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'protocol': { type: 'String', access: 'readonly', declaredBy: 'mx.messaging.channels.SecureAMFChannel'}
      };
    },
    methods: function () {
      return {
        'SecureAMFChannel': { type: '', declaredBy: 'mx.messaging.channels.SecureAMFChannel', parameters: function () { return [ 'String', true ,'String', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.channels.SecureAMFChannel.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./SecureAMFChannel.js.map

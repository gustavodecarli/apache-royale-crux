/**
 * Generated by Apache Royale Compiler from mx/messaging/messages/CommandMessageExt.as
 * mx.messaging.messages.CommandMessageExt
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.messages.CommandMessageExt');
/* Royale Dependency List: org.apache.royale.utils.net.IDataOutput,XML*/

goog.require('mx.messaging.messages.CommandMessage');
goog.require('org.apache.royale.utils.net.IExternalizable');



/**
 * @constructor
 * @extends {mx.messaging.messages.CommandMessage}
 * @implements {org.apache.royale.utils.net.IExternalizable}
 * @param {mx.messaging.messages.CommandMessage=} message
 */
mx.messaging.messages.CommandMessageExt = function(message) {
  message = typeof message !== 'undefined' ? message : null;
  mx.messaging.messages.CommandMessageExt.base(this, 'constructor');
  this.mx_messaging_messages_CommandMessageExt__message = message;
};
goog.inherits(mx.messaging.messages.CommandMessageExt, mx.messaging.messages.CommandMessage);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.messages.CommandMessageExt', mx.messaging.messages.CommandMessageExt);


/**
 * @export
 * @override
 */
mx.messaging.messages.CommandMessageExt.prototype.writeExternal = function(output) {
  if (this.mx_messaging_messages_CommandMessageExt__message != null)
    this.mx_messaging_messages_CommandMessageExt__message.writeExternal(output);
  else
    mx.messaging.messages.CommandMessageExt.superClass_.writeExternal.apply(this, [ output] );
};


/**
 * @private
 * @type {mx.messaging.messages.CommandMessage}
 */
mx.messaging.messages.CommandMessageExt.prototype.mx_messaging_messages_CommandMessageExt__message;


mx.messaging.messages.CommandMessageExt.prototype.get__messageId = function() {
  if (this.mx_messaging_messages_CommandMessageExt__message != null)
    return this.mx_messaging_messages_CommandMessageExt__message.messageId;
  return mx.messaging.messages.CommandMessageExt.superClass_.get__messageId.apply(this);
};


Object.defineProperties(mx.messaging.messages.CommandMessageExt.prototype, /** @lends {mx.messaging.messages.CommandMessageExt.prototype} */ {
/**
  * @export
  * @type {string} */
messageId: {
get: mx.messaging.messages.CommandMessageExt.prototype.get__messageId,
set: mx.messaging.messages.AbstractMessage.prototype.set__messageId}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.messages.CommandMessageExt.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CommandMessageExt', qName: 'mx.messaging.messages.CommandMessageExt', kind: 'class' }], interfaces: [org.apache.royale.utils.net.IExternalizable] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.messages.CommandMessageExt.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'messageId': { type: 'String', access: 'readonly', declaredBy: 'mx.messaging.messages.CommandMessageExt'}
      };
    },
    methods: function () {
      return {
        'CommandMessageExt': { type: '', declaredBy: 'mx.messaging.messages.CommandMessageExt', parameters: function () { return [ 'mx.messaging.messages.CommandMessage', true ]; }},
        'writeExternal': { type: 'void', declaredBy: 'mx.messaging.messages.CommandMessageExt', parameters: function () { return [ 'org.apache.royale.utils.net.IDataOutput', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.messages.CommandMessageExt.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./CommandMessageExt.js.map

/**
 * Generated by Apache Royale Compiler from org/apache/royale/net/remoting/messages/AsyncMessageExt.as
 * org.apache.royale.net.remoting.messages.AsyncMessageExt
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.net.remoting.messages.AsyncMessageExt');
/* Royale Dependency List: org.apache.royale.utils.net.IDataOutput*/

goog.require('org.apache.royale.net.remoting.messages.AsyncMessage');
goog.require('org.apache.royale.utils.net.IExternalizable');



/**
 * @constructor
 * @extends {org.apache.royale.net.remoting.messages.AsyncMessage}
 * @implements {org.apache.royale.utils.net.IExternalizable}
 * @param {org.apache.royale.net.remoting.messages.AsyncMessage=} message
 */
org.apache.royale.net.remoting.messages.AsyncMessageExt = function(message) {
  message = typeof message !== 'undefined' ? message : null;
  org.apache.royale.net.remoting.messages.AsyncMessageExt.base(this, 'constructor');
  this.org_apache_royale_net_remoting_messages_AsyncMessageExt__message = message;
};
goog.inherits(org.apache.royale.net.remoting.messages.AsyncMessageExt, org.apache.royale.net.remoting.messages.AsyncMessage);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.net.remoting.messages.AsyncMessageExt', org.apache.royale.net.remoting.messages.AsyncMessageExt);


/**
 * @export
 * @override
 */
org.apache.royale.net.remoting.messages.AsyncMessageExt.prototype.writeExternal = function(output) {
  if (this.org_apache_royale_net_remoting_messages_AsyncMessageExt__message != null)
    this.org_apache_royale_net_remoting_messages_AsyncMessageExt__message.writeExternal(output);
  else
    org.apache.royale.net.remoting.messages.AsyncMessageExt.superClass_.writeExternal.apply(this, [ output] );
};


/**
 * @private
 * @type {org.apache.royale.net.remoting.messages.AsyncMessage}
 */
org.apache.royale.net.remoting.messages.AsyncMessageExt.prototype.org_apache_royale_net_remoting_messages_AsyncMessageExt__message;


org.apache.royale.net.remoting.messages.AsyncMessageExt.prototype.get__messageId = function() {
  if (this.org_apache_royale_net_remoting_messages_AsyncMessageExt__message != null)
    return this.org_apache_royale_net_remoting_messages_AsyncMessageExt__message.messageId;
  return org.apache.royale.net.remoting.messages.AsyncMessageExt.superClass_.get__messageId.apply(this);
};


Object.defineProperties(org.apache.royale.net.remoting.messages.AsyncMessageExt.prototype, /** @lends {org.apache.royale.net.remoting.messages.AsyncMessageExt.prototype} */ {
/**
  * @export
  * @type {string} */
messageId: {
get: org.apache.royale.net.remoting.messages.AsyncMessageExt.prototype.get__messageId,
set: org.apache.royale.net.remoting.messages.AbstractMessage.prototype.set__messageId}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.net.remoting.messages.AsyncMessageExt.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AsyncMessageExt', qName: 'org.apache.royale.net.remoting.messages.AsyncMessageExt', kind: 'class' }], interfaces: [org.apache.royale.utils.net.IExternalizable] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.net.remoting.messages.AsyncMessageExt.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'messageId': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.net.remoting.messages.AsyncMessageExt'}
      };
    },
    methods: function () {
      return {
        'AsyncMessageExt': { type: '', declaredBy: 'org.apache.royale.net.remoting.messages.AsyncMessageExt', parameters: function () { return [ 'org.apache.royale.net.remoting.messages.AsyncMessage', true ]; }},
        'writeExternal': { type: 'void', declaredBy: 'org.apache.royale.net.remoting.messages.AsyncMessageExt', parameters: function () { return [ 'org.apache.royale.utils.net.IDataOutput', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.net.remoting.messages.AsyncMessageExt.prototype.ROYALE_COMPILE_FLAGS = 10;
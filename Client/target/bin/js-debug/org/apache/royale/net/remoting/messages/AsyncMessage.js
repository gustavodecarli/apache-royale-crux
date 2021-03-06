/**
 * Generated by Apache Royale Compiler from org/apache/royale/net/remoting/messages/AsyncMessage.as
 * org.apache.royale.net.remoting.messages.AsyncMessage
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.net.remoting.messages.AsyncMessage');
/* Royale Dependency List: org.apache.royale.net.remoting.messages.AsyncMessageExt,org.apache.royale.net.remoting.messages.IMessage,org.apache.royale.utils.BinaryData,org.apache.royale.utils.UIDUtil,org.apache.royale.utils.net.IDataInput,org.apache.royale.utils.net.IDataOutput,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.net.remoting.messages.AbstractMessage');
goog.require('org.apache.royale.net.remoting.messages.ISmallMessage');



/**
 *  Constructs an instance of an AsyncMessage with an empty body and header.
 *  In addition to this default behavior, the body and the headers for the
 *  message may also be passed to the constructor as a convenience.
 *  An example of this invocation approach for the body is:
 *  <code>var msg:AsyncMessage = new AsyncMessage("Body text");</code>
 *  An example that provides both the body and headers is:
 *  <code>var msg:AsyncMessage = new AsyncMessage("Body text", {"customerHeader":"customValue"});</code>
 *
 *  @asparam body The optional body to assign to the message.
 *
 *  @asparam headers The optional headers to assign to the message.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3
 * @constructor
 * @extends {org.apache.royale.net.remoting.messages.AbstractMessage}
 * @implements {org.apache.royale.net.remoting.messages.ISmallMessage}
 * @param {Object=} body
 * @param {Object=} headers
 */
org.apache.royale.net.remoting.messages.AsyncMessage = function(body, headers) {
  body = typeof body !== 'undefined' ? body : null;
  headers = typeof headers !== 'undefined' ? headers : null;
  org.apache.royale.net.remoting.messages.AsyncMessage.base(this, 'constructor');
  this.correlationId = "";
  if (body != null)
    this.body = body;
  if (headers != null)
    this.headers = headers;
};
goog.inherits(org.apache.royale.net.remoting.messages.AsyncMessage, org.apache.royale.net.remoting.messages.AbstractMessage);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.net.remoting.messages.AsyncMessage', org.apache.royale.net.remoting.messages.AsyncMessage);


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.net.remoting.messages.AsyncMessage.SUBTOPIC_HEADER = "DSSubtopic";


/**
 * @private
 * @const
 * @type {number}
 */
org.apache.royale.net.remoting.messages.AsyncMessage.CORRELATION_ID_FLAG = 1;


/**
 * @private
 * @const
 * @type {number}
 */
org.apache.royale.net.remoting.messages.AsyncMessage.CORRELATION_ID_BYTES_FLAG = 2;


/**
 * @private
 * @type {string}
 */
org.apache.royale.net.remoting.messages.AsyncMessage.prototype.org_apache_royale_net_remoting_messages_AsyncMessage__correlationId;


/**
 * @private
 * @type {org.apache.royale.utils.BinaryData}
 */
org.apache.royale.net.remoting.messages.AsyncMessage.prototype.org_apache_royale_net_remoting_messages_AsyncMessage_correlationIdBytes;


/**
 * @asprivate
 * @export
 * @return {org.apache.royale.net.remoting.messages.IMessage}
 */
org.apache.royale.net.remoting.messages.AsyncMessage.prototype.getSmallMessage = function() {
  var /** @type {Object} */ o = this;
  if (o.constructor == org.apache.royale.net.remoting.messages.AsyncMessage)
    return new org.apache.royale.net.remoting.messages.AsyncMessageExt(this);
  return null;
};


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.royale.net.remoting.messages.AsyncMessage.prototype.readExternal = function(input) {
  org.apache.royale.net.remoting.messages.AsyncMessage.superClass_.readExternal.apply(this, [ input] );
  var /** @type {Array} */ flagsArray = this.readFlags(input);
  for (var /** @type {number} */ i = 0; i < flagsArray.length; i++) {
    var /** @type {number} */ flags = (org.apache.royale.utils.Language.as(flagsArray[i], org.apache.royale.utils.Language.synthType('uint'))) >>> 0;
    var /** @type {number} */ reservedPosition = 0;
    if (i == 0) {
      if ((flags & org.apache.royale.net.remoting.messages.AsyncMessage.CORRELATION_ID_FLAG) != 0)
        this.correlationId = org.apache.royale.utils.Language.as(input.readObject(), String);
      if ((flags & org.apache.royale.net.remoting.messages.AsyncMessage.CORRELATION_ID_BYTES_FLAG) != 0) {
        this.org_apache_royale_net_remoting_messages_AsyncMessage_correlationIdBytes = org.apache.royale.utils.Language.as(input.readObject(), org.apache.royale.utils.BinaryData);
        this.correlationId = org.apache.royale.utils.UIDUtil.fromBinary(this.org_apache_royale_net_remoting_messages_AsyncMessage_correlationIdBytes);
      }
      reservedPosition = 2;
    }
    if ((flags >> reservedPosition) != 0) {
      for (var /** @type {number} */ j = reservedPosition; j < 6; j++) {
        if (((flags >> j) & 1) != 0) {
          input.readObject();
        }
      }
    }
  }
};


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.royale.net.remoting.messages.AsyncMessage.prototype.writeExternal = function(output) {
  org.apache.royale.net.remoting.messages.AsyncMessage.superClass_.writeExternal.apply(this, [ output] );
  if (this.org_apache_royale_net_remoting_messages_AsyncMessage_correlationIdBytes == null)
    this.org_apache_royale_net_remoting_messages_AsyncMessage_correlationIdBytes = org.apache.royale.utils.UIDUtil.toBinary(this.org_apache_royale_net_remoting_messages_AsyncMessage__correlationId);
  var /** @type {number} */ flags = 0;
  if (this.correlationId != null && this.org_apache_royale_net_remoting_messages_AsyncMessage_correlationIdBytes == null)
    flags |= org.apache.royale.net.remoting.messages.AsyncMessage.CORRELATION_ID_FLAG;
  if (this.org_apache_royale_net_remoting_messages_AsyncMessage_correlationIdBytes != null)
    flags |= org.apache.royale.net.remoting.messages.AsyncMessage.CORRELATION_ID_BYTES_FLAG;
  output.writeByte((flags) >> 0);
  if (this.correlationId != null && this.org_apache_royale_net_remoting_messages_AsyncMessage_correlationIdBytes == null)
    output.writeObject(this.correlationId);
  if (this.org_apache_royale_net_remoting_messages_AsyncMessage_correlationIdBytes != null)
    output.writeObject(this.org_apache_royale_net_remoting_messages_AsyncMessage_correlationIdBytes);
};


org.apache.royale.net.remoting.messages.AsyncMessage.prototype.get__correlationId = function() {
  return this.org_apache_royale_net_remoting_messages_AsyncMessage__correlationId;
};


org.apache.royale.net.remoting.messages.AsyncMessage.prototype.set__correlationId = function(value) {
  this.org_apache_royale_net_remoting_messages_AsyncMessage__correlationId = value;
  this.org_apache_royale_net_remoting_messages_AsyncMessage_correlationIdBytes = null;
};


Object.defineProperties(org.apache.royale.net.remoting.messages.AsyncMessage.prototype, /** @lends {org.apache.royale.net.remoting.messages.AsyncMessage.prototype} */ {
/**
  * @export
  * @type {string} */
correlationId: {
get: org.apache.royale.net.remoting.messages.AsyncMessage.prototype.get__correlationId,
set: org.apache.royale.net.remoting.messages.AsyncMessage.prototype.set__correlationId}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.net.remoting.messages.AsyncMessage.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AsyncMessage', qName: 'org.apache.royale.net.remoting.messages.AsyncMessage', kind: 'class' }], interfaces: [org.apache.royale.net.remoting.messages.ISmallMessage] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.net.remoting.messages.AsyncMessage.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'correlationId': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.net.remoting.messages.AsyncMessage'}
      };
    },
    methods: function () {
      return {
        'AsyncMessage': { type: '', declaredBy: 'org.apache.royale.net.remoting.messages.AsyncMessage', parameters: function () { return [ 'Object', true ,'Object', true ]; }},
        'getSmallMessage': { type: 'org.apache.royale.net.remoting.messages.IMessage', declaredBy: 'org.apache.royale.net.remoting.messages.AsyncMessage'},
        'readExternal': { type: 'void', declaredBy: 'org.apache.royale.net.remoting.messages.AsyncMessage', parameters: function () { return [ 'org.apache.royale.utils.net.IDataInput', false ]; }},
        'writeExternal': { type: 'void', declaredBy: 'org.apache.royale.net.remoting.messages.AsyncMessage', parameters: function () { return [ 'org.apache.royale.utils.net.IDataOutput', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.net.remoting.messages.AsyncMessage.prototype.ROYALE_COMPILE_FLAGS = 10;

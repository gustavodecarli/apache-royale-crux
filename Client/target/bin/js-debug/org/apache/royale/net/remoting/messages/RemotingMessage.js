/**
 * Generated by Apache Royale Compiler from org/apache/royale/net/remoting/messages/RemotingMessage.as
 * org.apache.royale.net.remoting.messages.RemotingMessage
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.net.remoting.messages.RemotingMessage');
/* Royale Dependency List: */

goog.require('org.apache.royale.net.remoting.messages.AbstractMessage');



/**
 *  Constructs an uninitialized RemotingMessage.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 * @extends {org.apache.royale.net.remoting.messages.AbstractMessage}
 */
org.apache.royale.net.remoting.messages.RemotingMessage = function() {
  org.apache.royale.net.remoting.messages.RemotingMessage.base(this, 'constructor');
  this.operation = "";
};
goog.inherits(org.apache.royale.net.remoting.messages.RemotingMessage, org.apache.royale.net.remoting.messages.AbstractMessage);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.net.remoting.messages.RemotingMessage', org.apache.royale.net.remoting.messages.RemotingMessage);


/**
 * @export
 * @type {string}
 */
org.apache.royale.net.remoting.messages.RemotingMessage.prototype.operation;


/**
 * @export
 * @type {string}
 */
org.apache.royale.net.remoting.messages.RemotingMessage.prototype.source;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.net.remoting.messages.RemotingMessage.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'RemotingMessage', qName: 'org.apache.royale.net.remoting.messages.RemotingMessage', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.net.remoting.messages.RemotingMessage.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'operation': { type: 'String', get_set: function (/** org.apache.royale.net.remoting.messages.RemotingMessage */ inst, /** * */ v) {return v !== undefined ? inst.operation = v : inst.operation;}},
        'source': { type: 'String', get_set: function (/** org.apache.royale.net.remoting.messages.RemotingMessage */ inst, /** * */ v) {return v !== undefined ? inst.source = v : inst.source;}}
      };
    },
    methods: function () {
      return {
        'RemotingMessage': { type: '', declaredBy: 'org.apache.royale.net.remoting.messages.RemotingMessage'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.net.remoting.messages.RemotingMessage.prototype.ROYALE_COMPILE_FLAGS = 10;
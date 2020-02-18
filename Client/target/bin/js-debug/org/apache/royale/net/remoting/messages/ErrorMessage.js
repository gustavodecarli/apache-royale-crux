/**
 * Generated by Apache Royale Compiler from org/apache/royale/net/remoting/messages/ErrorMessage.as
 * org.apache.royale.net.remoting.messages.ErrorMessage
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.net.remoting.messages.ErrorMessage');
/* Royale Dependency List: */

goog.require('org.apache.royale.net.remoting.messages.AcknowledgeMessage');



/**
 *  Constructs an uninitialized ErrorMessage.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 * @extends {org.apache.royale.net.remoting.messages.AcknowledgeMessage}
 */
org.apache.royale.net.remoting.messages.ErrorMessage = function() {
  org.apache.royale.net.remoting.messages.ErrorMessage.base(this, 'constructor');
};
goog.inherits(org.apache.royale.net.remoting.messages.ErrorMessage, org.apache.royale.net.remoting.messages.AcknowledgeMessage);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.net.remoting.messages.ErrorMessage', org.apache.royale.net.remoting.messages.ErrorMessage);


/**
 * @export
 * @type {string}
 */
org.apache.royale.net.remoting.messages.ErrorMessage.prototype.message;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.net.remoting.messages.ErrorMessage.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ErrorMessage', qName: 'org.apache.royale.net.remoting.messages.ErrorMessage', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.net.remoting.messages.ErrorMessage.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'message': { type: 'String', get_set: function (/** org.apache.royale.net.remoting.messages.ErrorMessage */ inst, /** * */ v) {return v !== undefined ? inst.message = v : inst.message;}}
      };
    },
    methods: function () {
      return {
        'ErrorMessage': { type: '', declaredBy: 'org.apache.royale.net.remoting.messages.ErrorMessage'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.net.remoting.messages.ErrorMessage.prototype.ROYALE_COMPILE_FLAGS = 10;

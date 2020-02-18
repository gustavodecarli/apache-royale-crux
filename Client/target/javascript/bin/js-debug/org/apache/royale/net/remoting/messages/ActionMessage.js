/**
 * Generated by Apache Royale Compiler from org/apache/royale/net/remoting/messages/ActionMessage.as
 * org.apache.royale.net.remoting.messages.ActionMessage
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.net.remoting.messages.ActionMessage');
/* Royale Dependency List: */



/**
 *  Constructs an instance of an ActionMessage with an empty array of bodies
 *  and headers.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 */
org.apache.royale.net.remoting.messages.ActionMessage = function() {
  
  this.org_apache_royale_net_remoting_messages_ActionMessage__bodies = [];
  this.org_apache_royale_net_remoting_messages_ActionMessage__headers = [];
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.net.remoting.messages.ActionMessage', org.apache.royale.net.remoting.messages.ActionMessage);


/**
 * @export
 * @type {number}
 */
org.apache.royale.net.remoting.messages.ActionMessage.prototype.version = 3;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.net.remoting.messages.ActionMessage.prototype.org_apache_royale_net_remoting_messages_ActionMessage__bodies;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.net.remoting.messages.ActionMessage.prototype.org_apache_royale_net_remoting_messages_ActionMessage__headers;


org.apache.royale.net.remoting.messages.ActionMessage.prototype.get__bodies = function() {
  return this.org_apache_royale_net_remoting_messages_ActionMessage__bodies;
};


org.apache.royale.net.remoting.messages.ActionMessage.prototype.set__bodies = function(value) {
  this.org_apache_royale_net_remoting_messages_ActionMessage__bodies = value;
};


org.apache.royale.net.remoting.messages.ActionMessage.prototype.get__headers = function() {
  return this.org_apache_royale_net_remoting_messages_ActionMessage__headers;
};


org.apache.royale.net.remoting.messages.ActionMessage.prototype.set__headers = function(value) {
  this.org_apache_royale_net_remoting_messages_ActionMessage__headers = value;
};


Object.defineProperties(org.apache.royale.net.remoting.messages.ActionMessage.prototype, /** @lends {org.apache.royale.net.remoting.messages.ActionMessage.prototype} */ {
/**
  * @export
  * @type {Array} */
bodies: {
get: org.apache.royale.net.remoting.messages.ActionMessage.prototype.get__bodies,
set: org.apache.royale.net.remoting.messages.ActionMessage.prototype.set__bodies},
/**
  * @export
  * @type {Array} */
headers: {
get: org.apache.royale.net.remoting.messages.ActionMessage.prototype.get__headers,
set: org.apache.royale.net.remoting.messages.ActionMessage.prototype.set__headers}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.net.remoting.messages.ActionMessage.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ActionMessage', qName: 'org.apache.royale.net.remoting.messages.ActionMessage', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.net.remoting.messages.ActionMessage.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'version': { type: 'int', get_set: function (/** org.apache.royale.net.remoting.messages.ActionMessage */ inst, /** * */ v) {return v !== undefined ? inst.version = v : inst.version;}}
      };
    },
    accessors: function () {
      return {
        'bodies': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.net.remoting.messages.ActionMessage'},
        'headers': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.net.remoting.messages.ActionMessage'}
      };
    },
    methods: function () {
      return {
        'ActionMessage': { type: '', declaredBy: 'org.apache.royale.net.remoting.messages.ActionMessage'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.net.remoting.messages.ActionMessage.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ActionMessage.js.map

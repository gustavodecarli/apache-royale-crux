/**
 * Generated by Apache Royale Compiler from org/apache/royale/net/remoting/messages/RoyaleClient.as
 * org.apache.royale.net.remoting.messages.RoyaleClient
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.net.remoting.messages.RoyaleClient');
/* Royale Dependency List: */

goog.require('org.apache.royale.events.EventDispatcher');



/**
 *  @asprivate
 *  Constructor.
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 */
org.apache.royale.net.remoting.messages.RoyaleClient = function() {
  org.apache.royale.net.remoting.messages.RoyaleClient.base(this, 'constructor');
};
goog.inherits(org.apache.royale.net.remoting.messages.RoyaleClient, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.net.remoting.messages.RoyaleClient', org.apache.royale.net.remoting.messages.RoyaleClient);


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.net.remoting.messages.RoyaleClient.NULL_ROYALECLIENT_ID = "nil";


/**
 * @private
 * @type {org.apache.royale.net.remoting.messages.RoyaleClient}
 */
org.apache.royale.net.remoting.messages.RoyaleClient._instance;


/**
 *  Returns the sole instance of this singleton class,
 *  creating it if it does not already exist.
 *
 *  @asreturn Returns the sole instance of this singleton class,
 *  creating it if it does not already exist.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @return {org.apache.royale.net.remoting.messages.RoyaleClient}
 */
org.apache.royale.net.remoting.messages.RoyaleClient.getInstance = function() {
  if (org.apache.royale.net.remoting.messages.RoyaleClient._instance == null) {
    org.apache.royale.net.remoting.messages.RoyaleClient._instance = new org.apache.royale.net.remoting.messages.RoyaleClient();
  }
  return org.apache.royale.net.remoting.messages.RoyaleClient._instance;
};


/**
 * @private
 * @type {string}
 */
org.apache.royale.net.remoting.messages.RoyaleClient.prototype.org_apache_royale_net_remoting_messages_RoyaleClient__id = null;


org.apache.royale.net.remoting.messages.RoyaleClient.prototype.get__id = function() {
  return this.org_apache_royale_net_remoting_messages_RoyaleClient__id;
};


org.apache.royale.net.remoting.messages.RoyaleClient.prototype.set__id = function(value) {
  if (this.org_apache_royale_net_remoting_messages_RoyaleClient__id != value) {
    this.org_apache_royale_net_remoting_messages_RoyaleClient__id = value;
  }
};


Object.defineProperties(org.apache.royale.net.remoting.messages.RoyaleClient.prototype, /** @lends {org.apache.royale.net.remoting.messages.RoyaleClient.prototype} */ {
/**
  * @export
  * @type {string} */
id: {
get: org.apache.royale.net.remoting.messages.RoyaleClient.prototype.get__id,
set: org.apache.royale.net.remoting.messages.RoyaleClient.prototype.set__id}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.net.remoting.messages.RoyaleClient.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'RoyaleClient', qName: 'org.apache.royale.net.remoting.messages.RoyaleClient', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.net.remoting.messages.RoyaleClient.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'id': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.net.remoting.messages.RoyaleClient'}
      };
    },
    methods: function () {
      return {
        '|getInstance': { type: 'org.apache.royale.net.remoting.messages.RoyaleClient', declaredBy: 'org.apache.royale.net.remoting.messages.RoyaleClient'},
        'RoyaleClient': { type: '', declaredBy: 'org.apache.royale.net.remoting.messages.RoyaleClient'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.net.remoting.messages.RoyaleClient.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./RoyaleClient.js.map

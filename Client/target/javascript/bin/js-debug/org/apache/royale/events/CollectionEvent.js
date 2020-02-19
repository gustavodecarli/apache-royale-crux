/**
 * Generated by Apache Royale Compiler from org/apache/royale/events/CollectionEvent.as
 * org.apache.royale.events.CollectionEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.CollectionEvent');
/* Royale Dependency List: org.apache.royale.events.IRoyaleEvent*/

goog.require('org.apache.royale.events.Event');



/**
 * Constructor.
 *
 * @asparam type The name of the event.
 * @asparam bubbles Whether the event bubbles.
 * @asparam cancelable Whether the event can be canceled.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.9.0
 * @constructor
 * @extends {org.apache.royale.events.Event}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 */
org.apache.royale.events.CollectionEvent = function(type, bubbles, cancelable) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  org.apache.royale.events.CollectionEvent.base(this, 'constructor', type, bubbles, cancelable);
};
goog.inherits(org.apache.royale.events.CollectionEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.CollectionEvent', org.apache.royale.events.CollectionEvent);


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.CollectionEvent.ITEM_ADDED = "itemAdded";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.CollectionEvent.ITEM_REMOVED = "itemRemoved";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.CollectionEvent.ALL_ITEMS_REMOVED = "allItemsRemoved";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.CollectionEvent.ITEM_UPDATED = "itemUpdated";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.CollectionEvent.COLLECTION_CHANGED = "collectionChanged";


/**
 * @export
 * @type {number}
 */
org.apache.royale.events.CollectionEvent.prototype.index = 0;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.events.CollectionEvent.prototype.item;


/**
 * @export
 * @type {Array}
 */
org.apache.royale.events.CollectionEvent.prototype.items;


/**
 * @export
 * @override
 */
org.apache.royale.events.CollectionEvent.prototype.cloneEvent = function() {
  var /** @type {org.apache.royale.events.CollectionEvent} */ collectionEvent = new org.apache.royale.events.CollectionEvent(this.type, this.bubbles, this.cancelable);
  collectionEvent.item = this.item;
  collectionEvent.items = this.items;
  collectionEvent.index = this.index;
  return collectionEvent;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.CollectionEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CollectionEvent', qName: 'org.apache.royale.events.CollectionEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.CollectionEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'index': { type: 'int', get_set: function (/** org.apache.royale.events.CollectionEvent */ inst, /** * */ v) {return v !== undefined ? inst.index = v : inst.index;}},
        'item': { type: 'Object', get_set: function (/** org.apache.royale.events.CollectionEvent */ inst, /** * */ v) {return v !== undefined ? inst.item = v : inst.item;}},
        'items': { type: 'Array', get_set: function (/** org.apache.royale.events.CollectionEvent */ inst, /** * */ v) {return v !== undefined ? inst.items = v : inst.items;}}
      };
    },
    methods: function () {
      return {
        'CollectionEvent': { type: '', declaredBy: 'org.apache.royale.events.CollectionEvent', parameters: function () { return [ 'String', false ,'Boolean', true ,'Boolean', true ]; }},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'org.apache.royale.events.CollectionEvent'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.events.CollectionEvent.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./CollectionEvent.js.map

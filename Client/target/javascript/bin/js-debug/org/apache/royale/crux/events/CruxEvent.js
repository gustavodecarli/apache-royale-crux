/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/events/CruxEvent.as
 * org.apache.royale.crux.events.CruxEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.events.CruxEvent');
/* Royale Dependency List: org.apache.royale.crux.ICrux,org.apache.royale.events.IRoyaleEvent*/

goog.require('org.apache.royale.events.Event');



/**
 * Constructor
 * @constructor
 * @extends {org.apache.royale.events.Event}
 * @param {string} type
 * @param {org.apache.royale.crux.ICrux=} crux
 */
org.apache.royale.crux.events.CruxEvent = function(type, crux) {
  crux = typeof crux !== 'undefined' ? crux : null;
  org.apache.royale.crux.events.CruxEvent.base(this, 'constructor', type, true, true);
  this.crux = crux;
};
goog.inherits(org.apache.royale.crux.events.CruxEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.events.CruxEvent', org.apache.royale.crux.events.CruxEvent);


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.crux.events.CruxEvent.CREATED = "cruxCreated";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.crux.events.CruxEvent.LOAD_COMPLETE = "loadComplete";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.crux.events.CruxEvent.DESTROYED = "cruxDestroyed";


/**
 * @export
 * @type {org.apache.royale.crux.ICrux}
 */
org.apache.royale.crux.events.CruxEvent.prototype.crux;


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.royale.crux.events.CruxEvent.prototype.cloneEvent = function() {
  return new org.apache.royale.crux.events.CruxEvent(this.type, this.crux);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.events.CruxEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CruxEvent', qName: 'org.apache.royale.crux.events.CruxEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.events.CruxEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'crux': { type: 'org.apache.royale.crux.ICrux', get_set: function (/** org.apache.royale.crux.events.CruxEvent */ inst, /** * */ v) {return v !== undefined ? inst.crux = v : inst.crux;}}
      };
    },
    methods: function () {
      return {
        'CruxEvent': { type: '', declaredBy: 'org.apache.royale.crux.events.CruxEvent', parameters: function () { return [ 'String', false ,'org.apache.royale.crux.ICrux', true ]; }},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'org.apache.royale.crux.events.CruxEvent'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.events.CruxEvent.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./CruxEvent.js.map

/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/beads/JSStageEvents.as
 * org.apache.royale.crux.beads.JSStageEvents
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.beads.JSStageEvents');
/* Royale Dependency List: org.apache.royale.core.ElementWrapper,org.apache.royale.core.IStrand,org.apache.royale.core.UIBase,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IBead');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.6
 * @constructor
 * @implements {org.apache.royale.core.IBead}
 */
org.apache.royale.crux.beads.JSStageEvents = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.beads.JSStageEvents', org.apache.royale.crux.beads.JSStageEvents);


/**
 * @private
 * @type {org.apache.royale.crux.beads.JSStageEvents}
 */
org.apache.royale.crux.beads.JSStageEvents._activeInstance;


/**
 * @protected
 * @const
 * @type {RegExp}
 */
org.apache.royale.crux.beads.JSStageEvents.packageExclusionFilterDefaults = /^mx\.|^spark\.|^org\.apache\.royale\./;


/**
 * @private
 * @type {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.crux.beads.JSStageEvents.prototype.org_apache_royale_crux_beads_JSStageEvents__dispatcher;


/**
 * @private
 * @type {org.apache.royale.core.UIBase}
 */
org.apache.royale.crux.beads.JSStageEvents.prototype.org_apache_royale_crux_beads_JSStageEvents_host;


/**
 * @private
 * @type {RegExp}
 */
org.apache.royale.crux.beads.JSStageEvents.prototype.org_apache_royale_crux_beads_JSStageEvents__packageExclusionFilter;


/**
 *  @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 *  @royaleignorecoercion MutationRecord
 *  @royaleignorecoercion NodeList
 *  @royaleemitcoercion org.apache.royale.events.IEventDispatcher
 * @private
 * @param {Object} mutationsList
 */
org.apache.royale.crux.beads.JSStageEvents.prototype.org_apache_royale_crux_beads_JSStageEvents_mutationDetected = function(mutationsList) {
  for (var /** @type {Object} */ j = 0; j < mutationsList.length; j++) {
    var /** @type {Object} */ royaleInstance;
    var /** @type {Object} */ qualifiedName;
    var /** @type {Object} */ packageExclusionFilterRegexp = this.org_apache_royale_crux_beads_JSStageEvents__packageExclusionFilter;
    var /** @type {Object} */ mutationRecord = mutationsList[j];
    var /** @type {Object} */ removedElements = mutationRecord.removedNodes;
    var /** @type {Object} */ l = (removedElements.length) >>> 0;
    var /** @type {Object} */ fakeAncestors;
    if (l && this.org_apache_royale_crux_beads_JSStageEvents__dispatcher) {
      fakeAncestors = [this.org_apache_royale_crux_beads_JSStageEvents__dispatcher];
    }
    for (var /** @type {Object} */ i = 0; i < l; i++) {
      var /** @type {Object} */ element = removedElements[i];
      royaleInstance = element.royale_wrapper;
      if (royaleInstance) {
        if (packageExclusionFilterRegexp) {
          qualifiedName = org.apache.royale.utils.Language.string(royaleInstance.ROYALE_CLASS_INFO.names[0].qName);
          if (packageExclusionFilterRegexp.test(qualifiedName)) {
            continue;
          }
        }
        goog.events.EventTarget.dispatchEventInternal_(royaleInstance, new org.apache.royale.events.Event('removedFromStage', false), fakeAncestors);
      }
    }
    var /** @type {Object} */ addedElements = mutationRecord.addedNodes;
    for (i = 0; i < addedElements.length; i++) {
      element = addedElements[i];
      royaleInstance = element.royale_wrapper;
      if (royaleInstance) {
        if (packageExclusionFilterRegexp) {
          qualifiedName = org.apache.royale.utils.Language.string(royaleInstance.ROYALE_CLASS_INFO.names[0].qName);
          if (packageExclusionFilterRegexp.test(qualifiedName)) {
            continue;
          }
        }
        var /** @type {Object} */ e = new org.apache.royale.events.Event('addedToStage', false);
        var /** @type {Object} */ ancestorsTree = [];
        var /** @type {org.apache.royale.events.IEventDispatcher} */ t = org.apache.royale.utils.Language.as(royaleInstance["parent"], org.apache.royale.events.IEventDispatcher);
        while (t != null) {
          ancestorsTree.push(t);
          t = org.apache.royale.utils.Language.as(t["parent"], org.apache.royale.events.IEventDispatcher);
        }
        goog.events.EventTarget.dispatchEventInternal_(royaleInstance, e, ancestorsTree);
      }
    }
  }
};


org.apache.royale.crux.beads.JSStageEvents.prototype.get__isActive = function() {
  return org.apache.royale.crux.beads.JSStageEvents._activeInstance != null;
};


org.apache.royale.crux.beads.JSStageEvents.prototype.get__dispatcher = function() {
  return this.org_apache_royale_crux_beads_JSStageEvents__dispatcher;
};


org.apache.royale.crux.beads.JSStageEvents.prototype.set__dispatcher = function(value) {
  this.org_apache_royale_crux_beads_JSStageEvents__dispatcher = value;
};


org.apache.royale.crux.beads.JSStageEvents.prototype.set__strand = function(value) {
  this.org_apache_royale_crux_beads_JSStageEvents_host = org.apache.royale.utils.Language.as(value, org.apache.royale.core.UIBase);
  if (org.apache.royale.crux.beads.JSStageEvents._activeInstance) {
    org.apache.royale.utils.Language.trace('[IGNORING] there is already an active instance of JSStageEvents at ', org.apache.royale.crux.beads.JSStageEvents._activeInstance.org_apache_royale_crux_beads_JSStageEvents_host);
  } else {
    org.apache.royale.crux.beads.JSStageEvents._activeInstance = this;
    if (!this.org_apache_royale_crux_beads_JSStageEvents__dispatcher)
      this.org_apache_royale_crux_beads_JSStageEvents__dispatcher = value;
    var /** @type {Object} */ observer = new MutationObserver(org.apache.royale.utils.Language.closure(this.org_apache_royale_crux_beads_JSStageEvents_mutationDetected, this, 'mutationDetected'));
    observer.observe(value.element, {'childList':true, 'subtree':true});
    org.apache.royale.utils.Language.trace('Activating JSStageEvents');
  }
};


org.apache.royale.crux.beads.JSStageEvents.prototype.get__packageExclusionFilter = function() {
  return this.org_apache_royale_crux_beads_JSStageEvents__packageExclusionFilter ? this.org_apache_royale_crux_beads_JSStageEvents__packageExclusionFilter.source : '';
};


org.apache.royale.crux.beads.JSStageEvents.prototype.set__packageExclusionFilter = function(value) {
  if (value == null || value == '') {
    this.org_apache_royale_crux_beads_JSStageEvents__packageExclusionFilter = null;
  } else {
    if (value == '_default_') {
      this.org_apache_royale_crux_beads_JSStageEvents__packageExclusionFilter = org.apache.royale.crux.beads.JSStageEvents.packageExclusionFilterDefaults;
    } else {
      if (!this.org_apache_royale_crux_beads_JSStageEvents__packageExclusionFilter || !(this.org_apache_royale_crux_beads_JSStageEvents__packageExclusionFilter.source == value)) {
        this.org_apache_royale_crux_beads_JSStageEvents__packageExclusionFilter = new RegExp(value);
      }
    }
  }
};


Object.defineProperties(org.apache.royale.crux.beads.JSStageEvents.prototype, /** @lends {org.apache.royale.crux.beads.JSStageEvents.prototype} */ {
/**
  * @export
  * @type {boolean} */
isActive: {
get: org.apache.royale.crux.beads.JSStageEvents.prototype.get__isActive},
/**
  * @export
  * @type {org.apache.royale.events.IEventDispatcher} */
dispatcher: {
get: org.apache.royale.crux.beads.JSStageEvents.prototype.get__dispatcher,
set: org.apache.royale.crux.beads.JSStageEvents.prototype.set__dispatcher},
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.crux.beads.JSStageEvents.prototype.set__strand},
/**
  * @export
  * @type {string} */
packageExclusionFilter: {
get: org.apache.royale.crux.beads.JSStageEvents.prototype.get__packageExclusionFilter,
set: org.apache.royale.crux.beads.JSStageEvents.prototype.set__packageExclusionFilter}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.beads.JSStageEvents.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'JSStageEvents', qName: 'org.apache.royale.crux.beads.JSStageEvents', kind: 'class' }], interfaces: [org.apache.royale.core.IBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.beads.JSStageEvents.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'isActive': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.crux.beads.JSStageEvents'},
        'dispatcher': { type: 'org.apache.royale.events.IEventDispatcher', access: 'readwrite', declaredBy: 'org.apache.royale.crux.beads.JSStageEvents'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.crux.beads.JSStageEvents'},
        'packageExclusionFilter': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.crux.beads.JSStageEvents'}
      };
    },
    methods: function () {
      return {
        'JSStageEvents': { type: '', declaredBy: 'org.apache.royale.crux.beads.JSStageEvents'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.beads.JSStageEvents.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./JSStageEvents.js.map

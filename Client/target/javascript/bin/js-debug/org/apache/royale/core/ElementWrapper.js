/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/ElementWrapper.as
 * org.apache.royale.core.ElementWrapper
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ElementWrapper');
/* Royale Dependency List: org.apache.royale.core.IBead,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.BrowserEvent,org.apache.royale.events.ElementEvents,org.apache.royale.events.IBrowserEvent,org.apache.royale.events.utils.EventUtils,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IStrand');



/**
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IStrand}
 */
org.apache.royale.core.ElementWrapper = function() {
  org.apache.royale.core.ElementWrapper.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.ElementWrapper, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ElementWrapper', org.apache.royale.core.ElementWrapper);


/**
 * @export
 * @type {Object}
 */
org.apache.royale.core.ElementWrapper.converterMap = {};


/**
 * @asparam listener The listener object to call {goog.events.Listener}.
 * @asparam eventObject The event object to pass to the listener.
 * @asreturn Result of listener.
 * @royaleignorecoercion org.apache.royale.events.IBrowserEvent
 * @private
 * @param {Object} listener
 * @param {goog.events.BrowserEvent} eventObject
 * @return {boolean}
 */
org.apache.royale.core.ElementWrapper.fireListenerOverride = function(listener, eventObject) {
  var /** @type {Object} */ e;
  var /** @type {Object} */ nativeEvent = eventObject.getBrowserEvent();
  var /** @type {Function} */ converter = org.apache.royale.core.ElementWrapper.converterMap[nativeEvent.constructor.name];
  if (converter)
    e = converter(nativeEvent, eventObject); else {
    e = new org.apache.royale.events.BrowserEvent();
    e.wrapEvent(eventObject);
  }
  return !!(org.apache.royale.core.ElementWrapper.googFireListener(listener, e));
};


/**
 * Static initializer
 * @private
 * @return {boolean}
 */
org.apache.royale.core.ElementWrapper.installOverride = function() {
  org.apache.royale.core.ElementWrapper.googFireListener = goog.events.fireListener;
  goog.events.fireListener = org.apache.royale.core.ElementWrapper.fireListenerOverride;
  return true;
};


/**
 * @export
 * @type {Function}
 */
org.apache.royale.core.ElementWrapper.googFireListener;


/**
 * @export
 * @type {boolean}
 */
org.apache.royale.core.ElementWrapper.__;


/**
 * @protected
 * @type {org.apache.royale.core.WrappedHTMLElement}
 */
org.apache.royale.core.ElementWrapper.prototype._element;


/**
 * @protected
 * @type {Array.<org.apache.royale.core.IBead>}
 */
org.apache.royale.core.ElementWrapper.prototype._beads;


/**
 * @asparam bead The new bead.
 * @export
 * @param {org.apache.royale.core.IBead} bead
 */
org.apache.royale.core.ElementWrapper.prototype.addBead = function(bead) {
  if (!this._beads) {
    this._beads = new (org.apache.royale.utils.Language.synthVector('org.apache.royale.core.IBead'))();
  }
  if (goog.DEBUG && !org.apache.royale.utils.Language.is(bead, org.apache.royale.core.IBead))
    throw new TypeError('Cannot convert ' + bead + ' to IBead');
  this._beads.push(bead);
  bead.strand = this;
};


/**
 * @asparam classOrInterface The requested bead type.
 * @asreturn The bead.
 * @export
 * @param {Object} classOrInterface
 * @return {org.apache.royale.core.IBead}
 */
org.apache.royale.core.ElementWrapper.prototype.getBeadByType = function(classOrInterface) {
  var /** @type {number} */ i = 0;
  var /** @type {number} */ n = 0;
  var /** @type {org.apache.royale.core.IBead} */ bead;
  //var /** @type {number} */ i = 0;
  //var /** @type {number} */ n = 0;
  if (!this._beads)
    return null;
  n = this._beads.length;
  for (i = 0; i < n; i++) {
    bead = this._beads[i];
    if (org.apache.royale.utils.Language.is(bead, classOrInterface)) {
      return bead;
    }
  }
  return null;
};


/**
 * @asparam bead The bead to remove.
 * @asreturn The bead.
 * @export
 * @param {org.apache.royale.core.IBead} bead
 * @return {org.apache.royale.core.IBead}
 */
org.apache.royale.core.ElementWrapper.prototype.removeBead = function(bead) {
  var /** @type {number} */ i = 0;
  var /** @type {number} */ n = 0;
  //var /** @type {number} */ i = 0;
  //var /** @type {number} */ n = 0;
  var /** @type {Object} */ value;
  n = this._beads.length;
  for (i = 0; i < n; i++) {
    value = this._beads[i];
    if (bead === value) {
      this._beads.splice((i) >> 0, 1);
      return bead;
    }
  }
  return null;
};


/**
 * @export
 * @override
 */
org.apache.royale.core.ElementWrapper.prototype.addEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  opt_capture = typeof opt_capture !== 'undefined' ? opt_capture : false;
  opt_handlerScope = typeof opt_handlerScope !== 'undefined' ? opt_handlerScope : null;
  var /** @type {Object} */ source = this.org_apache_royale_core_ElementWrapper_getActualDispatcher_(type);
  goog.events.listen(source, type, handler, !!(opt_capture ? {capture:true} : null));
};


/**
 * @export
 * @override
 */
org.apache.royale.core.ElementWrapper.prototype.removeEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  opt_capture = typeof opt_capture !== 'undefined' ? opt_capture : false;
  opt_handlerScope = typeof opt_handlerScope !== 'undefined' ? opt_handlerScope : null;
  var /** @type {Object} */ source = this.org_apache_royale_core_ElementWrapper_getActualDispatcher_(type);
  goog.events.unlisten(source, type, handler, !!(opt_capture ? {capture:true} : null));
};


/**
 * @private
 * @param {string} type
 * @return {Object}
 */
org.apache.royale.core.ElementWrapper.prototype.org_apache_royale_core_ElementWrapper_getActualDispatcher_ = function(type) {
  var /** @type {Object} */ source = this;
  if (org.apache.royale.events.ElementEvents.elementEvents[type]) {
    source = this.element;
  }
  return source;
};


/**
 * @export
 * @override
 */
org.apache.royale.core.ElementWrapper.prototype.hasEventListener = function(type) {
  var /** @type {Object} */ source = this.org_apache_royale_core_ElementWrapper_getActualDispatcher_(type);
  return goog.events.hasListener(source, type);
};


/**
 * @royaleignorecoercion String
 * @export
 * @override
 */
org.apache.royale.core.ElementWrapper.prototype.dispatchEvent = function(e) {
  var /** @type {string} */ eventType = "";
  if (typeof(e) == 'string') {
    eventType = e;
    if (e == "change") {
      e = org.apache.royale.events.utils.EventUtils.createEvent(eventType, !!(e["bubbles"]));
    }
  } else {
    eventType = org.apache.royale.utils.Language.string(e.type);
    if (org.apache.royale.events.ElementEvents.elementEvents[eventType]) {
      e = org.apache.royale.events.utils.EventUtils.createEvent(eventType, !!(e["bubbles"]));
    }
  }
  var /** @type {Object} */ source = this.org_apache_royale_core_ElementWrapper_getActualDispatcher_(eventType);
  if (source == this) {
    return org.apache.royale.core.ElementWrapper.superClass_.dispatchEvent.apply(this, [ e] );
  }
  return !!(source.dispatchEvent(e));
};


org.apache.royale.core.ElementWrapper.prototype.get__element = function() {
  return this._element;
};


org.apache.royale.core.ElementWrapper.prototype.set__element = function(value) {
  this._element = value;
  this._element.royale_wrapper = this;
};


Object.defineProperties(org.apache.royale.core.ElementWrapper.prototype, /** @lends {org.apache.royale.core.ElementWrapper.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.WrappedHTMLElement} */
element: {
get: org.apache.royale.core.ElementWrapper.prototype.get__element,
set: org.apache.royale.core.ElementWrapper.prototype.set__element}}
);

org.apache.royale.core.ElementWrapper.__ = org.apache.royale.core.ElementWrapper.installOverride();




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ElementWrapper.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ElementWrapper', qName: 'org.apache.royale.core.ElementWrapper', kind: 'class' }], interfaces: [org.apache.royale.core.IStrand] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ElementWrapper.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|converterMap': { type: 'Object', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.core.ElementWrapper.converterMap = v : org.apache.royale.core.ElementWrapper.converterMap;}},
        '|googFireListener': { type: 'Function', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.core.ElementWrapper.googFireListener = v : org.apache.royale.core.ElementWrapper.googFireListener;}},
        '|__': { type: 'Boolean', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.core.ElementWrapper.__ = v : org.apache.royale.core.ElementWrapper.__;}}
      };
    },
    accessors: function () {
      return {
        'element': { type: 'org.apache.royale.core.WrappedHTMLElement', access: 'readwrite', declaredBy: 'org.apache.royale.core.ElementWrapper'}
      };
    },
    methods: function () {
      return {
        'addBead': { type: 'void', declaredBy: 'org.apache.royale.core.ElementWrapper', parameters: function () { return [ 'org.apache.royale.core.IBead', false ]; }},
        'getBeadByType': { type: 'org.apache.royale.core.IBead', declaredBy: 'org.apache.royale.core.ElementWrapper', parameters: function () { return [ 'Class', false ]; }},
        'removeBead': { type: 'org.apache.royale.core.IBead', declaredBy: 'org.apache.royale.core.ElementWrapper', parameters: function () { return [ 'org.apache.royale.core.IBead', false ]; }},
        'addEventListener': { type: 'void', declaredBy: 'org.apache.royale.core.ElementWrapper', parameters: function () { return [ 'String', false ,'Function', false ,'Boolean', true ,'Object', true ]; }},
        'removeEventListener': { type: 'void', declaredBy: 'org.apache.royale.core.ElementWrapper', parameters: function () { return [ 'String', false ,'Function', false ,'Boolean', true ,'Object', true ]; }},
        'hasEventListener': { type: 'Boolean', declaredBy: 'org.apache.royale.core.ElementWrapper', parameters: function () { return [ 'String', false ]; }},
        'dispatchEvent': { type: 'Boolean', declaredBy: 'org.apache.royale.core.ElementWrapper', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.ElementWrapper.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ElementWrapper.js.map

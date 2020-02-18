/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/GroupBase.as
 * org.apache.royale.core.GroupBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.GroupBase');
/* Royale Dependency List: org.apache.royale.core.IBeadLayout,org.apache.royale.core.IChild,org.apache.royale.core.ILayoutHost,org.apache.royale.core.IParent,org.apache.royale.core.IState,org.apache.royale.core.IStatesImpl,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.Event,org.apache.royale.events.ValueChangeEvent,org.apache.royale.events.ValueEvent,org.apache.royale.html.util.addElementToWrapper,org.apache.royale.utils.loadBeadFromValuesManager*/

goog.require('org.apache.royale.core.UIBase');
goog.require('org.apache.royale.core.IContainer');
goog.require('org.apache.royale.core.IContentViewHost');
goog.require('org.apache.royale.core.ILayoutParent');
goog.require('org.apache.royale.core.ILayoutView');
goog.require('org.apache.royale.core.IStatesObject');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @constructor
 * @extends {org.apache.royale.core.UIBase}
 * @implements {org.apache.royale.core.IStatesObject}
 * @implements {org.apache.royale.core.IContainer}
 * @implements {org.apache.royale.core.ILayoutParent}
 * @implements {org.apache.royale.core.ILayoutView}
 * @implements {org.apache.royale.core.IContentViewHost}
 */
org.apache.royale.core.GroupBase = function() {
  org.apache.royale.core.GroupBase.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.GroupBase, org.apache.royale.core.UIBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.GroupBase', org.apache.royale.core.GroupBase);


/**
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.royale.core.GroupBase.prototype.createElement = function() {
  return org.apache.royale.html.util.addElementToWrapper(this, 'div');
};


/**
 * @export
 * @override
 */
org.apache.royale.core.GroupBase.prototype.addedToParent = function() {
  org.apache.royale.core.GroupBase.superClass_.addedToParent.apply(this);
  org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IBeadLayout, "iBeadLayout", this);
};


/**
 *  @asprivate
 * @export
 */
org.apache.royale.core.GroupBase.prototype.childrenAdded = function() {
  this.dispatchEvent(new org.apache.royale.events.ValueEvent("childrenAdded"));
};


/**
 * Dispatches a "layoutNeeded" event
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 */
org.apache.royale.core.GroupBase.prototype.layoutNeeded = function() {
  this.dispatchEvent(new org.apache.royale.events.Event("layoutNeeded"));
};


/**
 * Returns the ILayoutHost which is its view. From ILayoutParent.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion org.apache.royale.core.ILayoutHost
 * @export
 * @return {Object}
 */
org.apache.royale.core.GroupBase.prototype.getLayoutHost = function() {
  return this.view;
};


/**
 * @private
 * @type {Array}
 */
org.apache.royale.core.GroupBase.prototype.org_apache_royale_core_GroupBase__states;


/**
 *  <code>true</code> if the array of states
 *  contains a state with this name.
 * 
 *  @asparam state The state namem.
 *  @asreturn True if state in state array
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @param {string} state
 * @return {boolean}
 */
org.apache.royale.core.GroupBase.prototype.hasState = function(state) {
  var foreachiter0_target = this.org_apache_royale_core_GroupBase__states;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var s = foreachiter0_target[foreachiter0];
  {
    if (s.name == state)
      return true;
  }}
  
  return false;
};


/**
 * @private
 * @type {string}
 */
org.apache.royale.core.GroupBase.prototype.org_apache_royale_core_GroupBase__currentState;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.core.GroupBase.prototype.org_apache_royale_core_GroupBase__transitions;


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.royale.core.GroupBase.prototype.addElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  org.apache.royale.core.GroupBase.superClass_.addElement.apply(this, [ c, dispatchEvent] );
  if (dispatchEvent)
    this.dispatchEvent(new org.apache.royale.events.ValueEvent("childrenAdded", c));
};


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.royale.core.GroupBase.prototype.addElementAt = function(c, index, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  org.apache.royale.core.GroupBase.superClass_.addElementAt.apply(this, [ c, index, dispatchEvent] );
  if (dispatchEvent)
    this.dispatchEvent(new org.apache.royale.events.ValueEvent("childrenAdded", c));
};


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.royale.core.GroupBase.prototype.removeElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  org.apache.royale.core.GroupBase.superClass_.removeElement.apply(this, [ c, dispatchEvent] );
  if (dispatchEvent)
    this.dispatchEvent(new org.apache.royale.events.ValueEvent("childrenRemoved", c));
};


org.apache.royale.core.GroupBase.prototype.get__strandChildren = function() {
  return this;
};


org.apache.royale.core.GroupBase.prototype.get__states = function() {
  return this.org_apache_royale_core_GroupBase__states;
};


org.apache.royale.core.GroupBase.prototype.set__states = function(value) {
  this.org_apache_royale_core_GroupBase__states = value;
  this.org_apache_royale_core_GroupBase__currentState = org.apache.royale.utils.Language.string(this.org_apache_royale_core_GroupBase__states[0].name);
  try {
    org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IStatesImpl, "iStatesImpl", this);
  } catch (e) {
    
  }
};


org.apache.royale.core.GroupBase.prototype.get__currentState = function() {
  return this.org_apache_royale_core_GroupBase__currentState;
};


org.apache.royale.core.GroupBase.prototype.set__currentState = function(value) {
  if (value == this.org_apache_royale_core_GroupBase__currentState)
    return;
  var /** @type {org.apache.royale.events.ValueChangeEvent} */ event = new org.apache.royale.events.ValueChangeEvent("currentStateChange", false, false, this.org_apache_royale_core_GroupBase__currentState, value);
  this.org_apache_royale_core_GroupBase__currentState = value;
  this.dispatchEvent(event);
};


org.apache.royale.core.GroupBase.prototype.get__transitions = function() {
  return this.org_apache_royale_core_GroupBase__transitions;
};


org.apache.royale.core.GroupBase.prototype.set__transitions = function(value) {
  this.org_apache_royale_core_GroupBase__transitions = value;
};


Object.defineProperties(org.apache.royale.core.GroupBase.prototype, /** @lends {org.apache.royale.core.GroupBase.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IParent} */
strandChildren: {
get: org.apache.royale.core.GroupBase.prototype.get__strandChildren},
/**
  * @export
  * @type {Array} */
states: {
get: org.apache.royale.core.GroupBase.prototype.get__states,
set: org.apache.royale.core.GroupBase.prototype.set__states},
/**
  * @export
  * @type {string} */
currentState: {
get: org.apache.royale.core.GroupBase.prototype.get__currentState,
set: org.apache.royale.core.GroupBase.prototype.set__currentState},
/**
  * @export
  * @type {Array} */
transitions: {
get: org.apache.royale.core.GroupBase.prototype.get__transitions,
set: org.apache.royale.core.GroupBase.prototype.set__transitions}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.GroupBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'GroupBase', qName: 'org.apache.royale.core.GroupBase', kind: 'class' }], interfaces: [org.apache.royale.core.IStatesObject, org.apache.royale.core.IContainer, org.apache.royale.core.ILayoutParent, org.apache.royale.core.ILayoutView, org.apache.royale.core.IContentViewHost] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.GroupBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strandChildren': { type: 'org.apache.royale.core.IParent', access: 'readonly', declaredBy: 'org.apache.royale.core.GroupBase'},
        'states': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.core.GroupBase'},
        'currentState': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.GroupBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'currentStateChange' } ] } ]; }},
        'transitions': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.core.GroupBase'}
      };
    },
    methods: function () {
      return {
        'GroupBase': { type: '', declaredBy: 'org.apache.royale.core.GroupBase'},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.royale.core.GroupBase'},
        'childrenAdded': { type: 'void', declaredBy: 'org.apache.royale.core.GroupBase'},
        'layoutNeeded': { type: 'void', declaredBy: 'org.apache.royale.core.GroupBase'},
        'getLayoutHost': { type: 'org.apache.royale.core.ILayoutHost', declaredBy: 'org.apache.royale.core.GroupBase'},
        'hasState': { type: 'Boolean', declaredBy: 'org.apache.royale.core.GroupBase', parameters: function () { return [ 'String', false ]; }},
        'addElement': { type: 'void', declaredBy: 'org.apache.royale.core.GroupBase', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        'addElementAt': { type: 'void', declaredBy: 'org.apache.royale.core.GroupBase', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'int', false ,'Boolean', true ]; }},
        'removeElement': { type: 'void', declaredBy: 'org.apache.royale.core.GroupBase', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.GroupBase.prototype.ROYALE_COMPILE_FLAGS = 10;

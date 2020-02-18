/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/supportClasses/scrollbar/ScrollingViewport.as
 * org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.core.UIBase,org.apache.royale.geom.Size*/

goog.require('org.apache.royale.jewel.supportClasses.Viewport');
goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.IScrollingViewport');



/**
 * Constructor
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.jewel.supportClasses.Viewport}
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.IScrollingViewport}
 */
org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport = function() {
  org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport, org.apache.royale.jewel.supportClasses.Viewport);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport', org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport);


/**
 * @copy org.apache.royale.core.IViewport
 * @export
 * @override
 */
org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.layoutViewportBeforeContentLayout = function(width, height) {
};


/**
 * @copy org.apache.royale.core.IViewport
 * @export
 * @override
 */
org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.layoutViewportAfterContentLayout = function(contentSize) {
};


org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.get__verticalScrollPosition = function() {
  return this.contentView.positioner.scrollTop;
};


org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.set__verticalScrollPosition = function(value) {
  this.contentView.positioner.scrollTop = value;
};


org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.get__horizontalScrollPosition = function() {
  return this.contentView.positioner.scrollLeft;
};


org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.set__horizontalScrollPosition = function(value) {
  this.contentView.positioner.scrollLeft = value;
};


org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.set__strand = function(value) {
  org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.superClass_.set__strand.apply(this, [ value] );
  var /** @type {org.apache.royale.core.UIBase} */ component;
  if (this.contentView == null) {
    component = value;
  } else {
    component = this.contentView;
  }
  this.contentArea.element.classList.add("scroll");
};


Object.defineProperties(org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype, /** @lends {org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype} */ {
/**
  * @export
  * @type {number} */
verticalScrollPosition: {
get: org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.get__verticalScrollPosition,
set: org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.set__verticalScrollPosition},
/**
  * @export
  * @type {number} */
horizontalScrollPosition: {
get: org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.get__horizontalScrollPosition,
set: org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.set__horizontalScrollPosition},
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ScrollingViewport', qName: 'org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport', kind: 'class' }], interfaces: [org.apache.royale.core.IBead, org.apache.royale.core.IScrollingViewport] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'verticalScrollPosition': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport'},
        'horizontalScrollPosition': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport'}
      };
    },
    methods: function () {
      return {
        'ScrollingViewport': { type: '', declaredBy: 'org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport'},
        'layoutViewportBeforeContentLayout': { type: 'void', declaredBy: 'org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport', parameters: function () { return [ 'Number', false ,'Number', false ]; }},
        'layoutViewportAfterContentLayout': { type: 'void', declaredBy: 'org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport', parameters: function () { return [ 'org.apache.royale.geom.Size', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.supportClasses.scrollbar.ScrollingViewport.prototype.ROYALE_COMPILE_FLAGS = 10;

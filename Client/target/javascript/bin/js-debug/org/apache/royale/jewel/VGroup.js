/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/VGroup.as
 * org.apache.royale.jewel.VGroup
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.VGroup');
/* Royale Dependency List: org.apache.royale.jewel.beads.layouts.VerticalLayout,org.apache.royale.utils.StringUtil,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.jewel.Group');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.jewel.Group}
 */
org.apache.royale.jewel.VGroup = function() {
  org.apache.royale.jewel.VGroup.base(this, 'constructor');
  this.typeNames = "jewel " + org.apache.royale.jewel.beads.layouts.VerticalLayout.LAYOUT_TYPE_NAMES;
  this.layout = new org.apache.royale.jewel.beads.layouts.VerticalLayout();
  this.addBead(this.layout);
};
goog.inherits(org.apache.royale.jewel.VGroup, org.apache.royale.jewel.Group);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.VGroup', org.apache.royale.jewel.VGroup);


org.apache.royale.jewel.VGroup.prototype.get__layout = function() {
  return org.apache.royale.utils.Language.as(this._layout, org.apache.royale.jewel.beads.layouts.VerticalLayout);
};


org.apache.royale.jewel.VGroup.prototype.set__layout = function(value) {
  this._layout = value;
};


org.apache.royale.jewel.VGroup.prototype.get__gap = function() {
  return this.layout.gap;
};


org.apache.royale.jewel.VGroup.prototype.set__gap = function(value) {
  this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " gap-" + this.layout.gap + "x" + org.apache.royale.jewel.beads.layouts.VerticalLayout.GAP_STEP + "px");
  if (value != 0)
    this.typeNames += " gap-" + value + "x" + org.apache.royale.jewel.beads.layouts.VerticalLayout.GAP_STEP + "px";
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
  this.layout.gap = value;
};


Object.defineProperties(org.apache.royale.jewel.VGroup.prototype, /** @lends {org.apache.royale.jewel.VGroup.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.jewel.beads.layouts.VerticalLayout} */
layout: {
get: org.apache.royale.jewel.VGroup.prototype.get__layout,
set: org.apache.royale.jewel.VGroup.prototype.set__layout},
/**
  * @export
  * @type {number} */
gap: {
get: org.apache.royale.jewel.VGroup.prototype.get__gap,
set: org.apache.royale.jewel.VGroup.prototype.set__gap}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.VGroup.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'VGroup', qName: 'org.apache.royale.jewel.VGroup', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.VGroup.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'layout': { type: 'org.apache.royale.jewel.beads.layouts.VerticalLayout', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.VGroup'},
        'gap': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.VGroup'}
      };
    },
    methods: function () {
      return {
        'VGroup': { type: '', declaredBy: 'org.apache.royale.jewel.VGroup'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.VGroup.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./VGroup.js.map

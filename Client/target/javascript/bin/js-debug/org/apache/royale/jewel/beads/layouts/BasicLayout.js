/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/layouts/BasicLayout.as
 * org.apache.royale.jewel.beads.layouts.BasicLayout
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.layouts.BasicLayout');
/* Royale Dependency List: org.apache.royale.events.Event*/

goog.require('org.apache.royale.jewel.beads.layouts.StyledLayoutBase');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.jewel.beads.layouts.StyledLayoutBase}
 */
org.apache.royale.jewel.beads.layouts.BasicLayout = function() {
  org.apache.royale.jewel.beads.layouts.BasicLayout.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.layouts.BasicLayout, org.apache.royale.jewel.beads.layouts.StyledLayoutBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.layouts.BasicLayout', org.apache.royale.jewel.beads.layouts.BasicLayout);


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.jewel.beads.layouts.BasicLayout.LAYOUT_TYPE_NAMES = "layout basic";


/**
 *  Add class selectors when the component is addedToParent
 *  Otherwise component will not get the class selectors when 
 *  perform "removeElement" and then "addElement"
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @export
 * @override
 */
org.apache.royale.jewel.beads.layouts.BasicLayout.prototype.beadsAddedHandler = function(event) {
  event = typeof event !== 'undefined' ? event : null;
  org.apache.royale.jewel.beads.layouts.BasicLayout.superClass_.beadsAddedHandler.apply(this);
  if (this.hostClassList.contains("layout"))
    this.hostClassList.remove("layout");
  this.hostClassList.add("layout");
  if (this.hostClassList.contains("basic"))
    this.hostClassList.remove("basic");
  this.hostClassList.add("basic");
};


/**
 * @copy org.apache.royale.core.IBeadLayout#layout
 * @royaleignorecoercion org.apache.royale.core.UIBase
 * @export
 * @override
 */
org.apache.royale.jewel.beads.layouts.BasicLayout.prototype.layout = function() {
  
  return true;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.layouts.BasicLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BasicLayout', qName: 'org.apache.royale.jewel.beads.layouts.BasicLayout', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.layouts.BasicLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'BasicLayout': { type: '', declaredBy: 'org.apache.royale.jewel.beads.layouts.BasicLayout'},
        'beadsAddedHandler': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.layouts.BasicLayout', parameters: function () { return [ 'org.apache.royale.events.Event', true ]; }},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.jewel.beads.layouts.BasicLayout'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.BasicLayout.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./BasicLayout.js.map

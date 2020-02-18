/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/layouts/FormLayout.as
 * org.apache.royale.jewel.beads.layouts.FormLayout
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.layouts.FormLayout');
/* Royale Dependency List: org.apache.royale.events.Event*/

goog.require('org.apache.royale.jewel.beads.layouts.VerticalLayout');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.jewel.beads.layouts.VerticalLayout}
 */
org.apache.royale.jewel.beads.layouts.FormLayout = function() {
  org.apache.royale.jewel.beads.layouts.FormLayout.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.layouts.FormLayout, org.apache.royale.jewel.beads.layouts.VerticalLayout);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.layouts.FormLayout', org.apache.royale.jewel.beads.layouts.FormLayout);


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.jewel.beads.layouts.FormLayout.LAYOUT_TYPE_NAMES = "layout form";


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
org.apache.royale.jewel.beads.layouts.FormLayout.prototype.beadsAddedHandler = function(event) {
  event = typeof event !== 'undefined' ? event : null;
  org.apache.royale.jewel.beads.layouts.FormLayout.superClass_.beadsAddedHandler.apply(this);
  if (this.hostClassList.contains("form"))
    this.hostClassList.remove("form");
  this.hostClassList.add("form");
};


/**
 * @copy org.apache.royale.core.IBeadLayout#layout
 * @royaleignorecoercion org.apache.royale.core.UIBase
 * @export
 * @override
 */
org.apache.royale.jewel.beads.layouts.FormLayout.prototype.layout = function() {
  
  return true;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.layouts.FormLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FormLayout', qName: 'org.apache.royale.jewel.beads.layouts.FormLayout', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.layouts.FormLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'FormLayout': { type: '', declaredBy: 'org.apache.royale.jewel.beads.layouts.FormLayout'},
        'beadsAddedHandler': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.layouts.FormLayout', parameters: function () { return [ 'org.apache.royale.events.Event', true ]; }},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.jewel.beads.layouts.FormLayout'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.FormLayout.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./FormLayout.js.map
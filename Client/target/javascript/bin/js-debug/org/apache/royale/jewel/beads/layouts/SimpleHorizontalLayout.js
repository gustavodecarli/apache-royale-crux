/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/layouts/SimpleHorizontalLayout.as
 * org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout');
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
org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout = function() {
  org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout, org.apache.royale.jewel.beads.layouts.StyledLayoutBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout', org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout);


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout.LAYOUT_TYPE_NAMES = "layout horizontal";


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
org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout.prototype.beadsAddedHandler = function(event) {
  event = typeof event !== 'undefined' ? event : null;
  org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout.superClass_.beadsAddedHandler.apply(this);
  if (this.hostClassList.contains("layout"))
    this.hostClassList.remove("layout");
  this.hostClassList.add("layout");
  if (this.hostClassList.contains("horizontal"))
    this.hostClassList.remove("horizontal");
  this.hostClassList.add("horizontal");
};


/**
 *  Layout children vertically
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 *  @royaleignorecoercion org.apache.royale.core.ILayoutHost
 *  @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @export
 * @override
 */
org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout.prototype.layout = function() {
  
  return true;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SimpleHorizontalLayout', qName: 'org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'SimpleHorizontalLayout': { type: '', declaredBy: 'org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout'},
        'beadsAddedHandler': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout', parameters: function () { return [ 'org.apache.royale.events.Event', true ]; }},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./SimpleHorizontalLayout.js.map
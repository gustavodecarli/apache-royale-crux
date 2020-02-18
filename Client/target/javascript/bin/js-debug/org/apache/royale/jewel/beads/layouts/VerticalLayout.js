/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/layouts/VerticalLayout.as
 * org.apache.royale.jewel.beads.layouts.VerticalLayout
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.layouts.VerticalLayout');
/* Royale Dependency List: org.apache.royale.core.IUIBase,org.apache.royale.core.ValuesManager,org.apache.royale.events.Event*/

goog.require('org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout');
goog.require('org.apache.royale.core.layout.ILayoutStyleProperties');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout}
 * @implements {org.apache.royale.core.layout.ILayoutStyleProperties}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout = function() {
  org.apache.royale.jewel.beads.layouts.VerticalLayout.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.layouts.VerticalLayout, org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.layouts.VerticalLayout', org.apache.royale.jewel.beads.layouts.VerticalLayout);


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.LAYOUT_TYPE_NAMES = "layout vertical";


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
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.beadsAddedHandler = function(event) {
  event = typeof event !== 'undefined' ? event : null;
  org.apache.royale.jewel.beads.layouts.VerticalLayout.superClass_.beadsAddedHandler.apply(this);
  this.applyStyleToLayout(this.hostComponent, "gap");
  this.org_apache_royale_jewel_beads_layouts_VerticalLayout_setGap(this._gap);
};


/**
 * @private
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.org_apache_royale_jewel_beads_layouts_VerticalLayout__paddingTop = 0;


/**
 * @private
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.org_apache_royale_jewel_beads_layouts_VerticalLayout__paddingRight = 0;


/**
 * @private
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.org_apache_royale_jewel_beads_layouts_VerticalLayout__paddingBottom = 0;


/**
 * @private
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.org_apache_royale_jewel_beads_layouts_VerticalLayout__paddingLeft = 0;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.org_apache_royale_jewel_beads_layouts_VerticalLayout_gapInitialized;


/**
 *  Get the component layout style and apply to if exists
 * 
 *  @asparam component the IUIBase component that host this layout
 *  @asparam cssProperty the style property in css set for the component to retrieve
 * 
 *  @see org.apache.royale.core.layout.ILayoutStyleProperties#applyStyleToLayout(component:IUIBase, cssProperty:String):void
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @export
 * @param {org.apache.royale.core.IUIBase} component
 * @param {string} cssProperty
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.applyStyleToLayout = function(component, cssProperty) {
  var /** @type {*} */ cssValue = org.apache.royale.core.ValuesManager["valuesImpl"].getValue(component, cssProperty);
  if (cssValue !== undefined) {
    switch (cssProperty) {
      case "gap":
        if (!this.org_apache_royale_jewel_beads_layouts_VerticalLayout_gapInitialized)
          this.gap = Number(cssValue);
        break;
      default:
        break;
    }
  }
};


/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.GAPS = 10;


/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.GAP_STEP = 3;


/**
 * @protected
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype._gap = 0;


/**
 * @private
 * @param {number} value
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.org_apache_royale_jewel_beads_layouts_VerticalLayout_setGap = function(value) {
  if (value >= 0 && value <= org.apache.royale.jewel.beads.layouts.VerticalLayout.GAPS * org.apache.royale.jewel.beads.layouts.VerticalLayout.GAP_STEP) {
    if (this.hostClassList.contains("gap-" + this._gap + "x" + org.apache.royale.jewel.beads.layouts.VerticalLayout.GAP_STEP + "px"))
      this.hostClassList.remove("gap-" + this._gap + "x" + org.apache.royale.jewel.beads.layouts.VerticalLayout.GAP_STEP + "px");
    if (value != 0)
      this.hostClassList.add("gap-" + value + "x" + org.apache.royale.jewel.beads.layouts.VerticalLayout.GAP_STEP + "px");
  }
  else
    throw new Error("Gap needs to be between 0 and " + org.apache.royale.jewel.beads.layouts.VerticalLayout.GAPS * org.apache.royale.jewel.beads.layouts.VerticalLayout.GAP_STEP);
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
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.layout = function() {
  
  return true;
};


org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.get__paddingTop = function() {
  return this.org_apache_royale_jewel_beads_layouts_VerticalLayout__paddingTop;
};


org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.set__paddingTop = function(value) {
  this.org_apache_royale_jewel_beads_layouts_VerticalLayout__paddingTop = value;
};


org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.get__paddingRight = function() {
  return this.org_apache_royale_jewel_beads_layouts_VerticalLayout__paddingRight;
};


org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.set__paddingRight = function(value) {
  this.org_apache_royale_jewel_beads_layouts_VerticalLayout__paddingRight = value;
};


org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.get__paddingBottom = function() {
  return this.org_apache_royale_jewel_beads_layouts_VerticalLayout__paddingBottom;
};


org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.set__paddingBottom = function(value) {
  this.org_apache_royale_jewel_beads_layouts_VerticalLayout__paddingBottom = value;
};


org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.get__paddingLeft = function() {
  return this.org_apache_royale_jewel_beads_layouts_VerticalLayout__paddingLeft;
};


org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.set__paddingLeft = function(value) {
  this.org_apache_royale_jewel_beads_layouts_VerticalLayout__paddingLeft = value;
};


org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.get__gap = function() {
  return this._gap;
};


org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.set__gap = function(value) {
  if (this._gap != value) {
    if (this.hostComponent)
      this.org_apache_royale_jewel_beads_layouts_VerticalLayout_setGap(value);
    this._gap = value;
    this.org_apache_royale_jewel_beads_layouts_VerticalLayout_gapInitialized = true;
  }
};


Object.defineProperties(org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype, /** @lends {org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype} */ {
/**
  * @export
  * @type {number} */
paddingTop: {
get: org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.get__paddingTop,
set: org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.set__paddingTop},
/**
  * @export
  * @type {number} */
paddingRight: {
get: org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.get__paddingRight,
set: org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.set__paddingRight},
/**
  * @export
  * @type {number} */
paddingBottom: {
get: org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.get__paddingBottom,
set: org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.set__paddingBottom},
/**
  * @export
  * @type {number} */
paddingLeft: {
get: org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.get__paddingLeft,
set: org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.set__paddingLeft},
/**
  * @export
  * @type {number} */
gap: {
get: org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.get__gap,
set: org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.set__gap}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'VerticalLayout', qName: 'org.apache.royale.jewel.beads.layouts.VerticalLayout', kind: 'class' }], interfaces: [org.apache.royale.core.layout.ILayoutStyleProperties] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'paddingTop': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.layouts.VerticalLayout'},
        'paddingRight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.layouts.VerticalLayout'},
        'paddingBottom': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.layouts.VerticalLayout'},
        'paddingLeft': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.layouts.VerticalLayout'},
        'gap': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.layouts.VerticalLayout'}
      };
    },
    methods: function () {
      return {
        'VerticalLayout': { type: '', declaredBy: 'org.apache.royale.jewel.beads.layouts.VerticalLayout'},
        'beadsAddedHandler': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.layouts.VerticalLayout', parameters: function () { return [ 'org.apache.royale.events.Event', true ]; }},
        'applyStyleToLayout': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.layouts.VerticalLayout', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'String', false ]; }},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.jewel.beads.layouts.VerticalLayout'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.VerticalLayout.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./VerticalLayout.js.map

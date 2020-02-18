/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/layouts/ButtonBarLayout.as
 * org.apache.royale.jewel.beads.layouts.ButtonBarLayout
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.layouts.ButtonBarLayout');
/* Royale Dependency List: org.apache.royale.core.ILayoutChild,org.apache.royale.core.ILayoutView,org.apache.royale.core.IStrand,org.apache.royale.core.IStyleableObject,org.apache.royale.events.Event,org.apache.royale.html.beads.models.ButtonBarModel,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.jewel.beads.layouts.HorizontalLayout');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.7
 * @constructor
 * @extends {org.apache.royale.jewel.beads.layouts.HorizontalLayout}
 */
org.apache.royale.jewel.beads.layouts.ButtonBarLayout = function() {
  org.apache.royale.jewel.beads.layouts.ButtonBarLayout.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.layouts.ButtonBarLayout, org.apache.royale.jewel.beads.layouts.HorizontalLayout);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.layouts.ButtonBarLayout', org.apache.royale.jewel.beads.layouts.ButtonBarLayout);


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.jewel.beads.layouts.ButtonBarLayout.LAYOUT_TYPE_NAMES = "layout horizontal";


/**
 * @private
 * @type {org.apache.royale.html.beads.models.ButtonBarModel}
 */
org.apache.royale.jewel.beads.layouts.ButtonBarLayout.prototype.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model;


/**
 *  Add class selectors when the component is addedToParent
 *  Otherwise component will not get the class selectors when 
 *  perform "removeElement" and then "addElement"
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.7
 * @export
 * @override
 */
org.apache.royale.jewel.beads.layouts.ButtonBarLayout.prototype.beadsAddedHandler = function(event) {
  event = typeof event !== 'undefined' ? event : null;
  org.apache.royale.jewel.beads.layouts.ButtonBarLayout.superClass_.beadsAddedHandler.apply(this);
  this.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model = org.apache.royale.utils.Language.as(org.apache.royale.utils.Language.as(this.host, org.apache.royale.core.IStrand).getBeadByType(org.apache.royale.html.beads.models.ButtonBarModel), org.apache.royale.html.beads.models.ButtonBarModel);
  if (this.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model) {
    this.widthType = this.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model.buttonWidths != null ? this.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model.widthType : NaN;
  }
};


/**
 * @copy org.apache.royale.core.IBeadLayout#layout
 * @royaleignorecoercion org.apache.royale.core.ILayoutChild
 * @royaleignorecoercion org.apache.royale.core.IStrand
 * @royaleignorecoercion org.apache.royale.html.beads.models.ButtonBarModel
 * @export
 * @override
 */
org.apache.royale.jewel.beads.layouts.ButtonBarLayout.prototype.layout = function() {
  var /** @type {org.apache.royale.core.ILayoutView} */ contentView = this.layoutView;
  var /** @type {number} */ n = contentView.numElements;
  if (n <= 0)
    return false;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {Object} */ ilc = contentView.getElementAt(i);
    if (ilc == null || !ilc.visible)
      continue;
    if (!org.apache.royale.utils.Language.is(ilc, org.apache.royale.core.IStyleableObject))
      continue;
    if (this.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model.buttonWidths) {
      var /** @type {*} */ widthValue = this.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model.buttonWidths[i];
      if (this.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model.widthType == org.apache.royale.html.beads.models.ButtonBarModel.PIXEL_WIDTHS) {
        if (widthValue != null)
          ilc.width = Number(widthValue);
      }
    }
  }
  return org.apache.royale.jewel.beads.layouts.ButtonBarLayout.superClass_.layout.apply(this);
};


org.apache.royale.jewel.beads.layouts.ButtonBarLayout.prototype.get__widthType = function() {
  return this.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model.widthType;
};


org.apache.royale.jewel.beads.layouts.ButtonBarLayout.prototype.set__widthType = function(value) {
  if (this.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model.widthType != value) {
    this.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model.widthType = value;
    if (this.hostComponent) {
      if (this.hostClassList.contains("pixelWidths"))
        this.hostClassList.remove("pixelWidths");
      if (this.hostClassList.contains("proportinalWidths"))
        this.hostClassList.remove("proportinalWidths");
      if (this.hostClassList.contains("percentWidths"))
        this.hostClassList.remove("percentWidths");
      if (this.hostClassList.contains("naturalWidths"))
        this.hostClassList.remove("naturalWidths");
      if (this.hostClassList.contains("sameWidths"))
        this.hostClassList.remove("sameWidths");
      if (isNaN(this.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model.widthType)) {
        this.hostClassList.add("sameWidths");
      } else {
        switch (this.org_apache_royale_jewel_beads_layouts_ButtonBarLayout_model.widthType) {
          case org.apache.royale.html.beads.models.ButtonBarModel.PIXEL_WIDTHS:
            this.hostClassList.add("pixelWidths");
            break;
          case org.apache.royale.html.beads.models.ButtonBarModel.PROPORTIONAL_WIDTHS:
            this.hostClassList.add("proportinalWidths");
            break;
          case org.apache.royale.html.beads.models.ButtonBarModel.PERCENT_WIDTHS:
            this.hostClassList.add("percentWidths");
            break;
          case org.apache.royale.html.beads.models.ButtonBarModel.NATURAL_WIDTHS:
            this.hostClassList.add("naturalWidths");
            break;
        }
      }
    }
  }
};


Object.defineProperties(org.apache.royale.jewel.beads.layouts.ButtonBarLayout.prototype, /** @lends {org.apache.royale.jewel.beads.layouts.ButtonBarLayout.prototype} */ {
/**
  * @export
  * @type {number} */
widthType: {
get: org.apache.royale.jewel.beads.layouts.ButtonBarLayout.prototype.get__widthType,
set: org.apache.royale.jewel.beads.layouts.ButtonBarLayout.prototype.set__widthType}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.layouts.ButtonBarLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ButtonBarLayout', qName: 'org.apache.royale.jewel.beads.layouts.ButtonBarLayout', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.layouts.ButtonBarLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'widthType': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.layouts.ButtonBarLayout'}
      };
    },
    methods: function () {
      return {
        'ButtonBarLayout': { type: '', declaredBy: 'org.apache.royale.jewel.beads.layouts.ButtonBarLayout'},
        'beadsAddedHandler': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.layouts.ButtonBarLayout', parameters: function () { return [ 'org.apache.royale.events.Event', true ]; }},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.jewel.beads.layouts.ButtonBarLayout'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.ButtonBarLayout.prototype.ROYALE_COMPILE_FLAGS = 10;
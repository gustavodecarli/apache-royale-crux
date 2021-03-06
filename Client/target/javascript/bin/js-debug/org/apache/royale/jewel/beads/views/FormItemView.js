/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/views/FormItemView.as
 * org.apache.royale.jewel.beads.views.FormItemView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.views.FormItemView');
/* Royale Dependency List: org.apache.royale.core.IBeadLayout,org.apache.royale.core.IChild,org.apache.royale.core.IContainerBaseStrandChildrenHost,org.apache.royale.core.ILayoutView,org.apache.royale.core.IStrand,org.apache.royale.core.IViewport,org.apache.royale.core.UIBase,org.apache.royale.core.ValuesManager,org.apache.royale.events.Event,org.apache.royale.jewel.FormItem,org.apache.royale.jewel.HGroup,org.apache.royale.jewel.Label,org.apache.royale.jewel.beads.controls.TextAlign,org.apache.royale.jewel.beads.layouts.VerticalLayout,org.apache.royale.jewel.beads.models.FormItemModel,org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.beads.GroupView');
goog.require('org.apache.royale.core.IBeadView');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.html.beads.GroupView}
 * @implements {org.apache.royale.core.IBeadView}
 */
org.apache.royale.jewel.beads.views.FormItemView = function() {
  org.apache.royale.jewel.beads.views.FormItemView.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.views.FormItemView, org.apache.royale.html.beads.GroupView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.views.FormItemView', org.apache.royale.jewel.beads.views.FormItemView);


/**
 * @protected
 * @type {org.apache.royale.jewel.FormItem}
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.formItem;


/**
 * @private
 * @type {org.apache.royale.core.UIBase}
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.org_apache_royale_jewel_beads_views_FormItemView__contentArea;


/**
 * @protected
 * @type {org.apache.royale.jewel.beads.models.FormItemModel}
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.model;


/**
 * @protected
 * @type {org.apache.royale.jewel.Label}
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.textLabel;


/**
 * @protected
 * @type {org.apache.royale.jewel.beads.controls.TextAlign}
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.textLabelAlign;


/**
 * @protected
 * @type {org.apache.royale.jewel.Label}
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.requiredLabel;


/**
 *
 * @export
 * @param {string=} labelText
 * @return {org.apache.royale.jewel.Label}
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.createLabel = function(labelText) {
  labelText = typeof labelText !== 'undefined' ? labelText : null;
  var /** @type {org.apache.royale.jewel.Label} */ l = new org.apache.royale.jewel.Label();
  if (labelText != null)
    l.text = labelText;
  return l;
};


/**
 *
 * @export
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.textChangeHandler = function(event) {
  this.textLabel.text = this.model.text;
};


/**
 * @export
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.requiredChangeHandler = function(event) {
  this.requiredLabel.text = this.model.required ? "*" : "";
};


/**
 * @protected
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.setupContentAreaLayout = function() {
  var /** @type {org.apache.royale.jewel.beads.layouts.VerticalLayout} */ defaultContentAreaLayout = new org.apache.royale.jewel.beads.layouts.VerticalLayout();
  defaultContentAreaLayout.gap = 2;
  this.contentArea.addBead(defaultContentAreaLayout);
};


/**
 * @protected
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.setupLayout = function() {
  
};


/**
 * @private
 * @type {org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy}
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.org_apache_royale_jewel_beads_views_FormItemView__formItemLayoutProxy;


/**
 * @protected
 * @override
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.completeSetup = function() {
  org.apache.royale.jewel.beads.views.FormItemView.superClass_.completeSetup.apply(this);
  this.performLayout(null);
};


/**
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.handleSizeChange = function(event) {
  this.org_apache_royale_jewel_beads_views_FormItemView__contentArea.percentWidth = 100;
  this.performLayout(event);
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.org_apache_royale_jewel_beads_views_FormItemView_sawInitComplete;


/**
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.org_apache_royale_jewel_beads_views_FormItemView_handleChildrenAdded = function(event) {
  if (this.org_apache_royale_jewel_beads_views_FormItemView_sawInitComplete || ((this.formItem.isHeightSizedToContent() || !isNaN(this.formItem.explicitHeight)) && (this.formItem.isWidthSizedToContent() || !isNaN(this.formItem.explicitWidth)))) {
    this.org_apache_royale_jewel_beads_views_FormItemView__contentArea.dispatchEvent(new org.apache.royale.events.Event("layoutNeeded"));
    this.performLayout(event);
  }
};


org.apache.royale.jewel.beads.views.FormItemView.prototype.get__contentArea = function() {
  return this.org_apache_royale_jewel_beads_views_FormItemView__contentArea;
};


org.apache.royale.jewel.beads.views.FormItemView.prototype.set__contentArea = function(value) {
  this.org_apache_royale_jewel_beads_views_FormItemView__contentArea = value;
};


org.apache.royale.jewel.beads.views.FormItemView.prototype.set__strand = function(value) {
  org.apache.royale.jewel.beads.views.FormItemView.superClass_.set__strand.apply(this, [ value] );
  this.formItem = org.apache.royale.utils.Language.as(value, org.apache.royale.jewel.FormItem);
  this.model = org.apache.royale.utils.Language.as(this._strand.getBeadByType(org.apache.royale.jewel.beads.models.FormItemModel), org.apache.royale.jewel.beads.models.FormItemModel);
  this.model.addEventListener("textChange", org.apache.royale.utils.Language.closure(this.textChangeHandler, this, 'textChangeHandler'));
  this.model.addEventListener("htmlChange", org.apache.royale.utils.Language.closure(this.textChangeHandler, this, 'textChangeHandler'));
  this.model.addEventListener("requiredChange", org.apache.royale.utils.Language.closure(this.requiredChangeHandler, this, 'requiredChangeHandler'));
  var /** @type {Array} */ beads = this.formItem.beads;
  var /** @type {org.apache.royale.core.IBeadLayout} */ transferLayoutBead;
  var /** @type {org.apache.royale.core.IViewport} */ transferViewportBead;
  if (this.formItem.beads != null) {
    for (var /** @type {number} */ i = (this.formItem.beads.length - 1) >> 0; i >= 0; i--) {
      if (org.apache.royale.utils.Language.is(this.formItem.beads[i], org.apache.royale.core.IBeadLayout)) {
        transferLayoutBead = this.formItem.beads[i];
        this.formItem.beads.splice(i, 1);
      } else if (org.apache.royale.utils.Language.is(this.formItem.beads[i], org.apache.royale.core.IViewport)) {
        transferViewportBead = this.formItem.beads[i];
        this.formItem.beads.splice(i, 1);
      }
    }
  }
  if (!this.org_apache_royale_jewel_beads_views_FormItemView__contentArea) {
    var /** @type {Object} */ cls = org.apache.royale.core.ValuesManager["valuesImpl"].getValue(this._strand, "iFormItemContentArea");
    this.org_apache_royale_jewel_beads_views_FormItemView__contentArea = new cls();
    this.org_apache_royale_jewel_beads_views_FormItemView__contentArea.className = "content";
    if (transferLayoutBead)
      this.org_apache_royale_jewel_beads_views_FormItemView__contentArea.addBead(transferLayoutBead);
    else
      this.setupContentAreaLayout();
    if (transferViewportBead)
      this.org_apache_royale_jewel_beads_views_FormItemView__contentArea.addBead(transferViewportBead);
  }
  
  var /** @type {org.apache.royale.jewel.HGroup} */ labelGroup;
  if (labelGroup == null) {
    labelGroup = new org.apache.royale.jewel.HGroup();
    labelGroup.gap = 2;
    labelGroup.itemsHorizontalAlign = "itemsCentered";
    labelGroup.className = "labelGroup";
  }
  if (labelGroup != null && labelGroup.parent == null) {
    org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IContainerBaseStrandChildrenHost).$addElement(labelGroup);
  }
  if (this.textLabel == null) {
    this.textLabel = this.createLabel(this.model.text);
    this.textLabel.multiline = true;
    this.textLabel.className = "formlabel";
  }
  if (this.textLabel != null && this.textLabel.parent == null) {
    labelGroup.addElement(this.textLabel);
    this.textLabelAlign = new org.apache.royale.jewel.beads.controls.TextAlign();
    this.textLabelAlign.align = this.model.labelAlign;
    this.textLabel.addBead(this.textLabelAlign);
  }
  if (this.requiredLabel == null) {
    var /** @type {string} */ ast = this.model.required ? "*" : "";
    this.requiredLabel = this.createLabel(ast);
    this.requiredLabel.className = "required";
  }
  if (this.requiredLabel != null && this.requiredLabel.parent == null) {
    labelGroup.addElement(this.requiredLabel);
  }
  if (this.contentArea.parent == null) {
    org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IContainerBaseStrandChildrenHost).$addElement(this.contentArea);
  }
  this.setupLayout();
};


org.apache.royale.jewel.beads.views.FormItemView.prototype.get__contentView = function() {
  if (this.org_apache_royale_jewel_beads_views_FormItemView__formItemLayoutProxy == null) {
    this.org_apache_royale_jewel_beads_views_FormItemView__formItemLayoutProxy = new org.apache.royale.jewel.supportClasses.formitem.FormItemLayoutProxy(this._strand);
  }
  return this.org_apache_royale_jewel_beads_views_FormItemView__formItemLayoutProxy;
};


Object.defineProperties(org.apache.royale.jewel.beads.views.FormItemView.prototype, /** @lends {org.apache.royale.jewel.beads.views.FormItemView.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.UIBase} */
contentArea: {
get: org.apache.royale.jewel.beads.views.FormItemView.prototype.get__contentArea,
set: org.apache.royale.jewel.beads.views.FormItemView.prototype.set__contentArea},
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.jewel.beads.views.FormItemView.prototype.set__strand},
/**
  * @export
  * @type {org.apache.royale.core.ILayoutView} */
contentView: {
get: org.apache.royale.jewel.beads.views.FormItemView.prototype.get__contentView}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FormItemView', qName: 'org.apache.royale.jewel.beads.views.FormItemView', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadView] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'contentArea': { type: 'org.apache.royale.core.UIBase', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.views.FormItemView'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.jewel.beads.views.FormItemView'},
        'contentView': { type: 'org.apache.royale.core.ILayoutView', access: 'readonly', declaredBy: 'org.apache.royale.jewel.beads.views.FormItemView'}
      };
    },
    methods: function () {
      return {
        'FormItemView': { type: '', declaredBy: 'org.apache.royale.jewel.beads.views.FormItemView'},
        'createLabel': { type: 'org.apache.royale.jewel.Label', declaredBy: 'org.apache.royale.jewel.beads.views.FormItemView', parameters: function () { return [ 'String', true ]; }},
        'textChangeHandler': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.views.FormItemView', parameters: function () { return [ 'org.apache.royale.events.Event', false ]; }},
        'requiredChangeHandler': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.views.FormItemView', parameters: function () { return [ 'org.apache.royale.events.Event', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.views.FormItemView.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./FormItemView.js.map

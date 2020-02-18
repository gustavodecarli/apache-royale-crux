/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/views/FormHeadingView.as
 * org.apache.royale.jewel.beads.views.FormHeadingView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.views.FormHeadingView');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.core.ITextModel,org.apache.royale.events.Event,org.apache.royale.jewel.FormHeading,org.apache.royale.jewel.Label,org.apache.royale.utils.Language*/

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
org.apache.royale.jewel.beads.views.FormHeadingView = function() {
  org.apache.royale.jewel.beads.views.FormHeadingView.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.views.FormHeadingView, org.apache.royale.html.beads.GroupView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.views.FormHeadingView', org.apache.royale.jewel.beads.views.FormHeadingView);


/**
 * @private
 * @type {org.apache.royale.core.ITextModel}
 */
org.apache.royale.jewel.beads.views.FormHeadingView.prototype.org_apache_royale_jewel_beads_views_FormHeadingView_model;


/**
 * @protected
 * @type {org.apache.royale.jewel.FormHeading}
 */
org.apache.royale.jewel.beads.views.FormHeadingView.prototype.formHeading;


/**
 * @private
 * @type {org.apache.royale.jewel.Label}
 */
org.apache.royale.jewel.beads.views.FormHeadingView.prototype.org_apache_royale_jewel_beads_views_FormHeadingView_spacerLabel;


/**
 * @private
 * @type {org.apache.royale.jewel.Label}
 */
org.apache.royale.jewel.beads.views.FormHeadingView.prototype.org_apache_royale_jewel_beads_views_FormHeadingView_requiredSpacerLabel;


/**
 * @private
 * @type {org.apache.royale.jewel.Label}
 */
org.apache.royale.jewel.beads.views.FormHeadingView.prototype.org_apache_royale_jewel_beads_views_FormHeadingView_headingLabel;


/**
 * 
 * @export
 * @param {string=} labelText
 * @return {org.apache.royale.jewel.Label}
 */
org.apache.royale.jewel.beads.views.FormHeadingView.prototype.createLabel = function(labelText) {
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
org.apache.royale.jewel.beads.views.FormHeadingView.prototype.textChangeHandler = function(event) {
  this.org_apache_royale_jewel_beads_views_FormHeadingView_headingLabel.text = this.org_apache_royale_jewel_beads_views_FormHeadingView_model.text;
};


org.apache.royale.jewel.beads.views.FormHeadingView.prototype.set__strand = function(value) {
  org.apache.royale.jewel.beads.views.FormHeadingView.superClass_.set__strand.apply(this, [ value] );
  this.formHeading = org.apache.royale.utils.Language.as(value, org.apache.royale.jewel.FormHeading);
  this.org_apache_royale_jewel_beads_views_FormHeadingView_model = org.apache.royale.utils.Language.as(this._strand.getBeadByType(org.apache.royale.core.ITextModel), org.apache.royale.core.ITextModel);
  this.org_apache_royale_jewel_beads_views_FormHeadingView_model.addEventListener("textChange", org.apache.royale.utils.Language.closure(this.textChangeHandler, this, 'textChangeHandler'));
  this.org_apache_royale_jewel_beads_views_FormHeadingView_model.addEventListener("htmlChange", org.apache.royale.utils.Language.closure(this.textChangeHandler, this, 'textChangeHandler'));
  if (this.org_apache_royale_jewel_beads_views_FormHeadingView_spacerLabel == null) {
    this.org_apache_royale_jewel_beads_views_FormHeadingView_spacerLabel = this.createLabel("");
    this.org_apache_royale_jewel_beads_views_FormHeadingView_spacerLabel.className = "spacerLabel";
  }
  if (this.org_apache_royale_jewel_beads_views_FormHeadingView_spacerLabel != null && this.org_apache_royale_jewel_beads_views_FormHeadingView_spacerLabel.parent == null) {
    this.formHeading.addElement(this.org_apache_royale_jewel_beads_views_FormHeadingView_spacerLabel);
  }
  if (this.org_apache_royale_jewel_beads_views_FormHeadingView_requiredSpacerLabel == null) {
    this.org_apache_royale_jewel_beads_views_FormHeadingView_requiredSpacerLabel = this.createLabel("");
    this.org_apache_royale_jewel_beads_views_FormHeadingView_requiredSpacerLabel.className = "requiredSpacerLabel";
  }
  if (this.org_apache_royale_jewel_beads_views_FormHeadingView_requiredSpacerLabel != null && this.org_apache_royale_jewel_beads_views_FormHeadingView_requiredSpacerLabel.parent == null) {
    this.formHeading.addElement(this.org_apache_royale_jewel_beads_views_FormHeadingView_requiredSpacerLabel);
  }
  if (this.org_apache_royale_jewel_beads_views_FormHeadingView_headingLabel == null) {
    this.org_apache_royale_jewel_beads_views_FormHeadingView_headingLabel = this.createLabel(this.org_apache_royale_jewel_beads_views_FormHeadingView_model.text);
    this.org_apache_royale_jewel_beads_views_FormHeadingView_headingLabel.className = "headingLabel";
  }
  if (this.org_apache_royale_jewel_beads_views_FormHeadingView_headingLabel != null && this.org_apache_royale_jewel_beads_views_FormHeadingView_headingLabel.parent == null) {
    this.formHeading.addElement(this.org_apache_royale_jewel_beads_views_FormHeadingView_headingLabel);
  }
};


Object.defineProperties(org.apache.royale.jewel.beads.views.FormHeadingView.prototype, /** @lends {org.apache.royale.jewel.beads.views.FormHeadingView.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.jewel.beads.views.FormHeadingView.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.views.FormHeadingView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FormHeadingView', qName: 'org.apache.royale.jewel.beads.views.FormHeadingView', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadView] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.views.FormHeadingView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.jewel.beads.views.FormHeadingView'}
      };
    },
    methods: function () {
      return {
        'FormHeadingView': { type: '', declaredBy: 'org.apache.royale.jewel.beads.views.FormHeadingView'},
        'createLabel': { type: 'org.apache.royale.jewel.Label', declaredBy: 'org.apache.royale.jewel.beads.views.FormHeadingView', parameters: function () { return [ 'String', true ]; }},
        'textChangeHandler': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.views.FormHeadingView', parameters: function () { return [ 'org.apache.royale.events.Event', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.views.FormHeadingView.prototype.ROYALE_COMPILE_FLAGS = 10;

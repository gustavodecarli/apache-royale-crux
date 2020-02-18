/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/models/TitleBarModel.as
 * org.apache.royale.jewel.beads.models.TitleBarModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.models.TitleBarModel');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.events.Event*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.ITitleBarModel');



/**
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.ITitleBarModel}
 */
org.apache.royale.jewel.beads.models.TitleBarModel = function() {
  org.apache.royale.jewel.beads.models.TitleBarModel.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.models.TitleBarModel, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.models.TitleBarModel', org.apache.royale.jewel.beads.models.TitleBarModel);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.jewel.beads.models.TitleBarModel.prototype.org_apache_royale_jewel_beads_models_TitleBarModel__strand;


/**
 * @private
 * @type {string}
 */
org.apache.royale.jewel.beads.models.TitleBarModel.prototype.org_apache_royale_jewel_beads_models_TitleBarModel__title;


/**
 * @private
 * @type {string}
 */
org.apache.royale.jewel.beads.models.TitleBarModel.prototype.org_apache_royale_jewel_beads_models_TitleBarModel__htmlTitle;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.beads.models.TitleBarModel.prototype.org_apache_royale_jewel_beads_models_TitleBarModel__showCloseButton = false;


org.apache.royale.jewel.beads.models.TitleBarModel.prototype.set__strand = function(value) {
  this.org_apache_royale_jewel_beads_models_TitleBarModel__strand = value;
};


org.apache.royale.jewel.beads.models.TitleBarModel.prototype.get__title = function() {
  return this.org_apache_royale_jewel_beads_models_TitleBarModel__title;
};


org.apache.royale.jewel.beads.models.TitleBarModel.prototype.set__title = function(value) {
  if (value != this.org_apache_royale_jewel_beads_models_TitleBarModel__title) {
    this.org_apache_royale_jewel_beads_models_TitleBarModel__title = value;
    this.dispatchEvent(new org.apache.royale.events.Event('titleChange'));
  }
};


org.apache.royale.jewel.beads.models.TitleBarModel.prototype.get__htmlTitle = function() {
  return this.org_apache_royale_jewel_beads_models_TitleBarModel__htmlTitle;
};


org.apache.royale.jewel.beads.models.TitleBarModel.prototype.set__htmlTitle = function(value) {
  if (value != this.org_apache_royale_jewel_beads_models_TitleBarModel__htmlTitle) {
    this.org_apache_royale_jewel_beads_models_TitleBarModel__htmlTitle = value;
    this.dispatchEvent(new org.apache.royale.events.Event('htmlTitleChange'));
  }
};


org.apache.royale.jewel.beads.models.TitleBarModel.prototype.get__showCloseButton = function() {
  return this.org_apache_royale_jewel_beads_models_TitleBarModel__showCloseButton;
};


org.apache.royale.jewel.beads.models.TitleBarModel.prototype.set__showCloseButton = function(value) {
  if (value != this.org_apache_royale_jewel_beads_models_TitleBarModel__showCloseButton) {
    this.org_apache_royale_jewel_beads_models_TitleBarModel__showCloseButton = value;
    this.dispatchEvent(new org.apache.royale.events.Event('showCloseButtonChange'));
  }
};


Object.defineProperties(org.apache.royale.jewel.beads.models.TitleBarModel.prototype, /** @lends {org.apache.royale.jewel.beads.models.TitleBarModel.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.jewel.beads.models.TitleBarModel.prototype.set__strand},
/**
  * @export
  * @type {string} */
title: {
get: org.apache.royale.jewel.beads.models.TitleBarModel.prototype.get__title,
set: org.apache.royale.jewel.beads.models.TitleBarModel.prototype.set__title},
/**
  * @export
  * @type {string} */
htmlTitle: {
get: org.apache.royale.jewel.beads.models.TitleBarModel.prototype.get__htmlTitle,
set: org.apache.royale.jewel.beads.models.TitleBarModel.prototype.set__htmlTitle},
/**
  * @export
  * @type {boolean} */
showCloseButton: {
get: org.apache.royale.jewel.beads.models.TitleBarModel.prototype.get__showCloseButton,
set: org.apache.royale.jewel.beads.models.TitleBarModel.prototype.set__showCloseButton}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.models.TitleBarModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TitleBarModel', qName: 'org.apache.royale.jewel.beads.models.TitleBarModel', kind: 'class' }], interfaces: [org.apache.royale.core.IBead, org.apache.royale.core.ITitleBarModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.models.TitleBarModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.jewel.beads.models.TitleBarModel'},
        'title': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.models.TitleBarModel', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'titleChange' } ] } ]; }},
        'htmlTitle': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.models.TitleBarModel', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'htmlTitleChange' } ] } ]; }},
        'showCloseButton': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.models.TitleBarModel', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'showCloseButtonChange' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        'TitleBarModel': { type: '', declaredBy: 'org.apache.royale.jewel.beads.models.TitleBarModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.models.TitleBarModel.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./TitleBarModel.js.map

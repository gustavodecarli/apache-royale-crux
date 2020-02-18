/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/models/TextModel.as
 * org.apache.royale.jewel.beads.models.TextModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.models.TextModel');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.events.Event*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.ITextModel');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.ITextModel}
 */
org.apache.royale.jewel.beads.models.TextModel = function() {
  org.apache.royale.jewel.beads.models.TextModel.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.models.TextModel, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.beads.models.TextModel', org.apache.royale.jewel.beads.models.TextModel);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.jewel.beads.models.TextModel.prototype.org_apache_royale_jewel_beads_models_TextModel__strand;


/**
 * @private
 * @type {string}
 */
org.apache.royale.jewel.beads.models.TextModel.prototype.org_apache_royale_jewel_beads_models_TextModel__text;


/**
 * @private
 * @type {string}
 */
org.apache.royale.jewel.beads.models.TextModel.prototype.org_apache_royale_jewel_beads_models_TextModel__html;


org.apache.royale.jewel.beads.models.TextModel.prototype.set__strand = function(value) {
  this.org_apache_royale_jewel_beads_models_TextModel__strand = value;
};


org.apache.royale.jewel.beads.models.TextModel.prototype.get__text = function() {
  return this.org_apache_royale_jewel_beads_models_TextModel__text;
};


org.apache.royale.jewel.beads.models.TextModel.prototype.set__text = function(value) {
  if (value == null)
    value = "";
  if (value != this.org_apache_royale_jewel_beads_models_TextModel__text) {
    this.org_apache_royale_jewel_beads_models_TextModel__text = value;
    this.dispatchEvent(new org.apache.royale.events.Event("textChange"));
  }
};


org.apache.royale.jewel.beads.models.TextModel.prototype.get__html = function() {
  return this.org_apache_royale_jewel_beads_models_TextModel__html;
};


org.apache.royale.jewel.beads.models.TextModel.prototype.set__html = function(value) {
  if (value != this.org_apache_royale_jewel_beads_models_TextModel__html) {
    this.org_apache_royale_jewel_beads_models_TextModel__html = value;
    this.dispatchEvent(new org.apache.royale.events.Event("htmlChange"));
  }
};


Object.defineProperties(org.apache.royale.jewel.beads.models.TextModel.prototype, /** @lends {org.apache.royale.jewel.beads.models.TextModel.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.jewel.beads.models.TextModel.prototype.set__strand},
/**
  * @export
  * @type {string} */
text: {
get: org.apache.royale.jewel.beads.models.TextModel.prototype.get__text,
set: org.apache.royale.jewel.beads.models.TextModel.prototype.set__text},
/**
  * @export
  * @type {string} */
html: {
get: org.apache.royale.jewel.beads.models.TextModel.prototype.get__html,
set: org.apache.royale.jewel.beads.models.TextModel.prototype.set__html}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.models.TextModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextModel', qName: 'org.apache.royale.jewel.beads.models.TextModel', kind: 'class' }], interfaces: [org.apache.royale.core.IBead, org.apache.royale.core.ITextModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.models.TextModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.jewel.beads.models.TextModel'},
        'text': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.models.TextModel', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'textChange' } ] } ]; }},
        'html': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.models.TextModel', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'htmlChange' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        'TextModel': { type: '', declaredBy: 'org.apache.royale.jewel.beads.models.TextModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.models.TextModel.prototype.ROYALE_COMPILE_FLAGS = 10;

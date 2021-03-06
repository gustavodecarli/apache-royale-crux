/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/metadata/InjectMetadataTag.as
 * org.apache.royale.crux.metadata.InjectMetadataTag
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.metadata.InjectMetadataTag');
/* Royale Dependency List: org.apache.royale.crux.reflection.IMetadataTag*/

goog.require('org.apache.royale.crux.reflection.BaseMetadataTag');



/**
 * Constructor sets <code>defaultArgName</code>.
 * @constructor
 * @extends {org.apache.royale.crux.reflection.BaseMetadataTag}
 */
org.apache.royale.crux.metadata.InjectMetadataTag = function() {
  org.apache.royale.crux.metadata.InjectMetadataTag.base(this, 'constructor');
  this.defaultArgName = "source";
};
goog.inherits(org.apache.royale.crux.metadata.InjectMetadataTag, org.apache.royale.crux.reflection.BaseMetadataTag);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.metadata.InjectMetadataTag', org.apache.royale.crux.metadata.InjectMetadataTag);


/**
 * @protected
 * @type {string}
 */
org.apache.royale.crux.metadata.InjectMetadataTag.prototype._source;


/**
 * @protected
 * @type {string}
 */
org.apache.royale.crux.metadata.InjectMetadataTag.prototype._destination;


/**
 * @protected
 * @type {boolean}
 */
org.apache.royale.crux.metadata.InjectMetadataTag.prototype._bind = false;


/**
 * @protected
 * @type {boolean}
 */
org.apache.royale.crux.metadata.InjectMetadataTag.prototype._required = true;


/**
 * @export
 * @override
 */
org.apache.royale.crux.metadata.InjectMetadataTag.prototype.copyFrom = function(metadataTag) {
  org.apache.royale.crux.metadata.InjectMetadataTag.superClass_.copyFrom.apply(this, [ metadataTag] );
  if (this.hasArg("bean") && this.hasArg("source"))
    throw new Error("Your metadata tag defines both a bean and source attribute. source has replaced bean, please update accordingly.");
  if (this.hasArg("bean")) {
    this._source = this.getArg("bean").value;
  }
  if (this.hasArg("source"))
    this._source = this.getArg("source").value;
  if (this.hasArg("property")) {
    this._source += "." + this.getArg("property").value;
  }
  if (this.hasArg("destination"))
    this._destination = this.getArg("destination").value;
  if (this.hasArg("bind"))
    this._bind = this.getArg("bind").value == "true";
  if (this.hasArg("required"))
    this._required = this.getArg("required").value == "true";
};


org.apache.royale.crux.metadata.InjectMetadataTag.prototype.get__source = function() {
  return this._source;
};


org.apache.royale.crux.metadata.InjectMetadataTag.prototype.set__source = function(value) {
  this._source = value;
};


org.apache.royale.crux.metadata.InjectMetadataTag.prototype.get__destination = function() {
  return this._destination;
};


org.apache.royale.crux.metadata.InjectMetadataTag.prototype.get__bind = function() {
  return this._bind;
};


org.apache.royale.crux.metadata.InjectMetadataTag.prototype.get__required = function() {
  return this._required;
};


Object.defineProperties(org.apache.royale.crux.metadata.InjectMetadataTag.prototype, /** @lends {org.apache.royale.crux.metadata.InjectMetadataTag.prototype} */ {
/**
  * @export
  * @type {string} */
source: {
get: org.apache.royale.crux.metadata.InjectMetadataTag.prototype.get__source,
set: org.apache.royale.crux.metadata.InjectMetadataTag.prototype.set__source},
/**
  * @export
  * @type {string} */
destination: {
get: org.apache.royale.crux.metadata.InjectMetadataTag.prototype.get__destination},
/**
  * @export
  * @type {boolean} */
bind: {
get: org.apache.royale.crux.metadata.InjectMetadataTag.prototype.get__bind},
/**
  * @export
  * @type {boolean} */
required: {
get: org.apache.royale.crux.metadata.InjectMetadataTag.prototype.get__required}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.metadata.InjectMetadataTag.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'InjectMetadataTag', qName: 'org.apache.royale.crux.metadata.InjectMetadataTag', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.metadata.InjectMetadataTag.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'source': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.crux.metadata.InjectMetadataTag'},
        'destination': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.crux.metadata.InjectMetadataTag'},
        'bind': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.crux.metadata.InjectMetadataTag'},
        'required': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.crux.metadata.InjectMetadataTag'}
      };
    },
    methods: function () {
      return {
        'InjectMetadataTag': { type: '', declaredBy: 'org.apache.royale.crux.metadata.InjectMetadataTag'},
        'copyFrom': { type: 'void', declaredBy: 'org.apache.royale.crux.metadata.InjectMetadataTag', parameters: function () { return [ 'org.apache.royale.crux.reflection.IMetadataTag', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.metadata.InjectMetadataTag.prototype.ROYALE_COMPILE_FLAGS = 10;

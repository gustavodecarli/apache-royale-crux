/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/metadata/PostConstructMetadataTag.as
 * org.apache.royale.crux.metadata.PostConstructMetadataTag
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.metadata.PostConstructMetadataTag');
/* Royale Dependency List: org.apache.royale.crux.reflection.IMetadataTag,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.crux.reflection.BaseMetadataTag');



/**
 * Constructor sets <code>defaultArgName</code>.
 * @constructor
 * @extends {org.apache.royale.crux.reflection.BaseMetadataTag}
 */
org.apache.royale.crux.metadata.PostConstructMetadataTag = function() {
  org.apache.royale.crux.metadata.PostConstructMetadataTag.base(this, 'constructor');
  this.defaultArgName = "order";
};
goog.inherits(org.apache.royale.crux.metadata.PostConstructMetadataTag, org.apache.royale.crux.reflection.BaseMetadataTag);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.metadata.PostConstructMetadataTag', org.apache.royale.crux.metadata.PostConstructMetadataTag);


/**
 * @protected
 * @type {number}
 */
org.apache.royale.crux.metadata.PostConstructMetadataTag.prototype._order = 1;


/**
 * @export
 * @override
 */
org.apache.royale.crux.metadata.PostConstructMetadataTag.prototype.copyFrom = function(metadataTag) {
  org.apache.royale.crux.metadata.PostConstructMetadataTag.superClass_.copyFrom.apply(this, [ metadataTag] );
  if (this.hasArg("order"))
    this._order = org.apache.royale.utils.Language._int(this.getArg("order").value);
};


org.apache.royale.crux.metadata.PostConstructMetadataTag.prototype.get__order = function() {
  return this._order;
};


Object.defineProperties(org.apache.royale.crux.metadata.PostConstructMetadataTag.prototype, /** @lends {org.apache.royale.crux.metadata.PostConstructMetadataTag.prototype} */ {
/**
  * @export
  * @type {number} */
order: {
get: org.apache.royale.crux.metadata.PostConstructMetadataTag.prototype.get__order}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.metadata.PostConstructMetadataTag.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'PostConstructMetadataTag', qName: 'org.apache.royale.crux.metadata.PostConstructMetadataTag', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.metadata.PostConstructMetadataTag.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'order': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.crux.metadata.PostConstructMetadataTag'}
      };
    },
    methods: function () {
      return {
        'PostConstructMetadataTag': { type: '', declaredBy: 'org.apache.royale.crux.metadata.PostConstructMetadataTag'},
        'copyFrom': { type: 'void', declaredBy: 'org.apache.royale.crux.metadata.PostConstructMetadataTag', parameters: function () { return [ 'org.apache.royale.crux.reflection.IMetadataTag', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.metadata.PostConstructMetadataTag.prototype.ROYALE_COMPILE_FLAGS = 10;

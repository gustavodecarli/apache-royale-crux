/**
 * Generated by Apache Royale Compiler from mx/collections/ArrayCollection.as
 * mx.collections.ArrayCollection
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.collections.ArrayCollection');
/* Royale Dependency List: mx.collections.ArrayList,org.apache.royale.utils.net.IDataInput,org.apache.royale.utils.net.IDataOutput,org.apache.royale.utils.Language,XML*/

goog.require('mx.collections.ListCollectionView');
goog.require('org.apache.royale.utils.net.IExternalizable');



/**
 *  Constructor.
 *
 *  <p>Creates a new ArrayCollection using the specified source array.
 *  If no array is specified an empty array will be used.</p>
 *
 *  @asparam source The source Array.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {mx.collections.ListCollectionView}
 * @implements {org.apache.royale.utils.net.IExternalizable}
 * @param {Array=} source
 */
mx.collections.ArrayCollection = function(source) {
  source = typeof source !== 'undefined' ? source : null;
  mx.collections.ArrayCollection.base(this, 'constructor');
  this.source = source;
};
goog.inherits(mx.collections.ArrayCollection, mx.collections.ListCollectionView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.collections.ArrayCollection', mx.collections.ArrayCollection);


/**
 *  @asprivate
 *  Ensures that only the source property is serialized.
 * @export
 * @param {org.apache.royale.utils.net.IDataInput} input
 */
mx.collections.ArrayCollection.prototype.readExternal = function(input) {
  if (org.apache.royale.utils.Language.is(this.list, org.apache.royale.utils.net.IExternalizable))
    org.apache.royale.utils.Language.as(this.list, org.apache.royale.utils.net.IExternalizable, true).readExternal(input);
  else
    this.source = org.apache.royale.utils.Language.as(input.readObject(), Array);
};


/**
 *  @asprivate
 *  Ensures that only the source property is serialized.
 * @export
 * @param {org.apache.royale.utils.net.IDataOutput} output
 */
mx.collections.ArrayCollection.prototype.writeExternal = function(output) {
  if (org.apache.royale.utils.Language.is(this.list, org.apache.royale.utils.net.IExternalizable))
    org.apache.royale.utils.Language.as(this.list, org.apache.royale.utils.net.IExternalizable, true).writeExternal(output);
  else
    output.writeObject(this.source);
};


mx.collections.ArrayCollection.prototype.get__source = function() {
  if (this.list && org.apache.royale.utils.Language.is(this.list, mx.collections.ArrayList)) {
    return org.apache.royale.utils.Language.as(this.list, mx.collections.ArrayList, true).source;
  }
  return null;
};


mx.collections.ArrayCollection.prototype.set__source = function(s) {
  this.list = new mx.collections.ArrayList(s);
};


Object.defineProperties(mx.collections.ArrayCollection.prototype, /** @lends {mx.collections.ArrayCollection.prototype} */ {
/**
  * @export
  * @type {Array} */
source: {
get: mx.collections.ArrayCollection.prototype.get__source,
set: mx.collections.ArrayCollection.prototype.set__source}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.collections.ArrayCollection.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ArrayCollection', qName: 'mx.collections.ArrayCollection', kind: 'class' }], interfaces: [org.apache.royale.utils.net.IExternalizable] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.collections.ArrayCollection.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'source': { type: 'Array', access: 'readwrite', declaredBy: 'mx.collections.ArrayCollection', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'listChanged' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        'ArrayCollection': { type: '', declaredBy: 'mx.collections.ArrayCollection', parameters: function () { return [ 'Array', true ]; }},
        'readExternal': { type: 'void', declaredBy: 'mx.collections.ArrayCollection', parameters: function () { return [ 'org.apache.royale.utils.net.IDataInput', false ]; }},
        'writeExternal': { type: 'void', declaredBy: 'mx.collections.ArrayCollection', parameters: function () { return [ 'org.apache.royale.utils.net.IDataOutput', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.collections.ArrayCollection.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ArrayCollection.js.map

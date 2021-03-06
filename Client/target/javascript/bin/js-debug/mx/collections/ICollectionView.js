/**
 * Generated by Apache Royale Compiler from mx/collections/ICollectionView.as
 * mx.collections.ICollectionView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.collections.ICollectionView');
/* Royale Dependency List: mx.collections.ISort,mx.collections.IViewCursor,XML*/

goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 */
mx.collections.ICollectionView = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.collections.ICollectionView', mx.collections.ICollectionView);
/**  * @type {number}
 */mx.collections.ICollectionView.prototype.length;
/**  * @type {Function}
 */mx.collections.ICollectionView.prototype.filterFunction;
/**  * @type {mx.collections.ISort}
 */mx.collections.ICollectionView.prototype.sort;
/**
 *  Creates a new IViewCursor that works with this view.
 *
 *  @asreturn A new IViewCursor implementation.
 *
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @export
 * @return {mx.collections.IViewCursor}
 */
mx.collections.ICollectionView.prototype.createCursor = function() {
};
/**
 *  Returns whether the view contains the specified object.
 *  Unlike the <code>IViewCursor.find<i>xxx</i></code> methods,
 *  this search is succesful only if it finds an item that exactly
 *  matches the parameter.
 *  If the view has a filter applied to it this method may return
 *  <code>false</code> even if the underlying collection
 *  does contain the item.
 *
 *  @asparam item The object to look for.
 *
 *  @asreturn true if the ICollectionView, after applying any filter,
 *  contains the item; false otherwise.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @export
 * @param {Object} item
 * @return {boolean}
 */
mx.collections.ICollectionView.prototype.contains = function(item) {
};
mx.collections.ICollectionView.prototype.disableAutoUpdate = function() {
};
mx.collections.ICollectionView.prototype.enableAutoUpdate = function() {
};
/**
 *  Notifies the view that an item has been updated.
 *  This method is useful if the contents of the view do not implement
 *  <code>IPropertyChangeNotifier</code>.
 *  If the call to this method includes a <code>property</code> parameter,
 *  the view may be able to optimize its notification mechanism.
 *  Otherwise it may choose to simply refresh the whole view.
 *
 *  @asparam item The item within the view that was updated.
 *
 *  @asparam property The name of the property that was updated.
 *
 *  @asparam oldValue The old value of that property. (If property
 *  was null, this can be the old value of the item.).
 *
 *  @asparam newValue The new value of that property. (If property
 *  was null, there's no need to specify this as the item is assumed
 *  to be the new value.)
 *
 *  @see mx.events.CollectionEvent
 *  @see mx.core.IPropertyChangeNotifier
 *  @see mx.events.PropertyChangeEvent
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @export
 * @param {Object} item
 * @param {Object=} property
 * @param {Object=} oldValue
 * @param {Object=} newValue
 */
mx.collections.ICollectionView.prototype.itemUpdated = function(item, property, oldValue, newValue) {
};
/**
 *  Applies the sort and filter to the view.
 *  The ICollectionView does not detect changes to a sort or
 *  filter automatically, so you must call the <code>refresh()</code>
 *  method to update the view after setting the <code>sort</code> 
 *  or <code>filterFunction</code> property.
 *  If your ICollectionView implementation also implements
 *  the IMXMLObject interface, you should to call the
 *  <code>refresh()</code> method from your <code>initialized()</code>
 *  method.
 *
 *  <p>Returns <code>true</code> if the refresh was successful
 *  and <code>false</code> if the sort is not yet complete
 *  (e.g., items are still pending).
 *  A client of the view should wait for a CollectionEvent event
 *  with the <code>CollectionEventKind.REFRESH</code> <code>kind</code>
 *  property to ensure that the <code>refresh()</code> operation is
 *  complete.</p>
 *
 *  @asreturn <code>true</code> if the refresh() was complete,
 *  <code>false</code> if the refresh() is incomplete.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.3
 * @export
 * @return {boolean}
 */
mx.collections.ICollectionView.prototype.refresh = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.collections.ICollectionView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ICollectionView', qName: 'mx.collections.ICollectionView', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.collections.ICollectionView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'length': { type: 'int', access: 'readonly', declaredBy: 'mx.collections.ICollectionView'},
        'filterFunction': { type: 'Function', access: 'readwrite', declaredBy: 'mx.collections.ICollectionView'},
        'sort': { type: 'mx.collections.ISort', access: 'readwrite', declaredBy: 'mx.collections.ICollectionView'}
      };
    },
    methods: function () {
      return {
        'createCursor': { type: 'mx.collections.IViewCursor', declaredBy: 'mx.collections.ICollectionView'},
        'contains': { type: 'Boolean', declaredBy: 'mx.collections.ICollectionView', parameters: function () { return [ 'Object', false ]; }},
        'disableAutoUpdate': { type: 'void', declaredBy: 'mx.collections.ICollectionView'},
        'enableAutoUpdate': { type: 'void', declaredBy: 'mx.collections.ICollectionView'},
        'itemUpdated': { type: 'void', declaredBy: 'mx.collections.ICollectionView', parameters: function () { return [ 'Object', false ,'Object', true ,'Object', true ,'Object', true ]; }},
        'refresh': { type: 'Boolean', declaredBy: 'mx.collections.ICollectionView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.collections.ICollectionView.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ICollectionView.js.map

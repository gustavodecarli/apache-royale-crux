/**
 * Generated by Apache Royale Compiler from mx/core/IFlexDisplayObject.as
 * mx.core.IFlexDisplayObject
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.core.IFlexDisplayObject');
/* Royale Dependency List: org.apache.royale.core.IParent,org.apache.royale.geom.Point,XML*/

goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 */
mx.core.IFlexDisplayObject = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.core.IFlexDisplayObject', mx.core.IFlexDisplayObject);
/**  * @type {string}
 */mx.core.IFlexDisplayObject.prototype.name;
/**  * @type {org.apache.royale.core.IParent}
 */mx.core.IFlexDisplayObject.prototype.parent;
/**  * @type {boolean}
 */mx.core.IFlexDisplayObject.prototype.visible;
/**  * @type {number}
 */mx.core.IFlexDisplayObject.prototype.x;
/**  * @type {number}
 */mx.core.IFlexDisplayObject.prototype.y;
/**  * @type {number}
 */mx.core.IFlexDisplayObject.prototype.mouseX;
/**  * @type {number}
 */mx.core.IFlexDisplayObject.prototype.mouseY;
/**  * @type {number}
 */mx.core.IFlexDisplayObject.prototype.alpha;
/**  * @type {number}
 */mx.core.IFlexDisplayObject.prototype.width;
/**  * @type {number}
 */mx.core.IFlexDisplayObject.prototype.height;
/**  * @type {boolean}
 */mx.core.IFlexDisplayObject.prototype.cacheAsBitmap;
/**  * @type {Array}
 */mx.core.IFlexDisplayObject.prototype.filters;
/**
 *  @copy flash.display.DisplayObject#globalToLocal()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {org.apache.royale.geom.Point} point
 * @return {org.apache.royale.geom.Point}
 */
mx.core.IFlexDisplayObject.prototype.globalToLocal = function(point) {
};
/**
 *  @copy flash.display.DisplayObject#localToGlobal()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {org.apache.royale.geom.Point} point
 * @return {org.apache.royale.geom.Point}
 */
mx.core.IFlexDisplayObject.prototype.localToGlobal = function(point) {
};
/**  * @type {number}
 */mx.core.IFlexDisplayObject.prototype.measuredHeight;
/**  * @type {number}
 */mx.core.IFlexDisplayObject.prototype.measuredWidth;
/**
 *  Moves this object to the specified x and y coordinates.
 * 
 *  @asparam x The new x-position for this object.
 * 
 *  @asparam y The new y-position for this object.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {number} x
 * @param {number} y
 */
mx.core.IFlexDisplayObject.prototype.move = function(x, y) {
};
/**
 *  Sets the actual size of this object.
 *
 *  <p>This method is mainly for use in implementing the
 *  <code>updateDisplayList()</code> method, which is where
 *  you compute this object's actual size based on
 *  its explicit size, parent-relative (percent) size,
 *  and measured size.
 *  You then apply this actual size to the object
 *  by calling <code>setActualSize()</code>.</p>
 *
 *  <p>In other situations, you should be setting properties
 *  such as <code>width</code>, <code>height</code>,
 *  <code>percentWidth</code>, or <code>percentHeight</code>
 *  rather than calling this method.</p>
 * 
 *  @asparam newWidth The new width for this object.
 * 
 *  @asparam newHeight The new height for this object.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {number} newWidth
 * @param {number} newHeight
 */
mx.core.IFlexDisplayObject.prototype.setActualSize = function(newWidth, newHeight) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.core.IFlexDisplayObject.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IFlexDisplayObject', qName: 'mx.core.IFlexDisplayObject', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.core.IFlexDisplayObject.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'name': { type: 'String', access: 'readwrite', declaredBy: 'mx.core.IFlexDisplayObject'},
        'parent': { type: 'org.apache.royale.core.IParent', access: 'readonly', declaredBy: 'mx.core.IFlexDisplayObject'},
        'visible': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.core.IFlexDisplayObject'},
        'x': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IFlexDisplayObject'},
        'y': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IFlexDisplayObject'},
        'mouseX': { type: 'Number', access: 'readonly', declaredBy: 'mx.core.IFlexDisplayObject'},
        'mouseY': { type: 'Number', access: 'readonly', declaredBy: 'mx.core.IFlexDisplayObject'},
        'alpha': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IFlexDisplayObject'},
        'width': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IFlexDisplayObject'},
        'height': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IFlexDisplayObject'},
        'cacheAsBitmap': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.core.IFlexDisplayObject'},
        'filters': { type: 'Array', access: 'readwrite', declaredBy: 'mx.core.IFlexDisplayObject'},
        'measuredHeight': { type: 'Number', access: 'readonly', declaredBy: 'mx.core.IFlexDisplayObject'},
        'measuredWidth': { type: 'Number', access: 'readonly', declaredBy: 'mx.core.IFlexDisplayObject'}
      };
    },
    methods: function () {
      return {
        'globalToLocal': { type: 'org.apache.royale.geom.Point', declaredBy: 'mx.core.IFlexDisplayObject', parameters: function () { return [ 'org.apache.royale.geom.Point', false ]; }},
        'localToGlobal': { type: 'org.apache.royale.geom.Point', declaredBy: 'mx.core.IFlexDisplayObject', parameters: function () { return [ 'org.apache.royale.geom.Point', false ]; }},
        'move': { type: 'void', declaredBy: 'mx.core.IFlexDisplayObject', parameters: function () { return [ 'Number', false ,'Number', false ]; }},
        'setActualSize': { type: 'void', declaredBy: 'mx.core.IFlexDisplayObject', parameters: function () { return [ 'Number', false ,'Number', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.core.IFlexDisplayObject.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IFlexDisplayObject.js.map

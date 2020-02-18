/**
 * Generated by Apache Royale Compiler from mx/utils/ObjectProxy.as
 * mx.utils.ObjectProxy
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.utils.ObjectProxy');
/* Royale Dependency List: XML,org.apache.royale.utils.Language*/



/**
 *  Initializes this proxy with the specified object, id and proxy depth.
 * 
 *  @asparam item Object to proxy.
 *  If no item is specified, an anonymous object will be constructed
 *  and assigned.
 *
 *  @asparam uid String containing the unique id
 *  for this object instance.
 *  Required for IPropertyChangeNotifier compliance as every object must 
 *  provide a unique way of identifying it.
 *  If no value is specified, a random id will be assigned.
 *
 *  @asparam proxyDepth An integer indicating how many levels in a complex
 *  object graph should have a proxy created during property access.
 *  The default is -1, meaning "proxy to infinite depth".
 *  
 *  @example
 *
 *  <pre>
 *  import mx.events.PropertyChangeEvent;
 *  import mx.utils.ObjectUtil;
 *  import mx.utils.ObjectProxy;
 *  import mx.utils.StringUtil;
 *
 *  var a:Object = { name: "Tyler", age: 5, ssnum: "555-55-5555" };
 *  var p:ObjectProxy = new ObjectProxy(a);
 *  p.addEventListener(PropertyChangeEvent.PROPERTY_CHANGE, updateHandler);
 *  p.name = "Jacey";
 *  p.age = 2;
 *  delete p.ssnum;
 *
 *  // handler function
 *  function updateHandler(event:PropertyChangeEvent):void
 *  {
 *      trace(StringUtil.substitute("updateHandler('{0}', {1}, {2}, {3}, '{4}')",
 *                                     event.kind,
 *                                     event.property,
 *                                     event.oldValue,
 *                                     event.newValue,
 *                                     event.target.uid));
 *  }
 *
 *  // trace output
 *  updateHandler('opUpdate', name, Jacey, '698AF8CB-B3D9-21A3-1AFFDGHT89075CD2')
 *  updateHandler('opUpdate', age, 2, '698AF8CB-B3D9-21A3-1AFFDGHT89075CD2')
 *  updateHandler('opDelete', ssnum, null, '698AF8CB-B3D9-21A3-1AFFDGHT89075CD2')
 *  </pre>
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @param {Object=} item
 * @param {string=} uid
 * @param {number=} proxyDepth
 */
mx.utils.ObjectProxy = function(item, uid, proxyDepth) {
  item = typeof item !== 'undefined' ? item : null;
  uid = typeof uid !== 'undefined' ? uid : null;
  proxyDepth = typeof proxyDepth !== 'undefined' ? proxyDepth : -1;
  org.apache.royale.utils.Language.trace("ObjectProxy not implemented");
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.utils.ObjectProxy', mx.utils.ObjectProxy);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.utils.ObjectProxy.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ObjectProxy', qName: 'mx.utils.ObjectProxy', kind: 'class', isDynamic: true}] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.utils.ObjectProxy.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'ObjectProxy': { type: '', declaredBy: 'mx.utils.ObjectProxy', parameters: function () { return [ 'Object', true ,'String', true ,'int', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.utils.ObjectProxy.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ObjectProxy.js.map
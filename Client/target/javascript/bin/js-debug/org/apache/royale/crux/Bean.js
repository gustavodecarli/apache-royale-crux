/**
 * Generated by Apache Royale Compiler from org/apache/royale/crux/Bean.as
 * org.apache.royale.crux.Bean
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.crux.Bean');
/* Royale Dependency List: org.apache.royale.crux.IBeanFactory,org.apache.royale.crux.reflection.TypeDescriptor*/




/**
 * Constructor
 * @constructor
 * @param {*=} source
 * @param {string=} name
 * @param {org.apache.royale.crux.reflection.TypeDescriptor=} typeDescriptor
 */
org.apache.royale.crux.Bean = function(source, name, typeDescriptor) {
  source = typeof source !== 'undefined' ? source : null;
  name = typeof name !== 'undefined' ? name : null;
  typeDescriptor = typeof typeDescriptor !== 'undefined' ? typeDescriptor : null;
  this.source = source;
  this.name = name;
  this.typeDescriptor = typeDescriptor;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.crux.Bean', org.apache.royale.crux.Bean);


/**
 * @protected
 * @type {*}
 */
org.apache.royale.crux.Bean.prototype._source;


/**
 * @export
 * @type {string}
 */
org.apache.royale.crux.Bean.prototype.name;


/**
 * @export
 * @type {org.apache.royale.crux.reflection.TypeDescriptor}
 */
org.apache.royale.crux.Bean.prototype.typeDescriptor;


/**
 * @export
 * @type {org.apache.royale.crux.IBeanFactory}
 */
org.apache.royale.crux.Bean.prototype.beanFactory;


/**
 * @export
 * @type {boolean}
 */
org.apache.royale.crux.Bean.prototype.initialized = false;


/**
 * @export
 * @return {string}
 */
org.apache.royale.crux.Bean.prototype.toString = function() {
  return "Bean{ source: " + this.source + ", name: " + this.name + " }";
};


org.apache.royale.crux.Bean.prototype.get__source = function() {
  return this._source;
};


org.apache.royale.crux.Bean.prototype.set__source = function(value) {
  this._source = value;
};


org.apache.royale.crux.Bean.prototype.get__type = function() {
  return this.source;
};


Object.defineProperties(org.apache.royale.crux.Bean.prototype, /** @lends {org.apache.royale.crux.Bean.prototype} */ {
/**
  * @export
  * @type {*} */
source: {
get: org.apache.royale.crux.Bean.prototype.get__source,
set: org.apache.royale.crux.Bean.prototype.set__source},
/**
  * @export
  * @type {*} */
type: {
get: org.apache.royale.crux.Bean.prototype.get__type}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.crux.Bean.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Bean', qName: 'org.apache.royale.crux.Bean', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.crux.Bean.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'name': { type: 'String', get_set: function (/** org.apache.royale.crux.Bean */ inst, /** * */ v) {return v !== undefined ? inst.name = v : inst.name;}},
        'typeDescriptor': { type: 'org.apache.royale.crux.reflection.TypeDescriptor', get_set: function (/** org.apache.royale.crux.Bean */ inst, /** * */ v) {return v !== undefined ? inst.typeDescriptor = v : inst.typeDescriptor;}},
        'beanFactory': { type: 'org.apache.royale.crux.IBeanFactory', get_set: function (/** org.apache.royale.crux.Bean */ inst, /** * */ v) {return v !== undefined ? inst.beanFactory = v : inst.beanFactory;}},
        'initialized': { type: 'Boolean', get_set: function (/** org.apache.royale.crux.Bean */ inst, /** * */ v) {return v !== undefined ? inst.initialized = v : inst.initialized;}}
      };
    },
    accessors: function () {
      return {
        'source': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.crux.Bean'},
        'type': { type: '*', access: 'readonly', declaredBy: 'org.apache.royale.crux.Bean'}
      };
    },
    methods: function () {
      return {
        'Bean': { type: '', declaredBy: 'org.apache.royale.crux.Bean', parameters: function () { return [ '*', true ,'String', true ,'org.apache.royale.crux.reflection.TypeDescriptor', true ]; }},
        'toString': { type: 'String', declaredBy: 'org.apache.royale.crux.Bean'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.crux.Bean.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./Bean.js.map

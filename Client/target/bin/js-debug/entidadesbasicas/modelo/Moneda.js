/**
 * Generated by Apache Royale Compiler from entidadesbasicas/modelo/Moneda.as
 * entidadesbasicas.modelo.Moneda
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('entidadesbasicas.modelo.Moneda');
/* Royale Dependency List: org.apache.royale.events.ValueChangeEvent,org.apache.royale.utils.Language*/

goog.require('entidadesbasicas.modelo.base.ModeloBase');



/**
 * @constructor
 * @extends {entidadesbasicas.modelo.base.ModeloBase}
 */
entidadesbasicas.modelo.Moneda = function() {
  entidadesbasicas.modelo.Moneda.base(this, 'constructor');
};
goog.inherits(entidadesbasicas.modelo.Moneda, entidadesbasicas.modelo.base.ModeloBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('entidadesbasicas.modelo.Moneda', entidadesbasicas.modelo.Moneda);


/**
 * @export
 * @type {string}
 */
entidadesbasicas.modelo.Moneda.prototype.codigo_ = null;


/**
 * @export
 * @type {string}
 */
entidadesbasicas.modelo.Moneda.prototype.descripcion_ = null;


/**
 * @export
 * @override
 */
entidadesbasicas.modelo.Moneda.prototype.clone = function() {
  var /** @type {entidadesbasicas.modelo.Moneda} */ moneda = org.apache.royale.utils.Language.as(entidadesbasicas.modelo.Moneda.superClass_.clone.apply(this), entidadesbasicas.modelo.Moneda);
  moneda.codigo = this.codigo;
  moneda.descripcion = this.descripcion;
  return moneda;
};Object.defineProperties(entidadesbasicas.modelo.Moneda.prototype, /** @lends {entidadesbasicas.modelo.Moneda.prototype} */ {
/** @export
  * @type {string} */
codigo: {
/** @this {entidadesbasicas.modelo.Moneda} */
  get: function() {
  return this.codigo_;
  },

/** @this {entidadesbasicas.modelo.Moneda} */
set: function(value) {
if (value != this.codigo_) {
    var oldValue = this.codigo_;
    this.codigo_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codigo", oldValue, value));
}
}},/** @export
  * @type {string} */
descripcion: {
/** @this {entidadesbasicas.modelo.Moneda} */
  get: function() {
  return this.descripcion_;
  },

/** @this {entidadesbasicas.modelo.Moneda} */
set: function(value) {
if (value != this.descripcion_) {
    var oldValue = this.descripcion_;
    this.descripcion_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "descripcion", oldValue, value));
}
}}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
entidadesbasicas.modelo.Moneda.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Moneda', qName: 'entidadesbasicas.modelo.Moneda', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
entidadesbasicas.modelo.Moneda.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'codigo': { type: 'String', access: 'readwrite', declaredBy: 'entidadesbasicas.modelo.Moneda'},
        'descripcion': { type: 'String', access: 'readwrite', declaredBy: 'entidadesbasicas.modelo.Moneda'}
      };
    },
    methods: function () {
      return {
        'clone': { type: 'entidadesbasicas.modelo.Moneda', declaredBy: 'entidadesbasicas.modelo.Moneda'}
      };
    },
    metadata: function () { return [ { name: 'Bindable' } ]; }
  };
};
/**
 * @const
 * @type {number}
 */
entidadesbasicas.modelo.Moneda.prototype.ROYALE_COMPILE_FLAGS = 15;

//# sourceMappingURL=./Moneda.js.map

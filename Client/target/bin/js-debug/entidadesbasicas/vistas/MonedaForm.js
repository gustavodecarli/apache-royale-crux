/**
 * Generated by Apache Royale Compiler from entidadesbasicas/vistas/MonedaForm.mxml
 * entidadesbasicas.vistas.MonedaForm
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('entidadesbasicas.vistas.MonedaForm');
/* Royale Dependency List: org.apache.royale.binding.ContainerDataBinding,org.apache.royale.jewel.Form,org.apache.royale.jewel.FormHeading,org.apache.royale.jewel.Button,org.apache.royale.jewel.DataGrid,org.apache.royale.jewel.supportClasses.datagrid.DataGridColumn,entidadesbasicas.eventos.SeleccionarEvent,org.apache.royale.events.MouseEvent,org.apache.royale.events.ValueChangeEvent*/

goog.require('org.apache.royale.jewel.GridCell');



/**
 * @constructor
 * @extends {org.apache.royale.jewel.GridCell}
 */
entidadesbasicas.vistas.MonedaForm = function() {
  entidadesbasicas.vistas.MonedaForm.base(this, 'constructor');
  
  /**
   * @private
   * @type {org.apache.royale.binding.ContainerDataBinding}
   */
  this.$ID0_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.Form}
   */
  this.$ID6_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.FormHeading}
   */
  this.$ID1_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.Button}
   */
  this.$ID2_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.DataGrid}
   */
  this.dg_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.supportClasses.datagrid.DataGridColumn}
   */
  this.$ID3_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.supportClasses.datagrid.DataGridColumn}
   */
  this.$ID4_;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldd;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldp;

  this.generateMXMLAttributes
  ([7,
'desktopNumerator',
true,
1,
'desktopDenominator',
true,
2,
'tabletNumerator',
true,
1,
'tabletDenominator',
true,
2,
'phoneNumerator',
true,
1,
'phoneDenominator',
true,
1,
'beads',
null, [org.apache.royale.binding.ContainerDataBinding, 1, '_id', true, '$ID0', 0, 0, null],
0,
0
  ]);
  
};
goog.inherits(entidadesbasicas.vistas.MonedaForm, org.apache.royale.jewel.GridCell);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('entidadesbasicas.vistas.MonedaForm', entidadesbasicas.vistas.MonedaForm);



/**
 * @export
 * @type {entidadesbasicas.modelo.Moneda}
 */
entidadesbasicas.vistas.MonedaForm.prototype.moneda_ = null;


/**
 * @export
 * @type {org.apache.royale.collections.ArrayList}
 */
entidadesbasicas.vistas.MonedaForm.prototype.monedas_ = null;


/**
 * @export
 * @param {org.apache.royale.collections.ArrayList} val
 */
entidadesbasicas.vistas.MonedaForm.prototype.setMonedas = function(val) {
  this.monedas = val;
  this.dg.dataProvider = val;
};


/**
 * @export
 * @param {entidadesbasicas.modelo.Moneda} val
 */
entidadesbasicas.vistas.MonedaForm.prototype.setUser = function(val) {
  this.moneda = val;
};


/**
 * Handle the user hitting the save button. We capture the form data
 * and dispatch a standard Flex event. No Crux-specific events or
 * special central dispatcher needed!
 * @private
 * @param {org.apache.royale.events.Event} e
 */
entidadesbasicas.vistas.MonedaForm.prototype.entidadesbasicas_vistas_MonedaForm_onClick = function(e) {
  var /** @type {entidadesbasicas.eventos.SeleccionarEvent} */ event = new entidadesbasicas.eventos.SeleccionarEvent(entidadesbasicas.eventos.SeleccionarEvent.SELECCIONAR);
  this.dispatchEvent(event);
};


Object.defineProperties(entidadesbasicas.vistas.MonedaForm.prototype, /** @lends {entidadesbasicas.vistas.MonedaForm.prototype} */ {
/** @export
  * @type {entidadesbasicas.modelo.Moneda} */
moneda: {
/** @this {entidadesbasicas.vistas.MonedaForm} */
  get: function() {
  return this.moneda_;
  },

/** @this {entidadesbasicas.vistas.MonedaForm} */
set: function(value) {
if (value != this.moneda_) {
    var oldValue = this.moneda_;
    this.moneda_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "moneda", oldValue, value));
}
}},/** @export
  * @type {org.apache.royale.collections.ArrayList} */
monedas: {
/** @this {entidadesbasicas.vistas.MonedaForm} */
  get: function() {
  return this.monedas_;
  },

/** @this {entidadesbasicas.vistas.MonedaForm} */
set: function(value) {
if (value != this.monedas_) {
    var oldValue = this.monedas_;
    this.monedas_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "monedas", oldValue, value));
}
}}}
);/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
entidadesbasicas.vistas.MonedaForm.prototype.$EH0 = function(event)
{
  this.entidadesbasicas_vistas_MonedaForm_onClick(event);
};


Object.defineProperties(entidadesbasicas.vistas.MonedaForm.prototype, /** @lends {entidadesbasicas.vistas.MonedaForm.prototype} */ {
/** @export */
    dg: {
    /** @this {entidadesbasicas.vistas.MonedaForm} */
    get: function() {
      return this.dg_;
    },
    /** @this {entidadesbasicas.vistas.MonedaForm} */
    set: function(value) {
      if (value != this.dg_) {
        this.dg_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'dg', null, value));
      }
    }
  },
  'MXMLDescriptor': {
    /** @this {entidadesbasicas.vistas.MonedaForm} */
    get: function() {
      {
        if (this.mxmldd == undefined)
        {
          /** @type {Array} */
          var arr = entidadesbasicas.vistas.MonedaForm.superClass_.get__MXMLDescriptor.apply(this);
          /** @type {Array} */
          var data = [
      org.apache.royale.jewel.Form,
1,
'_id',
true,
'$ID6',
0,
0,
[org.apache.royale.jewel.FormHeading, 2, '_id', true, '$ID1', 'label', true, 'Crux + Remote Object + Jewel', 0, 0, null, org.apache.royale.jewel.Button, 2, '_id', true, '$ID2', 'text', true, 'Click me', 0, 1, 'click', this.$EH0, null, org.apache.royale.jewel.DataGrid, 5, '_id', true, 'dg', 'width', true, 400, 'height', true, 500, 'emphasis', true, 'primary', 'columns', null, [org.apache.royale.jewel.supportClasses.datagrid.DataGridColumn, 4, '_id', true, '$ID3', 'label', true, 'Codigo', 'dataField', true, 'codigo', 'columnWidth', true, 200, 0, 0, null, org.apache.royale.jewel.supportClasses.datagrid.DataGridColumn, 4, '_id', true, '$ID4', 'label', true, 'Descripcion', 'dataField', true, 'descripcion', 'columnWidth', true, 200, 0, 0, null], 0, 0, null]
      ];
        
          if (arr)
            this.mxmldd = arr.concat(data);
          else
            this.mxmldd = data;
        }
        return this.mxmldd;
      }
      }
    }
  });
  /**
   * Metadata
   *
   * @type {Object.<string, Array.<Object>>}
   */
  entidadesbasicas.vistas.MonedaForm.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MonedaForm', qName: 'entidadesbasicas.vistas.MonedaForm', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
entidadesbasicas.vistas.MonedaForm.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'monedas': { type: 'org.apache.royale.collections.ArrayList', access: 'readwrite', declaredBy: 'entidadesbasicas.vistas.MonedaForm', metadata: function () { return [ { name: 'Bindable' } ]; }},
        'moneda': { type: 'entidadesbasicas.modelo.Moneda', access: 'readwrite', declaredBy: 'entidadesbasicas.vistas.MonedaForm', metadata: function () { return [ { name: 'Bindable' } ]; }}
      };
    },
    methods: function () {
      return {
        'setMonedas': { type: 'void', declaredBy: 'entidadesbasicas.vistas.MonedaForm', parameters: function () { return [ 'org.apache.royale.collections.ArrayList', false ]; }, metadata: function () { return [ { name: 'Inject', args: [ { key: 'source', value: 'userController.models' }, { key: 'bind', value: 'true' } ] } ]; }},
        'setUser': { type: 'void', declaredBy: 'entidadesbasicas.vistas.MonedaForm', parameters: function () { return [ 'entidadesbasicas.modelo.Moneda', false ]; }, metadata: function () { return [ { name: 'Inject', args: [ { key: 'source', value: 'userController.currentModelo' }, { key: 'bind', value: 'true' } ] } ]; }},
        'MonedaForm': { type: '', declaredBy: 'entidadesbasicas.vistas.MonedaForm'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
entidadesbasicas.vistas.MonedaForm.prototype.ROYALE_COMPILE_FLAGS = 15;
goog.exportProperty(entidadesbasicas.vistas.MonedaForm.prototype, 'setMonedas', entidadesbasicas.vistas.MonedaForm.prototype.setMonedas);
goog.exportProperty(entidadesbasicas.vistas.MonedaForm.prototype, 'setUser', entidadesbasicas.vistas.MonedaForm.prototype.setUser);

  
  
//# sourceMappingURL=./MonedaForm.js.map

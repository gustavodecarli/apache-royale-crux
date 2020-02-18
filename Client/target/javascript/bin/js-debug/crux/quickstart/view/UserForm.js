/**
 * Generated by Apache Royale Compiler from crux/quickstart/view/UserForm.mxml
 * crux.quickstart.view.UserForm
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('crux.quickstart.view.UserForm');
/* Royale Dependency List: org.apache.royale.binding.ContainerDataBinding,org.apache.royale.jewel.Form,org.apache.royale.jewel.FormHeading,org.apache.royale.jewel.FormItem,org.apache.royale.jewel.Label,org.apache.royale.jewel.TextInput,org.apache.royale.jewel.Button,crux.quickstart.event.UserEvent,org.apache.royale.events.MouseEvent,org.apache.royale.events.ValueChangeEvent*/

goog.require('org.apache.royale.jewel.GridCell');



/**
 * @constructor
 * @extends {org.apache.royale.jewel.GridCell}
 */
crux.quickstart.view.UserForm = function() {
  crux.quickstart.view.UserForm.base(this, 'constructor');
  
  /**
   * @private
   * @type {org.apache.royale.binding.ContainerDataBinding}
   */
  this.$ID0_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.Form}
   */
  this.$ID9_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.FormHeading}
   */
  this.$ID1_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.FormItem}
   */
  this.$ID3_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.Label}
   */
  this.userId_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.FormItem}
   */
  this.$ID4_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.TextInput}
   */
  this.firstName_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.FormItem}
   */
  this.$ID5_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.TextInput}
   */
  this.lastName_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.FormItem}
   */
  this.$ID6_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.TextInput}
   */
  this.email_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.FormItem}
   */
  this.$ID8_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.Button}
   */
  this.$ID7_;
  
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

  this.generateMXMLAttributes([
    7,
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
    null,
    [
      org.apache.royale.binding.ContainerDataBinding,
      1,
      '_id',
      true,
      '$ID0',
      0,
      0,
      null
    ],
    0,
    0
  ]);
  
};
goog.inherits(crux.quickstart.view.UserForm, org.apache.royale.jewel.GridCell);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('crux.quickstart.view.UserForm', crux.quickstart.view.UserForm);



/**
 * @export
 * @type {crux.quickstart.model.User}
 */
crux.quickstart.view.UserForm.prototype.user_ = null;


/**
 * @export
 * @param {crux.quickstart.model.User} val
 */
crux.quickstart.view.UserForm.prototype.setUser = function(val) {
  this.user = val;
};


/**
 * Handle the user hitting the save button. We capture the form data
 * and dispatch a standard Flex event. No Crux-specific events or
 * special central dispatcher needed!
 * @private
 */
crux.quickstart.view.UserForm.prototype.crux_quickstart_view_UserForm_saveUser = function() {
  this.user.firstName = this.firstName.text;
  this.user.lastName = this.lastName.text;
  this.user.email = this.email.text;
  var /** @type {crux.quickstart.event.UserEvent} */ event = new crux.quickstart.event.UserEvent(crux.quickstart.event.UserEvent.SAVE_USER_REQUESTED);
  event.user = this.user;
  this.dispatchEvent(event);
};


Object.defineProperties(crux.quickstart.view.UserForm.prototype, /** @lends {crux.quickstart.view.UserForm.prototype} */ {
/** @export
  * @type {crux.quickstart.model.User} */
user: {
/** @this {crux.quickstart.view.UserForm} */
  get: function() {
  return this.user_;
  },

/** @this {crux.quickstart.view.UserForm} */
set: function(value) {
if (value != this.user_) {
    var oldValue = this.user_;
    this.user_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "user", oldValue, value));
}
}}}
);/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
crux.quickstart.view.UserForm.prototype.$EH0 = function(event)
{
  this.crux_quickstart_view_UserForm_saveUser();
};


Object.defineProperties(crux.quickstart.view.UserForm.prototype, /** @lends {crux.quickstart.view.UserForm.prototype} */ {
/** @export */
    userId: {
    /** @this {crux.quickstart.view.UserForm} */
    get: function() {
      return this.userId_;
    },
    /** @this {crux.quickstart.view.UserForm} */
    set: function(value) {
      if (value != this.userId_) {
        this.userId_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'userId', null, value));
      }
    }
  },
  /** @export */
    firstName: {
    /** @this {crux.quickstart.view.UserForm} */
    get: function() {
      return this.firstName_;
    },
    /** @this {crux.quickstart.view.UserForm} */
    set: function(value) {
      if (value != this.firstName_) {
        this.firstName_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'firstName', null, value));
      }
    }
  },
  /** @export */
    lastName: {
    /** @this {crux.quickstart.view.UserForm} */
    get: function() {
      return this.lastName_;
    },
    /** @this {crux.quickstart.view.UserForm} */
    set: function(value) {
      if (value != this.lastName_) {
        this.lastName_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'lastName', null, value));
      }
    }
  },
  /** @export */
    email: {
    /** @this {crux.quickstart.view.UserForm} */
    get: function() {
      return this.email_;
    },
    /** @this {crux.quickstart.view.UserForm} */
    set: function(value) {
      if (value != this.email_) {
        this.email_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'email', null, value));
      }
    }
  },
  'MXMLDescriptor': {
    /** @this {crux.quickstart.view.UserForm} */
    get: function() {
      if (this.mxmldd == undefined)
      {
        /** @type {Array} */
        var arr = crux.quickstart.view.UserForm.superClass_.get__MXMLDescriptor.apply(this);
        /** @type {Array} */
        var data = [
          org.apache.royale.jewel.Form,
          1,
          '_id',
          true,
          '$ID9',
          0,
          0,
          [
            org.apache.royale.jewel.FormHeading,
            2,
            '_id',
            true,
            '$ID1',
            'label',
            true,
            'User Form (Crux Quickstart Example)',
            0,
            0,
            null,
            org.apache.royale.jewel.FormItem,
            2,
            '_id',
            true,
            '$ID3',
            'label',
            true,
            'User ID: ',
            0,
            0,
            [
              org.apache.royale.jewel.Label,
              1,
              '_id',
              true,
              'userId',
              0,
              0,
              null
            ],
            org.apache.royale.jewel.FormItem,
            2,
            '_id',
            true,
            '$ID4',
            'label',
            true,
            'First Name: ',
            0,
            0,
            [
              org.apache.royale.jewel.TextInput,
              1,
              'id',
              true,
              'firstName',
              0,
              0,
              null
            ],
            org.apache.royale.jewel.FormItem,
            2,
            '_id',
            true,
            '$ID5',
            'label',
            true,
            'Last Name: ',
            0,
            0,
            [
              org.apache.royale.jewel.TextInput,
              1,
              'id',
              true,
              'lastName',
              0,
              0,
              null
            ],
            org.apache.royale.jewel.FormItem,
            2,
            '_id',
            true,
            '$ID6',
            'label',
            true,
            'Email: ',
            0,
            0,
            [
              org.apache.royale.jewel.TextInput,
              1,
              'id',
              true,
              'email',
              0,
              0,
              null
            ],
            org.apache.royale.jewel.FormItem,
            1,
            '_id',
            true,
            '$ID8',
            0,
            0,
            [
              org.apache.royale.jewel.Button,
              3,
              '_id',
              true,
              '$ID7',
              'text',
              true,
              'Save',
              'emphasis',
              true,
              'primary',
              0,
              1,
              'click',
this.$EH0,
              null
            ]
          ]
        ];
        if (arr)
          this.mxmldd = arr.concat(data);
        else
          this.mxmldd = data;
      }
      return this.mxmldd;
    }
  }
});
/**
 * @export
 */
crux.quickstart.view.UserForm.prototype._bindings = [
4,
function() { return isNaN(this.user.id) ? 'N/A' : this.user.id; },
null,
["userId", "text"],
["user", "firstName"],
null,
["firstName", "text"],
["user", "lastName"],
null,
["lastName", "text"],
["user", "email"],
null,
["email", "text"],
0,
2,
"user",
"valueChange",
[0,0,1,2,3],
null,
[
1,
2,
"id",
"valueChange",
[0,0],
null,
null,
2,
2,
"firstName",
"valueChange",
1,
null,
null,
3,
2,
"lastName",
"valueChange",
2,
null,
null,
4,
2,
"email",
"valueChange",
3,
null,
null,
null]];
/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
crux.quickstart.view.UserForm.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'UserForm', qName: 'crux.quickstart.view.UserForm', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
crux.quickstart.view.UserForm.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'user': { type: 'crux.quickstart.model.User', access: 'readwrite', declaredBy: 'crux.quickstart.view.UserForm', metadata: function () { return [ { name: 'Bindable' } ]; }},
        'firstName': { type: 'org.apache.royale.jewel.TextInput', access: 'readwrite', declaredBy: 'crux.quickstart.view.UserForm'},
        'lastName': { type: 'org.apache.royale.jewel.TextInput', access: 'readwrite', declaredBy: 'crux.quickstart.view.UserForm'},
        'email': { type: 'org.apache.royale.jewel.TextInput', access: 'readwrite', declaredBy: 'crux.quickstart.view.UserForm'}
      };
    },
    methods: function () {
      return {
        'setUser': { type: 'void', declaredBy: 'crux.quickstart.view.UserForm', parameters: function () { return [ 'crux.quickstart.model.User', false ]; }, metadata: function () { return [ { name: 'Inject', args: [ { key: 'source', value: 'userController.currentUser' }, { key: 'bind', value: 'true' } ] } ]; }},
        'UserForm': { type: '', declaredBy: 'crux.quickstart.view.UserForm'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
crux.quickstart.view.UserForm.prototype.ROYALE_COMPILE_FLAGS = 15;
goog.exportProperty(crux.quickstart.view.UserForm.prototype, 'setUser', crux.quickstart.view.UserForm.prototype.setUser);



//# sourceMappingURL=./UserForm.js.map
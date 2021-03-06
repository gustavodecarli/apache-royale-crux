/**
 * Generated by Apache Royale Compiler from org/apache/royale/net/remoting/amf/AMFNetConnection.as
 * org.apache.royale.net.remoting.amf.AMFNetConnection
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.net.remoting.amf.AMFNetConnection');
/* Royale Dependency List: org.apache.royale.net.Responder,org.apache.royale.net.remoting.amf.AMFBinaryData,org.apache.royale.net.remoting.messages.ActionMessage,org.apache.royale.net.remoting.messages.MessageBody,org.apache.royale.net.remoting.messages.MessageHeader,org.apache.royale.utils.Language*/




/**
 *  Constructor
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3
 * @constructor
 */
org.apache.royale.net.remoting.amf.AMFNetConnection = function() {
  
  this.org_apache_royale_net_remoting_amf_AMFNetConnection_callPool = [];
  this.org_apache_royale_net_remoting_amf_AMFNetConnection_requestQueue = [];
  ;
  
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.net.remoting.amf.AMFNetConnection', org.apache.royale.net.remoting.amf.AMFNetConnection);


/**
 * @private
 * @const
 * @type {number}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.UNKNOWN_CONTENT_LENGTH = 1;


/**
 * @private
 * @const
 * @type {number}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.AMF0_BOOLEAN = 1;


/**
 * @private
 * @const
 * @type {string}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.NULL_STRING = "null";


/**
 * @private
 * @const
 * @type {number}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.AMF0_AMF3 = 17;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.errorClass;


/**
 * @private
 * @type {string}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_url;


/**
 * @private
 * @type {number}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_callPoolSize = 6;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_callPool;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_requestQueue;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_queueBlocked;


/**
 * @private
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection__processQueue = function() {
  var /** @type {number} */ i = 0, /** @type {Object} */ call;
  //var /** @type {number} */ i = 0, /** @type {Object} */ call;
  if (this.org_apache_royale_net_remoting_amf_AMFNetConnection_queueBlocked) {
    return;
  }
  for (i = 0; i < this.org_apache_royale_net_remoting_amf_AMFNetConnection_callPoolSize && this.org_apache_royale_net_remoting_amf_AMFNetConnection_requestQueue.length > 0; i++) {
    if (this.org_apache_royale_net_remoting_amf_AMFNetConnection_callPool.length == i) {
      call = {xhr:new XMLHttpRequest(), busy:false, item:null};
      call.xhr.onreadystatechange = this.org_apache_royale_net_remoting_amf_AMFNetConnection_getReadyStateCallback(call);
      if (this.org_apache_royale_net_remoting_amf_AMFNetConnection_callPoolSize > 1) {
        this.org_apache_royale_net_remoting_amf_AMFNetConnection_callPool.push(call);
      }
    } else {
      call = this.org_apache_royale_net_remoting_amf_AMFNetConnection_callPool[i];
    }
    if (!call.busy) {
      this.org_apache_royale_net_remoting_amf_AMFNetConnection__processCallItem(call);
      if (this.org_apache_royale_net_remoting_amf_AMFNetConnection_sequence == 1 || this.org_apache_royale_net_remoting_amf_AMFNetConnection_queueBlocked) {
        return;
      }
    }
  }
};


/**
 * @private
 * @param {Object} call
 * @return {Function}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_getReadyStateCallback = function(call) {
  var self = this;
  return function() {
    self.org_apache_royale_net_remoting_amf_AMFNetConnection_onReadyStateChange(call);
  };
};


/**
 * @private
 * @param {Object} call
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection__processCallItem = function(call) {
  call.busy = true;
  
/**
 * @const
 * @type {Object}
 */
var requestItem = this.org_apache_royale_net_remoting_amf_AMFNetConnection_requestQueue.shift();
  call.item = requestItem;
  call.xhr.open("POST", requestItem.url, true);
};


/**
 * @private
 * @param {Object} call
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection__relinquishCall = function(call) {
  call.busy = false;
  call.item = null;
};


/**
 * @private
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection__startQueue = function() {
  setTimeout(org.apache.royale.utils.Language.closure(this.org_apache_royale_net_remoting_amf_AMFNetConnection__processQueue, this, '_processQueue'), 1);
};


/**
 *  Connect to a server.  Pass in an http URL as the commmand for
 *  connection to AMF server.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3
 * @export
 * @param {string} command
 * @param {...} params
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.connect = function(command, params) {
  params = Array.prototype.slice.call(arguments, 1);
  this.org_apache_royale_net_remoting_amf_AMFNetConnection_url = command;
  
};


/**
 *  Call a server function.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3
 * @export
 * @param {string} command
 * @param {org.apache.royale.net.Responder} responder
 * @param {...} params
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.call = function(command, responder, params) {
  params = Array.prototype.slice.call(arguments, 2);
  
  this.org_apache_royale_net_remoting_amf_AMFNetConnection_requestQueue.push({url:this.org_apache_royale_net_remoting_amf_AMFNetConnection_url, responder:responder, args:params});
  this.org_apache_royale_net_remoting_amf_AMFNetConnection__startQueue();
};


/**
 * @private
 * @type {number}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_sequence = 0;


/**
 * @royaleignorecoercion Array
 * @private
 * @param {Object} call
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_onReadyStateChange = function(call) {
  var /** @type {XMLHttpRequest} */ xhr = call.xhr;
  var /** @type {org.apache.royale.net.Responder} */ responder = call.item.responder;
  var /** @type {Array} */ args = call.item.args;
  var /** @type {number} */ readyState = (xhr.readyState) >> 0;
  if (readyState === 1) {
    xhr.setRequestHeader("Content-Type", "application/x-amf");
    xhr.responseType = "arraybuffer";
    var /** @type {org.apache.royale.net.remoting.messages.ActionMessage} */ actionMessage = new org.apache.royale.net.remoting.messages.ActionMessage();
    var /** @type {org.apache.royale.net.remoting.messages.MessageBody} */ messageBody = new org.apache.royale.net.remoting.messages.MessageBody();
    this.org_apache_royale_net_remoting_amf_AMFNetConnection_sequence++;
    messageBody.responseURI = "/" + this.org_apache_royale_net_remoting_amf_AMFNetConnection_sequence.toString();
    messageBody.data = args;
    actionMessage.bodies = [messageBody];
    var /** @type {org.apache.royale.net.remoting.amf.AMFBinaryData} */ binaryData = new org.apache.royale.net.remoting.amf.AMFBinaryData();
    this.org_apache_royale_net_remoting_amf_AMFNetConnection_writeMessage(binaryData, actionMessage);
    xhr.send(new Uint8Array(binaryData.data));
  } else if (readyState === 4) {
    try {
      if (xhr.status >= 200 && xhr.status <= 300 && xhr.responseType == "arraybuffer" && xhr.getResponseHeader("Content-type").indexOf("application/x-amf") > -1) {
        var /** @type {org.apache.royale.net.remoting.messages.ActionMessage} */ message;
        var /** @type {org.apache.royale.net.remoting.messages.MessageBody} */ body;
        this.org_apache_royale_net_remoting_amf_AMFNetConnection__relinquishCall(call);
        var /** @type {org.apache.royale.net.remoting.amf.AMFBinaryData} */ deserializer = new org.apache.royale.net.remoting.amf.AMFBinaryData(xhr.response);
        try {
          message = org.apache.royale.utils.Language.as(this.org_apache_royale_net_remoting_amf_AMFNetConnection_readMessage(deserializer), org.apache.royale.net.remoting.messages.ActionMessage);
        } catch (e) {
          responder.onFailure({code:-1001, message:"Failed decoding the response.", detail:null, data:null});
          if (this.org_apache_royale_net_remoting_amf_AMFNetConnection_requestQueue.length)
            this.org_apache_royale_net_remoting_amf_AMFNetConnection__processQueue();
          return;
        }
        var /** @type {number} */ l = (message.bodies.length) >>> 0;
        for (var /** @type {number} */ i = 0; i < l; i++) {
          body = message.bodies[i];
          if (!org.apache.royale.utils.Language.is(body.data, this.errorClass))
            responder.onSuccess(body.data);
          else
            responder.onFailure(body.data);
        }
      } else if (xhr.status == 0 || xhr.responseType == "text") {
        this.org_apache_royale_net_remoting_amf_AMFNetConnection__relinquishCall(call);
        responder.onFailure({code:-1004, message:"Invalid response type.", detail:"Invalid XMLHttpRequest response status or type.", data:null});
      } else {
        this.org_apache_royale_net_remoting_amf_AMFNetConnection__relinquishCall(call);
        responder.onFailure({code:-1005, message:"Invalid response.", detail:"", data:null});
      }
    } catch (e) {
      this.org_apache_royale_net_remoting_amf_AMFNetConnection__relinquishCall(call);
      responder.onFailure({code:-1006, message:"Unknown error.", detail:e.message, data:null});
    }
    if (this.org_apache_royale_net_remoting_amf_AMFNetConnection_requestQueue.length)
      this.org_apache_royale_net_remoting_amf_AMFNetConnection__processQueue();
  }
};


/**
 * @private
 * @param {org.apache.royale.net.remoting.amf.AMFBinaryData} writer
 * @param {org.apache.royale.net.remoting.messages.ActionMessage} message
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_writeMessage = function(writer, message) {
  var /** @type {number} */ i = 0;
  try {
    writer.writeShort(message.version);
    var /** @type {number} */ l = (message.headers.length) >>> 0;
    writer.writeShort((l) >> 0);
    //var /** @type {number} */ i = 0;
    for (i = 0; i < l; i++) {
      this.org_apache_royale_net_remoting_amf_AMFNetConnection_writeHeader(writer, message.headers[i]);
    }
    l = (message.bodies.length) >>> 0;
    writer.writeShort((l) >> 0);
    for (i = 0; i < l; i++) {
      this.org_apache_royale_net_remoting_amf_AMFNetConnection_writeBody(writer, message.bodies[i]);
    }
  } catch (e) {
    console.log(e);
  }
};


/**
 * @private
 * @param {org.apache.royale.net.remoting.amf.AMFBinaryData} writer
 * @param {org.apache.royale.net.remoting.messages.MessageHeader} header
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_writeHeader = function(writer, header) {
  writer.writeUTF(header.name);
  writer.writeBoolean(header.mustUnderstand);
  writer.writeInt(org.apache.royale.net.remoting.amf.AMFNetConnection.UNKNOWN_CONTENT_LENGTH);
  org.apache.royale.utils.Language.trace('not sending header data:', header.data);
  writer.writeByte(org.apache.royale.net.remoting.amf.AMFNetConnection.AMF0_BOOLEAN);
  writer.writeBoolean(true);
};


/**
 * @private
 * @param {org.apache.royale.net.remoting.amf.AMFBinaryData} writer
 * @param {org.apache.royale.net.remoting.messages.MessageBody} body
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_writeBody = function(writer, body) {
  if (body.targetURI == null) {
    writer.writeUTF(org.apache.royale.net.remoting.amf.AMFNetConnection.NULL_STRING);
  } else {
    writer.writeUTF(body.targetURI);
  }
  if (body.responseURI == null) {
    writer.writeUTF(org.apache.royale.net.remoting.amf.AMFNetConnection.NULL_STRING);
  } else {
    writer.writeUTF(body.responseURI);
  }
  writer.writeInt(org.apache.royale.net.remoting.amf.AMFNetConnection.UNKNOWN_CONTENT_LENGTH);
  writer.writeByte(org.apache.royale.net.remoting.amf.AMFNetConnection.AMF0_AMF3);
  writer.writeObject(body.data);
};


/**
 * @private
 * @param {org.apache.royale.net.remoting.amf.AMFBinaryData} reader
 * @return {org.apache.royale.net.remoting.messages.ActionMessage}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_readMessage = function(reader) {
  var /** @type {org.apache.royale.net.remoting.messages.ActionMessage} */ message = new org.apache.royale.net.remoting.messages.ActionMessage();
  message.version = (reader.readUnsignedShort()) >> 0;
  var /** @type {number} */ headerCount = reader.readUnsignedShort();
  for (var /** @type {number} */ i = 0; i < headerCount; i++) {
    message.headers.push(this.org_apache_royale_net_remoting_amf_AMFNetConnection_readHeader(reader));
  }
  var /** @type {number} */ bodyCount = reader.readUnsignedShort();
  for (i = 0; i < bodyCount; i++) {
    message.bodies.push(this.org_apache_royale_net_remoting_amf_AMFNetConnection_readBody(reader));
  }
  return message;
};


/**
 * @private
 * @param {org.apache.royale.net.remoting.amf.AMFBinaryData} reader
 * @return {org.apache.royale.net.remoting.messages.MessageHeader}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_readHeader = function(reader) {
  var /** @type {org.apache.royale.net.remoting.messages.MessageHeader} */ header = new org.apache.royale.net.remoting.messages.MessageHeader();
  header.name = reader.readUTF();
  header.mustUnderstand = reader.readBoolean();
  var /** @type {number} */ len = reader.readUnsignedInt();
  var /** @type {number} */ type = reader.readUnsignedByte();
  if (type != 2) {
    throw "Only string header data supported.";
  }
  header.data = reader.readUTF();
  return header;
};


/**
 * @private
 * @param {org.apache.royale.net.remoting.amf.AMFBinaryData} reader
 * @return {org.apache.royale.net.remoting.messages.MessageBody}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.org_apache_royale_net_remoting_amf_AMFNetConnection_readBody = function(reader) {
  var /** @type {org.apache.royale.net.remoting.messages.MessageBody} */ body = new org.apache.royale.net.remoting.messages.MessageBody();
  body.targetURI = reader.readUTF();
  body.responseURI = reader.readUTF();
  var /** @type {number} */ len = reader.readUnsignedInt();
  body.data = reader.readObject();
  return body;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AMFNetConnection', qName: 'org.apache.royale.net.remoting.amf.AMFNetConnection', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'errorClass': { type: 'Class', get_set: function (/** org.apache.royale.net.remoting.amf.AMFNetConnection */ inst, /** * */ v) {return v !== undefined ? inst.errorClass = v : inst.errorClass;}}
      };
    },
    methods: function () {
      return {
        'AMFNetConnection': { type: '', declaredBy: 'org.apache.royale.net.remoting.amf.AMFNetConnection'},
        'connect': { type: 'void', declaredBy: 'org.apache.royale.net.remoting.amf.AMFNetConnection', parameters: function () { return [ 'String', false ,'Array', false ]; }},
        'call': { type: 'void', declaredBy: 'org.apache.royale.net.remoting.amf.AMFNetConnection', parameters: function () { return [ 'String', false ,'org.apache.royale.net.Responder', false ,'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.net.remoting.amf.AMFNetConnection.prototype.ROYALE_COMPILE_FLAGS = 10;

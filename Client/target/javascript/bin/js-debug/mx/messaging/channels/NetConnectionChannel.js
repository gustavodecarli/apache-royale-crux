/**
 * Generated by Apache Royale Compiler from mx/messaging/channels/NetConnectionChannel.as
 * mx.messaging.channels.NetConnectionChannel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.channels.NetConnectionChannel');
/* Royale Dependency List: mx.core.mx_internal,mx.events.AsyncErrorEvent,mx.events.ErrorEvent,mx.events.IOErrorEvent,mx.events.NetStatusEvent,mx.events.SecurityErrorEvent,mx.logging.Log,mx.messaging.MessageAgent,mx.messaging.config.LoaderConfig,mx.messaging.events.ChannelEvent,mx.messaging.events.ChannelFaultEvent,mx.messaging.events.MessageEvent,mx.messaging.messages.AcknowledgeMessage,mx.messaging.messages.AsyncMessage,mx.messaging.messages.ErrorMessage,mx.messaging.messages.IMessage,mx.messaging.messages.ISmallMessage,mx.messaging.messages.MessagePerformanceInfo,mx.messaging.messages.MessagePerformanceUtils,mx.net.NetConnection,mx.net.ObjectEncoding,mx.netmon.NetworkMonitor,mx.resources.IResourceManager,mx.resources.ResourceManager,org.apache.royale.events.Event,org.apache.royale.utils.Language,XML*/
goog.provide('mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder');

goog.require('mx.messaging.MessageResponder');
goog.require('mx.messaging.channels.PollingChannel');



/**
 *  Creates a new NetConnectionChannel instance.
 *  <p>
 *  The underlying NetConnection's <code>objectEncoding</code>
 *  is set to <code>ObjectEncoding.AMF3</code> by default. It can be
 *  changed manually by accessing the channel's <code>netConnection</code>
 *  property. The global <code>NetConnection.defaultObjectEncoding</code>
 *  setting is not honored by this channel.
 *  </p>
 *
 *  @asparam id The id of this Channel.
 *
 *  @asparam uri The uri for this Channel.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 * @extends {mx.messaging.channels.PollingChannel}
 * @param {string=} id
 * @param {string=} uri
 */
mx.messaging.channels.NetConnectionChannel = function(id, uri) {
  id = typeof id !== 'undefined' ? id : null;
  uri = typeof uri !== 'undefined' ? uri : null;
  mx.messaging.channels.NetConnectionChannel.base(this, 'constructor', id, uri);
  this._nc = new mx.net.NetConnection();
  this._nc.objectEncoding = mx.net.ObjectEncoding.AMF3;
  this._nc.client = this;
};
goog.inherits(mx.messaging.channels.NetConnectionChannel, mx.messaging.channels.PollingChannel);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.channels.NetConnectionChannel', mx.messaging.channels.NetConnectionChannel);


/**
 * @type {string}
 */
mx.messaging.channels.NetConnectionChannel.prototype.http_$$www_adobe_com$2006$flex$mx$internal___appendToURL;


/**
 * @protected
 * @type {mx.net.NetConnection}
 */
mx.messaging.channels.NetConnectionChannel.prototype._nc;


/**
 *  @asprivate
 * @protected
 * @override
 */
mx.messaging.channels.NetConnectionChannel.prototype.connectTimeoutHandler = function(event) {
  this.shutdownNetConnection();
  mx.messaging.channels.NetConnectionChannel.superClass_.connectTimeoutHandler.apply(this, [ event] );
};


/**
 *  @asprivate
 * @protected
 * @override
 */
mx.messaging.channels.NetConnectionChannel.prototype.getDefaultMessageResponder = function(agent, msg) {
  return new mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder(agent, msg, this);
};


/**
 *  @asprivate
 * @protected
 * @override
 */
mx.messaging.channels.NetConnectionChannel.prototype.internalDisconnect = function(rejected) {
  rejected = typeof rejected !== 'undefined' ? rejected : false;
  mx.messaging.channels.NetConnectionChannel.superClass_.internalDisconnect.apply(this, [ rejected] );
  this.shutdownNetConnection();
  this.disconnectSuccess(rejected);
};


/**
 *  @asprivate
 * @protected
 * @override
 */
mx.messaging.channels.NetConnectionChannel.prototype.internalConnect = function() {
  mx.messaging.channels.NetConnectionChannel.superClass_.internalConnect.apply(this);
  var /** @type {string} */ url = this.endpoint;
  if (this.http_$$www_adobe_com$2006$flex$mx$internal___appendToURL != null) {
    var /** @type {number} */ i = (url.indexOf("wsrp-url=")) >> 0;
    if (i != -1) {
      var /** @type {string} */ temp = url.substr(i + 9, url.length);
      var /** @type {number} */ j = (temp.indexOf("&")) >> 0;
      if (j != -1) {
        temp = temp.substr(0, j);
      }
      url = url.replace(temp, temp + this.http_$$www_adobe_com$2006$flex$mx$internal___appendToURL);
    } else {
      url += this.http_$$www_adobe_com$2006$flex$mx$internal___appendToURL;
    }
  }
  if (this._nc.uri != null && this._nc.uri.length > 0 && this._nc.connected) {
    this._nc.removeEventListener(mx.events.NetStatusEvent.NET_STATUS, org.apache.royale.utils.Language.closure(this.statusHandler, this, 'statusHandler'));
    this._nc.close();
  }
  if ("httpIdleTimeout" in this._nc && this.requestTimeout > 0)
    this._nc["httpIdleTimeout"] = this.requestTimeout * 1000;
  this._nc.addEventListener(mx.events.NetStatusEvent.NET_STATUS, org.apache.royale.utils.Language.closure(this.statusHandler, this, 'statusHandler'));
  this._nc.addEventListener(mx.events.SecurityErrorEvent.SECURITY_ERROR, org.apache.royale.utils.Language.closure(this.securityErrorHandler, this, 'securityErrorHandler'));
  this._nc.addEventListener(mx.events.IOErrorEvent.IO_ERROR, org.apache.royale.utils.Language.closure(this.ioErrorHandler, this, 'ioErrorHandler'));
  this._nc.addEventListener(mx.events.AsyncErrorEvent.ASYNC_ERROR, org.apache.royale.utils.Language.closure(this.asyncErrorHandler, this, 'asyncErrorHandler'));
  try {
    if (mx.netmon.NetworkMonitor.isMonitoring()) {
      var /** @type {string} */ redirectedUrl = mx.netmon.NetworkMonitor.adjustNetConnectionURL(mx.messaging.config.LoaderConfig["url"], url);
      if (redirectedUrl != null) {
        url = redirectedUrl;
      }
    }
    this._nc.connect(url);
  } catch (e) {
    e.message += "  url: '" + url + "'";
    throw e;
  }
};


/**
 *  @asprivate
 * @protected
 * @override
 */
mx.messaging.channels.NetConnectionChannel.prototype.internalSend = function(msgResp) {
  this.setRoyaleClientIdOnMessage(msgResp.message);
  if (this.mpiEnabled) {
    var /** @type {mx.messaging.messages.MessagePerformanceInfo} */ mpii = new mx.messaging.messages.MessagePerformanceInfo();
    if (this.recordMessageTimes)
      mpii.sendTime = new Date().getTime();
    msgResp.message.headers[mx.messaging.messages.MessagePerformanceUtils.MPI_HEADER_IN] = mpii;
  }
  var /** @type {mx.messaging.messages.IMessage} */ message = msgResp.message;
  if (this.useSmallMessages && org.apache.royale.utils.Language.is(message, mx.messaging.messages.ISmallMessage)) {
    var /** @type {mx.messaging.messages.IMessage} */ smallMessage = org.apache.royale.utils.Language.as(message, mx.messaging.messages.ISmallMessage, true).getSmallMessage();
    if (smallMessage != null)
      message = smallMessage;
  }
  this._nc.call(null, msgResp, message);
};


/**
 *  @asprivate
 *  Special handler for legacy AMF packet level header "AppendToGatewayUrl".
 *  When we receive this header we assume the server detected that a session was
 *  created but it believed the client could not accept its session cookie, so we
 *  need to decorate the channel endpoint with the session id.
 *
 *  We do not modify the underlying endpoint property, however, as this session
 *  is transient and should not apply if the channel is disconnected and re-connected
 *  at some point in the future.
 * @export
 * @param {string} value
 */
mx.messaging.channels.NetConnectionChannel.prototype.AppendToGatewayUrl = function(value) {
  if (value != null && value != "" && value != this.http_$$www_adobe_com$2006$flex$mx$internal___appendToURL) {
    if (mx.logging.Log.isDebug())
      this._log.debug("'{0}' channel will disconnect and reconnect with with its session identifier '{1}' appended to its endpoint url \n", this.id, value);
    this.http_$$www_adobe_com$2006$flex$mx$internal___appendToURL = value;
  }
};


/**
 *  @asprivate
 *  Called by the player when the server pushes a message.
 *  Dispatches a MessageEvent to any MessageAgents that are listening.
 *  Any ...rest args passed via RTMP are ignored.
 *
 *  @asparam msg The message pushed from the server.
 * @export
 * @param {mx.messaging.messages.IMessage} msg
 * @param {...} rest
 */
mx.messaging.channels.NetConnectionChannel.prototype.receive = function(msg, rest) {
  rest = Array.prototype.slice.call(arguments, 1);
  if (mx.logging.Log.isDebug()) {
    this._log.debug("'{0}' channel got message\n{1}\n", this.id, msg.toString());
    if (this.mpiEnabled) {
      try {
        var /** @type {mx.messaging.messages.MessagePerformanceUtils} */ mpiutil = new mx.messaging.messages.MessagePerformanceUtils(msg);
        this._log.debug(mpiutil.prettyPrint());
      } catch (e) {
        this._log.debug("Could not get message performance information for: " + msg.toString());
      }
    }
  }
  this.dispatchEvent(mx.messaging.events.MessageEvent.createEvent(mx.messaging.events.MessageEvent.MESSAGE, msg));
};


/**
 *  @asprivate
 *  Shuts down the underlying NetConnection for the channel.
 * @protected
 */
mx.messaging.channels.NetConnectionChannel.prototype.shutdownNetConnection = function() {
  this._nc.removeEventListener(mx.events.SecurityErrorEvent.SECURITY_ERROR, org.apache.royale.utils.Language.closure(this.securityErrorHandler, this, 'securityErrorHandler'));
  this._nc.removeEventListener(mx.events.IOErrorEvent.IO_ERROR, org.apache.royale.utils.Language.closure(this.ioErrorHandler, this, 'ioErrorHandler'));
  this._nc.removeEventListener(mx.events.NetStatusEvent.NET_STATUS, org.apache.royale.utils.Language.closure(this.statusHandler, this, 'statusHandler'));
  this._nc.removeEventListener(mx.events.AsyncErrorEvent.ASYNC_ERROR, org.apache.royale.utils.Language.closure(this.asyncErrorHandler, this, 'asyncErrorHandler'));
  this._nc.close();
};


/**
 *  @asprivate
 *  Called when a status event occurs on the NetConnection.
 *  Descendants must override this method.
 * @protected
 * @param {mx.events.NetStatusEvent} event
 */
mx.messaging.channels.NetConnectionChannel.prototype.statusHandler = function(event) {
};


/**
 *  @asprivate
 *  If the player rejects a NetConnection request for security reasons,
 *  such as a security sandbox violation, the NetConnection raises a
 *  securityError event which we dispatch as a channel fault.
 * @protected
 * @param {mx.events.SecurityErrorEvent} event
 */
mx.messaging.channels.NetConnectionChannel.prototype.securityErrorHandler = function(event) {
  this.mx_messaging_channels_NetConnectionChannel_defaultErrorHandler("Channel.Security.Error", event);
};


/**
 *  @asprivate
 *  If there is a network problem, the NetConnection raises an
 *  ioError event which we dispatch as a channel fault.
 * @protected
 * @param {mx.events.IOErrorEvent} event
 */
mx.messaging.channels.NetConnectionChannel.prototype.ioErrorHandler = function(event) {
  this.mx_messaging_channels_NetConnectionChannel_defaultErrorHandler("Channel.IO.Error", event);
};


/**
 *  @asprivate
 *  If a problem arises in the native player code asynchronously, this
 *  error event will be dispatched as a channel fault.
 * @protected
 * @param {mx.events.AsyncErrorEvent} event
 */
mx.messaging.channels.NetConnectionChannel.prototype.asyncErrorHandler = function(event) {
  this.mx_messaging_channels_NetConnectionChannel_defaultErrorHandler("Channel.Async.Error", event);
};


/**
 *  @asprivate
 *  Utility function to dispatch a ChannelFaultEvent at an "error" level
 *  based upon the passed code and ErrorEvent.
 * @private
 * @param {string} code
 * @param {mx.events.ErrorEvent} event
 */
mx.messaging.channels.NetConnectionChannel.prototype.mx_messaging_channels_NetConnectionChannel_defaultErrorHandler = function(code, event) {
  var /** @type {mx.messaging.events.ChannelFaultEvent} */ faultEvent = mx.messaging.events.ChannelFaultEvent.createEvent(this, false, code, "error", event.text + " url: '" + this.endpoint + "'");
  faultEvent.rootCause = event;
  if (this._connecting)
    this.connectFailed(faultEvent);
  else
    this.dispatchEvent(faultEvent);
};


mx.messaging.channels.NetConnectionChannel.prototype.get__netConnection = function() {
  return this._nc;
};


mx.messaging.channels.NetConnectionChannel.prototype.get__useSmallMessages = function() {
  return (mx.messaging.channels.NetConnectionChannel.superClass_.get__useSmallMessages.apply(this) && this._nc != null && this._nc.objectEncoding >= mx.net.ObjectEncoding.AMF3);
};


Object.defineProperties(mx.messaging.channels.NetConnectionChannel.prototype, /** @lends {mx.messaging.channels.NetConnectionChannel.prototype} */ {
/**
  * @export
  * @type {mx.net.NetConnection} */
netConnection: {
get: mx.messaging.channels.NetConnectionChannel.prototype.get__netConnection},
/**
  * @export
  * @type {boolean} */
useSmallMessages: {
get: mx.messaging.channels.NetConnectionChannel.prototype.get__useSmallMessages,
set: mx.messaging.Channel.prototype.set__useSmallMessages}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.channels.NetConnectionChannel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'NetConnectionChannel', qName: 'mx.messaging.channels.NetConnectionChannel', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.channels.NetConnectionChannel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'http://www.adobe.com/2006/flex/mx/internal::_appendToURL': { type: 'String', get_set: function (/** mx.messaging.channels.NetConnectionChannel */ inst, /** * */ v) {return v !== undefined ? inst.http_$$www_adobe_com$2006$flex$mx$internal___appendToURL = v : inst.http_$$www_adobe_com$2006$flex$mx$internal___appendToURL;}}
      };
    },
    accessors: function () {
      return {
        'netConnection': { type: 'mx.net.NetConnection', access: 'readonly', declaredBy: 'mx.messaging.channels.NetConnectionChannel'},
        'useSmallMessages': { type: 'Boolean', access: 'readonly', declaredBy: 'mx.messaging.channels.NetConnectionChannel'}
      };
    },
    methods: function () {
      return {
        'NetConnectionChannel': { type: '', declaredBy: 'mx.messaging.channels.NetConnectionChannel', parameters: function () { return [ 'String', true ,'String', true ]; }},
        'AppendToGatewayUrl': { type: 'void', declaredBy: 'mx.messaging.channels.NetConnectionChannel', parameters: function () { return [ 'String', false ]; }},
        'receive': { type: 'void', declaredBy: 'mx.messaging.channels.NetConnectionChannel', parameters: function () { return [ 'mx.messaging.messages.IMessage', false ,'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.channels.NetConnectionChannel.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./NetConnectionChannel.js.map


/**
 *  Initializes this instance of the message responder with the specified
 *  agent.
 *
 *  @asparam agent MessageAgent that this responder should call back when a
 *            message is received.
 *
 *  @asparam msg The outbound message.
 *
 *  @asparam channel The channel this responder is using.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 * @extends {mx.messaging.MessageResponder}
 * @param {mx.messaging.MessageAgent} agent
 * @param {mx.messaging.messages.IMessage} msg
 * @param {mx.messaging.channels.NetConnectionChannel} channel
 */
mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder = function(agent, msg, channel) {
  
  this.NetConnectionMessageResponder_resourceManager = mx.resources.ResourceManager.getInstance();
  mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder.base(this, 'constructor', agent, msg, channel);
  channel.addEventListener(mx.messaging.events.ChannelEvent.DISCONNECT, org.apache.royale.utils.Language.closure(this.channelDisconnectHandler, this, 'channelDisconnectHandler'));
  channel.addEventListener(mx.messaging.events.ChannelFaultEvent.FAULT, org.apache.royale.utils.Language.closure(this.channelFaultHandler, this, 'channelFaultHandler'));
};
goog.inherits(mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder, mx.messaging.MessageResponder);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder', mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder);


/**
 * @private
 * @type {boolean}
 */
mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder.prototype.NetConnectionMessageResponder_handled;


/**
 * @private
 * @type {mx.resources.IResourceManager}
 */
mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder.prototype.NetConnectionMessageResponder_resourceManager;


/**
 *  @asprivate
 *  Called when the result of sending a message is received.
 *
 *  @asparam msg NetConnectionChannel-specific message data.
 * @protected
 * @override
 */
mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder.prototype.resultHandler = function(msg) {
  if (this.NetConnectionMessageResponder_handled)
    return;
  var /** @type {mx.messaging.messages.ErrorMessage} */ errorMsg;
  this.NetConnectionMessageResponder_disconnect();
  if (org.apache.royale.utils.Language.is(msg, mx.messaging.messages.AsyncMessage)) {
    if (org.apache.royale.utils.Language.as(msg, mx.messaging.messages.AsyncMessage, true).correlationId == this.message.messageId) {
      this.agent.acknowledge(org.apache.royale.utils.Language.as(msg, mx.messaging.messages.AcknowledgeMessage), this.message);
    } else {
      errorMsg = new mx.messaging.messages.ErrorMessage();
      errorMsg.faultCode = "Server.Acknowledge.Failed";
      errorMsg.faultString = this.NetConnectionMessageResponder_resourceManager.getString("messaging", "ackFailed");
      errorMsg.faultDetail = this.NetConnectionMessageResponder_resourceManager.getString("messaging", "ackFailed.details", [this.message.messageId, org.apache.royale.utils.Language.as(msg, mx.messaging.messages.AsyncMessage, true).correlationId]);
      errorMsg.correlationId = this.message.messageId;
      this.agent.fault(errorMsg, this.message);
    }
  } else {
    errorMsg = new mx.messaging.messages.ErrorMessage();
    errorMsg.faultCode = "Server.Acknowledge.Failed";
    errorMsg.faultString = this.NetConnectionMessageResponder_resourceManager.getString("messaging", "noAckMessage");
    errorMsg.faultDetail = this.NetConnectionMessageResponder_resourceManager.getString("messaging", "noAckMessage.details", [msg ? msg.toString() : "null"]);
    errorMsg.correlationId = this.message.messageId;
    this.agent.fault(errorMsg, this.message);
  }
};


/**
 *  @asprivate
 *  Called when the current invocation fails.
 *  Passes the fault information on to the associated agent that made
 *  the request.
 *
 *  @asparam msg NetConnectionMessageResponder status information.
 * @protected
 * @override
 */
mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder.prototype.statusHandler = function(msg) {
  if (this.NetConnectionMessageResponder_handled)
    return;
  var /** @type {mx.messaging.messages.ErrorMessage} */ errorMsg;
  this.NetConnectionMessageResponder_disconnect();
  if (org.apache.royale.utils.Language.is(msg, mx.messaging.messages.AsyncMessage)) {
    if (org.apache.royale.utils.Language.as(msg, mx.messaging.messages.AsyncMessage, true).correlationId == this.message.messageId) {
      var /** @type {mx.messaging.messages.AcknowledgeMessage} */ ack = new mx.messaging.messages.AcknowledgeMessage();
      ack.correlationId = org.apache.royale.utils.Language.as(msg, mx.messaging.messages.AsyncMessage, true).correlationId;
      ack.headers[mx.messaging.messages.AcknowledgeMessage.ERROR_HINT_HEADER] = true;
      this.agent.acknowledge(ack, this.message);
      this.agent.fault(org.apache.royale.utils.Language.as(msg, mx.messaging.messages.ErrorMessage), this.message);
    } else if (org.apache.royale.utils.Language.is(msg, mx.messaging.messages.ErrorMessage)) {
      this.agent.fault(org.apache.royale.utils.Language.as(msg, mx.messaging.messages.ErrorMessage), this.message);
    } else {
      errorMsg = new mx.messaging.messages.ErrorMessage();
      errorMsg.faultCode = "Server.Acknowledge.Failed";
      errorMsg.faultString = this.NetConnectionMessageResponder_resourceManager.getString("messaging", "noErrorForMessage");
      errorMsg.faultDetail = this.NetConnectionMessageResponder_resourceManager.getString("messaging", "noErrorForMessage.details", [this.message.messageId, org.apache.royale.utils.Language.as(msg, mx.messaging.messages.AsyncMessage, true).correlationId]);
      errorMsg.correlationId = this.message.messageId;
      this.agent.fault(errorMsg, this.message);
    }
  } else {
    errorMsg = new mx.messaging.messages.ErrorMessage();
    errorMsg.faultCode = "Server.Acknowledge.Failed";
    errorMsg.faultString = this.NetConnectionMessageResponder_resourceManager.getString("messaging", "noAckMessage");
    errorMsg.faultDetail = this.NetConnectionMessageResponder_resourceManager.getString("messaging", "noAckMessage.details", [msg ? msg.toString() : "null"]);
    errorMsg.correlationId = this.message.messageId;
    this.agent.fault(errorMsg, this.message);
  }
};


/**
 *  @asprivate
 *  Handle a request timeout by removing ourselves as a listener on the
 *  NetConnection and faulting the message to the agent.
 * @protected
 * @override
 */
mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder.prototype.requestTimedOut = function() {
  this.statusHandler(this.createRequestTimeoutErrorMessage());
};


/**
 *  @asprivate
 *  Handles a disconnect of the underlying Channel before a response is
 *  returned to the responder.
 *  The sent message is faulted and flagged with the ErrorMessage.MESSAGE_DELIVERY_IN_DOUBT
 *  code.
 *
 *  @asparam event The DISCONNECT event.
 * @protected
 * @param {mx.messaging.events.ChannelEvent} event
 */
mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder.prototype.channelDisconnectHandler = function(event) {
  if (this.NetConnectionMessageResponder_handled)
    return;
  this.NetConnectionMessageResponder_disconnect();
  var /** @type {mx.messaging.messages.ErrorMessage} */ errorMsg = new mx.messaging.messages.ErrorMessage();
  errorMsg.correlationId = this.message.messageId;
  errorMsg.faultString = this.NetConnectionMessageResponder_resourceManager.getString("messaging", "deliveryInDoubt");
  errorMsg.faultDetail = this.NetConnectionMessageResponder_resourceManager.getString("messaging", "deliveryInDoubt.details");
  errorMsg.faultCode = mx.messaging.messages.ErrorMessage.MESSAGE_DELIVERY_IN_DOUBT;
  errorMsg.rootCause = event;
  this.agent.fault(errorMsg, this.message);
};


/**
 *  @asprivate
 *  Handles a fault of the underlying Channel before a response is
 *  returned to the responder.
 *  The sent message is faulted and flagged with the ErrorMessage.MESSAGE_DELIVERY_IN_DOUBT
 *  code.
 *
 *  @asparam event The ChannelFaultEvent.
 * @protected
 * @param {mx.messaging.events.ChannelFaultEvent} event
 */
mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder.prototype.channelFaultHandler = function(event) {
  if (this.NetConnectionMessageResponder_handled)
    return;
  this.NetConnectionMessageResponder_disconnect();
  var /** @type {mx.messaging.messages.ErrorMessage} */ errorMsg = event.createErrorMessage();
  errorMsg.correlationId = this.message.messageId;
  if (!event.channel.connected) {
    errorMsg.faultCode = mx.messaging.messages.ErrorMessage.MESSAGE_DELIVERY_IN_DOUBT;
  }
  errorMsg.rootCause = event;
  this.agent.fault(errorMsg, this.message);
};


/**
 *  @asprivate
 *  Disconnects the responder from the underlying Channel.
 * @private
 */
mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder.prototype.NetConnectionMessageResponder_disconnect = function() {
  this.NetConnectionMessageResponder_handled = true;
  this.channel.removeEventListener(mx.messaging.events.ChannelEvent.DISCONNECT, org.apache.royale.utils.Language.closure(this.channelDisconnectHandler, this, 'channelDisconnectHandler'));
  this.channel.removeEventListener(mx.messaging.events.ChannelFaultEvent.FAULT, org.apache.royale.utils.Language.closure(this.channelFaultHandler, this, 'channelFaultHandler'));
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'NetConnectionMessageResponder', qName: 'mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'NetConnectionMessageResponder': { type: '', declaredBy: 'mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder', parameters: function () { return [ 'mx.messaging.MessageAgent', false ,'mx.messaging.messages.IMessage', false ,'mx.messaging.channels.NetConnectionChannel', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.channels.NetConnectionChannel.NetConnectionMessageResponder.prototype.ROYALE_COMPILE_FLAGS = 10;

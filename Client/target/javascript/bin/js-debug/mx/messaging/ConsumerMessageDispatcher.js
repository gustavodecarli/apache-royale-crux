/**
 * Generated by Apache Royale Compiler from mx/messaging/ConsumerMessageDispatcher.as
 * mx.messaging.ConsumerMessageDispatcher
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.messaging.ConsumerMessageDispatcher');
/* Royale Dependency List: mx.core.mx_internal,mx.logging.Log,mx.messaging.AbstractConsumer,mx.messaging.Channel,mx.messaging.ChannelSet,mx.messaging.events.MessageEvent,org.apache.royale.utils.Language,XML*/




/**
 *  Constructor.
 *  Use getInstance() instead of "new" to create.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @constructor
 */
mx.messaging.ConsumerMessageDispatcher = function() {
  
  this.mx_messaging_ConsumerMessageDispatcher__consumers = {};
  this.mx_messaging_ConsumerMessageDispatcher__channelSetRefCounts = {};
  this.mx_messaging_ConsumerMessageDispatcher__consumerDuplicateMessageBarrier = {};
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.messaging.ConsumerMessageDispatcher', mx.messaging.ConsumerMessageDispatcher);


/**
 * @private
 * @type {mx.messaging.ConsumerMessageDispatcher}
 */
mx.messaging.ConsumerMessageDispatcher._instance;


/**
 *  Returns the sole instance of this singleton class,
 *  creating it if it does not already exist.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @return {mx.messaging.ConsumerMessageDispatcher}
 */
mx.messaging.ConsumerMessageDispatcher.getInstance = function() {
  if (!mx.messaging.ConsumerMessageDispatcher._instance)
    mx.messaging.ConsumerMessageDispatcher._instance = new mx.messaging.ConsumerMessageDispatcher();
  return mx.messaging.ConsumerMessageDispatcher._instance;
};


/**
 * @private
 * @const
 * @type {Object}
 */
mx.messaging.ConsumerMessageDispatcher.prototype.mx_messaging_ConsumerMessageDispatcher__consumers;


/**
 * @private
 * @const
 * @type {Object}
 */
mx.messaging.ConsumerMessageDispatcher.prototype.mx_messaging_ConsumerMessageDispatcher__channelSetRefCounts;


/**
 * @private
 * @const
 * @type {Object}
 */
mx.messaging.ConsumerMessageDispatcher.prototype.mx_messaging_ConsumerMessageDispatcher__consumerDuplicateMessageBarrier;


/**
 *  Determines whether any subscriptions are using the specified channel.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @param {mx.messaging.Channel} channel
 * @return {boolean}
 */
mx.messaging.ConsumerMessageDispatcher.prototype.isChannelUsedForSubscriptions = function(channel) {
  var /** @type {Array} */ memberOfChannelSets = channel.channelSets;
  var /** @type {mx.messaging.ChannelSet} */ cs = null;
  var /** @type {number} */ n = (memberOfChannelSets.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    cs = memberOfChannelSets[i];
    if ((this.mx_messaging_ConsumerMessageDispatcher__channelSetRefCounts[cs] != null) && (cs.currentChannel == channel))
      return true;
  }
  return false;
};


/**
 *  Registers a Consumer subscription.
 *  This will cause the ConsumerMessageDispatcher to start listening for MessageEvents
 *  from the underlying ChannelSet used to subscribe and redispatch messages to Consumers.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @param {mx.messaging.AbstractConsumer} consumer
 */
mx.messaging.ConsumerMessageDispatcher.prototype.registerSubscription = function(consumer) {
  this.mx_messaging_ConsumerMessageDispatcher__consumers[consumer.clientId] = consumer;
  if (this.mx_messaging_ConsumerMessageDispatcher__channelSetRefCounts[consumer.channelSet] == null) {
    consumer.channelSet.addEventListener(mx.messaging.events.MessageEvent.MESSAGE, org.apache.royale.utils.Language.closure(this.mx_messaging_ConsumerMessageDispatcher_messageHandler, this, 'messageHandler'));
    this.mx_messaging_ConsumerMessageDispatcher__channelSetRefCounts[consumer.channelSet] = 1;
  } else {
    this.mx_messaging_ConsumerMessageDispatcher__channelSetRefCounts[consumer.channelSet]++;
  }
};


/**
 *  Unregisters a Consumer subscription.
 *  The ConsumerMessageDispatcher will stop monitoring underlying channels for messages for
 *  this Consumer.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @export
 * @param {mx.messaging.AbstractConsumer} consumer
 */
mx.messaging.ConsumerMessageDispatcher.prototype.unregisterSubscription = function(consumer) {
  delete this.mx_messaging_ConsumerMessageDispatcher__consumers[consumer.clientId];
  var /** @type {number} */ refCount = (this.mx_messaging_ConsumerMessageDispatcher__channelSetRefCounts[consumer.channelSet]) >> 0;
  if (--refCount == 0) {
    consumer.channelSet.removeEventListener(mx.messaging.events.MessageEvent.MESSAGE, org.apache.royale.utils.Language.closure(this.mx_messaging_ConsumerMessageDispatcher_messageHandler, this, 'messageHandler'));
    delete this.mx_messaging_ConsumerMessageDispatcher__channelSetRefCounts[consumer.channelSet];
    if (this.mx_messaging_ConsumerMessageDispatcher__consumerDuplicateMessageBarrier[consumer.id] != null)
      delete this.mx_messaging_ConsumerMessageDispatcher__consumerDuplicateMessageBarrier[consumer.id];
  } else {
    this.mx_messaging_ConsumerMessageDispatcher__channelSetRefCounts[consumer.channelSet] = refCount;
  }
};


/**
 *  Handles message events from ChannelSets that Consumers are subscribed over.
 *  We just need to redirect the event to the proper Consumer instance.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion BlazeDS 4
 *  @productversion LCDS 3 
 * @private
 * @param {mx.messaging.events.MessageEvent} event
 */
mx.messaging.ConsumerMessageDispatcher.prototype.mx_messaging_ConsumerMessageDispatcher_messageHandler = function(event) {
  var /** @type {mx.messaging.AbstractConsumer} */ consumer = this.mx_messaging_ConsumerMessageDispatcher__consumers[event.message.clientId];
  if (consumer == null) {
    if (mx.logging.Log.isDebug())
      mx.logging.Log.getLogger("mx.messaging.Consumer").debug("'{0}' received pushed message for consumer but no longer subscribed: {1}", event.message.clientId, event.message);
    return;
  }
  if (event.target.currentChannel.channelSets.length > 1) {
    var /** @type {number} */ count = 0;
    var foreachiter0_target = event.target.currentChannel.channelSets;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var cs = foreachiter0_target[foreachiter0];
    {
      if (this.mx_messaging_ConsumerMessageDispatcher__channelSetRefCounts[cs] != null)
        ++count;
    }}
    
    if (count > 1) {
      if (this.mx_messaging_ConsumerMessageDispatcher__consumerDuplicateMessageBarrier[consumer.id] == null) {
        this.mx_messaging_ConsumerMessageDispatcher__consumerDuplicateMessageBarrier[consumer.id] = [event.messageId, count];
        consumer.http_$$www_adobe_com$2006$flex$mx$internal__messageHandler(event);
      }
      var /** @type {Array} */ duplicateDispatchGuard = this.mx_messaging_ConsumerMessageDispatcher__consumerDuplicateMessageBarrier[consumer.id];
      if (duplicateDispatchGuard[0] == event.messageId) {
        if (--duplicateDispatchGuard[1] == 0)
          delete this.mx_messaging_ConsumerMessageDispatcher__consumerDuplicateMessageBarrier[consumer.id];
      }
      return;
    }
  }
  consumer.http_$$www_adobe_com$2006$flex$mx$internal__messageHandler(event);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.messaging.ConsumerMessageDispatcher.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ConsumerMessageDispatcher', qName: 'mx.messaging.ConsumerMessageDispatcher', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.messaging.ConsumerMessageDispatcher.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|getInstance': { type: 'mx.messaging.ConsumerMessageDispatcher', declaredBy: 'mx.messaging.ConsumerMessageDispatcher'},
        'ConsumerMessageDispatcher': { type: '', declaredBy: 'mx.messaging.ConsumerMessageDispatcher'},
        'isChannelUsedForSubscriptions': { type: 'Boolean', declaredBy: 'mx.messaging.ConsumerMessageDispatcher', parameters: function () { return [ 'mx.messaging.Channel', false ]; }},
        'registerSubscription': { type: 'void', declaredBy: 'mx.messaging.ConsumerMessageDispatcher', parameters: function () { return [ 'mx.messaging.AbstractConsumer', false ]; }},
        'unregisterSubscription': { type: 'void', declaredBy: 'mx.messaging.ConsumerMessageDispatcher', parameters: function () { return [ 'mx.messaging.AbstractConsumer', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.messaging.ConsumerMessageDispatcher.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ConsumerMessageDispatcher.js.map

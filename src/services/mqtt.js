const mqtt = require('mqtt')

const clientId = 'zelite_user_test'

const defaults = {
  keepalive: 30,
  clientId: clientId,
  protocolId: 'MQIsdp',
  protocolVersion: 3,
  clean: true,
  reconnectPeriod: 3000,
  connectTimeout: 30 * 1000,
  rejectUnauthorized: false
}

let client
const getClient = (host, options) => {
  // host = "ws://localhost:8883"
  if (client) return client

  console.log('connecting mqtt client .. .', { host })

  client = mqtt.connect(host, { ...defaults, ...options })
  client.on('error', error => {
    console.error('MQTT: error', error.message)
  })
  return client
}

const setTopicListner = (myTopic, listnerFunc) => {
  let client = getClient()
  return new Promise((resolve, reject) => {
    if (!client) reject('Client is not intialized')
    client.unsubscribe(myTopic)
    client.subscribe(myTopic, err => {
      if (err) reject(err)
      resolve(true)
    })

    client.on('message', (topic, message) => {
      if (myTopic == topic) listnerFunc(message.toString())
    })
  })
}

// TODO: function to remove topic listner

const publishData = (myTopic, data) => {
  return new Promise((resolve, reject) => {
    client.publish(myTopic, data, { qos: 1, retain: true }, err => {
      if (err) reject(err)
      resolve(true)
    })
  })
}
const mqttManager = {
  getClient,
  setTopicListner,
  publishData
}

export default mqttManager

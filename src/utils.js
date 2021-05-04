// const syncDevices = (client) => {

//   const myTopics = state.devices.map(one => one.topic)

//   // unsubscribe and subscribe receive last retained messages
//   client.unsubscribe(myTopics)
//   client.subscribe(myTopics, { qos: 1 })

//   // handle received message and update device accordingly
//   client.on('message', (topic, message) => {
//     // find device by its topic
//     const receiver = state.devices.find(d => d.topic == topic)
//     if (receiver?.type == "switch") {
//       receiver.isOn = message.toString() === "1" ? true : false
//     }
//     else if (receiver.type == "sensor") {
//       receiver.value = message.toString()
//     }
//     commit(types.SET_DEVICE_STATE, { key: receiver.key, newState: receiver.isOn })
//   })
// }

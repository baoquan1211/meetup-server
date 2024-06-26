const { Kafka } = require("kafkajs");

class KafkaProducer {
  constructor({ clientId, brokers }) {
    this.kafka = new Kafka({
      clientId,
      brokers,
    });
    this.producer = this.kafka.producer();
  }
  async connect() {
    await this.producer.connect();
  }
  async disconnect() {
    await this.producer.disconnect();
  }
  async sendMessage(topic, key, value) {
    await this.producer.send({
      topic: topic,
      messages: [
        {
          key: key,
          value: value,
        },
      ],
    });
  }
}
const producer = new KafkaProducer({
  clientId: "my-app",
  brokers: ["kafka:19092"],
});
producer.connect();
module.exports = producer;

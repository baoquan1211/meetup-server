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

  async sendMessage(topic, messages) {
    await this.producer.send({
      topic,
      messages,
    });
  }
}
const producer = new KafkaProducer({
  clientId: "my-app",
  brokers: ["kafka:9092"],
});
producer.connect();
module.exports = producer;

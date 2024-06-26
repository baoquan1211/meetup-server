// Connect to Kafka
const { Kafka } = require("kafkajs");

const kafkaa = new Kafka({
  clientId: "notifications",
  brokers: ["kafka:19092"],
});

const producer = kafkaa.producer();

const consumer_booking = kafkaa.consumer({ groupId: "bookings" });

const consumer_event = kafkaa.consumer({ groupId: "events" });

// const consumer_payment = kafkaa.consumer({ groupId: 'payments' });

module.exports = {
  producer,
  consumer_booking,
  consumer_event,
};

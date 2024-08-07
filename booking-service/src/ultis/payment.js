class Payment {
  static GeneralPaymentURL = async (booking_id, authorization) => {
    const data = {
      booking_id: booking_id,
    };
    const response = await fetch("http://payment-service/vnpay/payment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify(data),
    });
    if (response.status == 200) {
      return await response.json();
    }
    return null;
  };
}
module.exports = Payment;

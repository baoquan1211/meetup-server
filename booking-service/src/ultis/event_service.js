class EventService {
  static FindSeat = async (id) => {
    const response = await fetch(`http://event-service:7000/api/v1/seat/${id}`);
    if (response.status != 200) {
      return null;
    }
    const metadata = await response.json();
    return metadata["data"];
  };
  static FindVoucher = async (id) => {
    const response = await fetch(
      `http://event-service:7000/api/v1/voucher/${id}`
    );
    if (response.status != 200) {
      return null;
    }
    const metadata = await response.json();
    return metadata["data"];
  };
  static FindAddon = async (id) => {
    const response = await fetch(
      `http://event-service:7000/api/v1/addon/${id}`
    );
    if (response.status != 200) {
      return null;
    }
    const metadata = await response.json();
    return metadata["data"];
  };
}

module.exports = EventService;

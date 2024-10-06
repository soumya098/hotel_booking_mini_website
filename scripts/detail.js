const handleBooking = () => {
  const form = document.getElementById("booking-form");
  const formData = new FormData(form);

  const urlParams = Array.from(formData.entries())
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join("&");

  window.location.href = `./payment.html?${urlParams}`;
  return false;
};

const TELEGRAM_BOT_URL = "https://t.me/your_bot";

const productLabels = {
  windows_11_pro: "Windows 11 Pro",
  windows_10_pro: "Windows 10 Pro",
  office_2021_pro_plus: "Office 2021 Professional Plus",
  microsoft_365: "Microsoft 365",
  support: "Консультация"
};

document.querySelectorAll(".js-telegram-link").forEach((link) => {
  const productId = link.dataset.product || "support";
  const label = productLabels[productId] || productId;
  const startValue = encodeURIComponent(productId);

  link.href = `${TELEGRAM_BOT_URL}?start=${startValue}`;
  link.setAttribute("aria-label", `Открыть Telegram для заказа: ${label}`);
});

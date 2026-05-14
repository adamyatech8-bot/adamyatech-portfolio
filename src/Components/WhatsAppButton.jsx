export default function WhatsAppButton() {
  const phoneNumber = "919977215392";

  const message =
    "Hello AdamyaTech, I want to discuss a website/app development project.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8 fill-white"
      >
        <path d="M19.11 17.2c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.28-1.4-.84-.75-1.4-1.67-1.56-1.96-.16-.29-.02-.44.12-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.98 2.43.02 1.43 1.03 2.8 1.17 2.99.14.19 2.02 3.09 4.9 4.33.69.3 1.22.48 1.64.61.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33zM16.02 3C8.84 3 3 8.82 3 16c0 2.53.74 4.98 2.13 7.08L3 29l6.1-2.01A12.94 12.94 0 0016.02 29C23.2 29 29 23.18 29 16S23.2 3 16.02 3zm0 23.67c-2.14 0-4.23-.57-6.05-1.66l-.43-.26-3.62 1.19 1.21-3.53-.28-.46A10.63 10.63 0 015.33 16c0-5.9 4.8-10.69 10.69-10.69 2.85 0 5.53 1.11 7.55 3.13A10.6 10.6 0 0126.69 16c0 5.89-4.79 10.67-10.67 10.67z" />
      </svg>
    </a>
  );
}
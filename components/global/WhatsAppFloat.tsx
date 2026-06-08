import { siteConfig } from '@/data/site'

const message = encodeURIComponent('Hola SEGUREPP, quiero solicitar una cotización.')

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green text-white shadow-[0_14px_32px_rgba(22,163,74,0.38)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber md:bottom-7 md:right-7"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.04 4C9.42 4 4.05 9.34 4.05 15.93c0 2.28.65 4.5 1.88 6.42L4 29l6.83-1.79a12 12 0 0 0 5.2 1.19h.01c6.62 0 11.99-5.34 11.99-11.93C28.03 9.34 22.66 4 16.04 4Zm0 22.38h-.01c-1.68 0-3.33-.45-4.77-1.29l-.34-.2-4.06 1.06 1.08-3.95-.23-.36a9.86 9.86 0 0 1-1.55-5.32c0-5.47 4.47-9.92 9.97-9.92 2.66 0 5.16 1.03 7.04 2.9a9.83 9.83 0 0 1 2.92 7.02c0 5.47-4.47 9.92-9.95 9.92Zm5.46-7.42c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.29-.78.97-.96 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.03-.52-.07-.15-.68-1.63-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.29-1.05 1.02-1.05 2.49 0 1.46 1.08 2.88 1.23 3.08.15.2 2.12 3.22 5.14 4.51.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.78-.72 2.03-1.42.25-.69.25-1.29.18-1.42-.08-.12-.28-.2-.58-.35Z"
        />
      </svg>
    </a>
  )
}

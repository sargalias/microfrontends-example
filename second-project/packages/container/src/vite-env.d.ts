/// <reference types="vite/client" />

declare module 'marketing/*' {
  export function mount(
    element: Element,
    options: {
      onNavigate: (pathname: string) => void;
    },
  ): void;
}

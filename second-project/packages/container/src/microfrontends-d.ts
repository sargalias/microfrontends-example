declare module 'authApp/*' {
  export function mount(
    element: Element,
    options: {
      onRemoteNavigate: (pathname: string) => void;
    },
  ): { onHostNavigate: (pathname: string) => void };
}

declare module 'marketingApp/*' {
  export function mount(
    element: Element,
    options: {
      onRemoteNavigate: (pathname: string) => void;
    },
  ): { onHostNavigate: (pathname: string) => void };
}

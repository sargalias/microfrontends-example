declare module 'auth/*' {
  export function mount(
    element: Element,
    options: {
      onRemoteNavigate: (pathname: string) => void;
    },
  ): { onHostNavigate: (pathname: string) => void };
}

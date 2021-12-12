import { ClientConfig } from 'next-sanity';
import React, { createContext, useContext } from 'react';

const SanityConfigContext = createContext<ClientConfig | null>(null);

export const SanityConfigProvider = SanityConfigContext.Provider;

export const useSanityConfig = () => useContext(SanityConfigContext);

export type PropsWithSanityConfig<P> = {
  config: ClientConfig;
} & P;

// eslint-disable-next-line @typescript-eslint/ban-types
export function provideSanityContext<P extends object>(ChildComponent: (props: P) => JSX.Element | null) {
  const WrappedComponent = ({ config, ...props }: PropsWithSanityConfig<P>) => (
    <SanityConfigProvider value={config}>
      <ChildComponent {...props as P} />
    </SanityConfigProvider>
  );
  return WrappedComponent;
};

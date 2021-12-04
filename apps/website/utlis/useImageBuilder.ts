import imageUrlBuilder from "@sanity/image-url";
import { ClientConfig, createClient } from "next-sanity";
import { useMemo } from "react";
import { useSanityConfig } from "../components/SanityConfigProvider";

const useImageBuilder = () => {
  const config = useSanityConfig();
  return useMemo(() => {
    const client = createClient(config as ClientConfig);
    return imageUrlBuilder(client);
  }, [config]);
}

export default useImageBuilder;

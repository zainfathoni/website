import data from "../data/metadata.json" assert { type: "json" };

export type Metadata = {
  title: string;
  description: string;
};

export const metadata = data as Metadata;

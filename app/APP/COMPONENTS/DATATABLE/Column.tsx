"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
export type DogImages = {
  id: number;
  ImageLink: string;
};

const columns: ColumnDef<DogImages>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "ImageLink",
    header: "Image Link",
  },
  {
    id: "Avatar",
    header: "Avatar",
    cell: ({ row }) => (
      <img
        src={row.original.ImageLink}
        alt={`Dog ${row.original.id}`}
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
    ),
  },
];

const ConvertData = (ImageArray: string[]): DogImages[] => {
  return ImageArray.map((link, index) => ({
    id: index + 1,
    ImageLink: link,
  }));
};

export { ConvertData, columns };

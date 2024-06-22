"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Define the type for your data
export type DogImages = {
  id: number;
  ImageLink: string;
};

const ViewLargeImage = ({ ImageLink }: { ImageLink: string }) => {
  const router = useRouter();

  return (
    <p onClick={() => router.push(`/detail?Imageurl=${ImageLink}`)}>
      View Large image
    </p>
  );
};

// Component for rendering actions menu
const ActionsMenu = ({ row }: { row: { original: DogImages } }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href={`/detail?Imageurl=${row.original.ImageLink}`}>
            View Large Image
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>View Customer</MenuItem>
        <MenuItem onClick={handleClose}>View Payment Details</MenuItem>
      </Menu>
    </>
  );
};

const columns: ColumnDef<DogImages>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    id: "Avatar",
    header: "Avatar",
    cell: ({ row }: { row: { original: DogImages } }) => (
      <div style={{ width: "50px", height: "50px", position: "relative", borderRadius: "50%", overflow: "hidden" }}>
        <Image
          src={row.original.ImageLink}
          alt={`Dog ${row.original.id}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    ),
  },
  {
    accessorKey: "ImageLink",
    header: "Image Link",
  },
  {
    id: "Actions",
    header: "Actions",
    cell: ({ row }: { row: { original: DogImages } }) => <ActionsMenu row={row} />,
  },
];

const ConvertData = (ImageArray: string[]): DogImages[] => {
  return ImageArray.map((link, index) => ({
    id: index + 1,
    ImageLink: link,
  }));
};

export { ConvertData, columns };

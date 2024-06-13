"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Import the kebab menu icon
import Link from 'next/link'; // Import Link from Next.js
import { useRouter } from "next/router";

// This type is used to define the shape of our data.
export type DogImages = {
  id: number;
  ImageLink: string;
};

const ViewLargeImage = ({ ImageLink }: { ImageLink: string }) => {
  const router = useRouter();

  return <p onClick={() => { router.push(`/detail?Imageurl=${ImageLink}`) }}> View Large image</p>
}

const columns: ColumnDef<DogImages>[] = [
  {
    accessorKey: "id",
    header: "ID",
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
  {
    accessorKey: "ImageLink",
    header: "Image Link",
  },
  {
    id: "Actions",
    header: "Actions",
    cell: ({ row }) => {
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
    },
  },
];

const ConvertData = (ImageArray: string[]): DogImages[] => {
  return ImageArray.map((link, index) => ({
    id: index + 1,
    ImageLink: link,
  }));
};

export { ConvertData, columns };
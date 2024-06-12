"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AppSlider } from "@/app/APP/COMPONENTS/AppSlider";
import { cn } from "@/lib/utils";
import AppLinkButton from "@/app/APP/COMPONENTS/CONSTANTS/AppLinkButton";
import { AppDataTable } from "@/app/APP/COMPONENTS/DATATABLE/AppDataTable";
import { columns, ConvertData, DogImages } from "@/app/APP/COMPONENTS/DATATABLE/Column";

function Page() {
  const Params = useParams();

  const [ImageArray, setImageArray] = useState<string[] | null>(null);
  const [formattedData, setFormattedData] = useState<DogImages[] | null>(null);

  useEffect(() => {
    const GetData = async () => {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${Params.breed}/images/random/20`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setImageArray(data.message);
      } catch (error) {
        console.error(error);
        setImageArray([]);
      }
    };

    GetData();
  }, [Params.breed]);

  useEffect(() => {
    if (ImageArray) {
      setFormattedData(ConvertData(ImageArray));
    }
  }, [ImageArray]);

  return (
    <div className="h-screen w-screen bg-AppTertiary CENTER">
      <div
        className={cn(
          "pt-12 w-[180px] CENTER h-screen",
          "justify-start gap-[120px] flex-col"
        )}
      >
        <AppLinkButton link="/" />
        <div>
          {ImageArray ? (
            <AppSlider ImageArrayList={ImageArray} />
          ) : (
            "Loading..."
          )}
        </div>
      </div>

      <div className="w-full h-full pt-12 pl-12 p-12">
        <h1 className="text-3xl font-bold capitalize text-AppMute">
          {Params.breed}
        </h1>

        <div className="bg-white w-full h-[400px] rounded-md">
          {formattedData ? (
            <AppDataTable columns={columns} data={formattedData} />
          ) : (
            "Loading Table"
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;

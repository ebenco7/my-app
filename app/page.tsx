import React, { useEffect, useState } from "react";
import AppLeftPane from "./APP/COMPONENTS/AppLeftPane";
import { cn } from "@/lib/utils";
import { DogImages, columns } from "./APP/COMPONENTS/DATATABLE/Column";
import { AppDataTable } from "./APP/COMPONENTS/DATATABLE/AppDataTable";

function Page() {
  const [formattedData, setFormattedData] = useState<DogImages[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/hound/afghan/images/random/5`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();

        // Format ImageArray into DogImages format for AppDataTable
        const formatted = data.message.slice(0, 5).map((link: string, index: number) => ({
          id: index + 1,
          ImageLink: link,
        }));

        // Ensure at least 5 rows in the table with a placeholder image
        while (formatted.length < 5) {
          formatted.push({ id: formatted.length + 1, ImageLink: "https://via.placeholder.com/150" });
        }

        setFormattedData(formatted);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFormattedData([]); // Handle error by setting empty array
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once on component mount

  return (
    <div className={cn("CENTER gap-1 flex-col bg-AppTertiary h-screen w-screen", "justify-start items-start flex-row")}>
      <AppLeftPane />

      <div className="bg-white p-3 h-auto w-[850px] ml-[50px] rounded-md mt-[10px]"> {/* Adjusted padding */}
        {formattedData ? (
          <AppDataTable columns={columns} data={formattedData} />
        ) : (
          <p>Loading Table...</p>
        )}
      </div>
    </div>
  );
}

export default Page;

import { ImageResponse } from "next/server";
export const runtime = "edge";
export const alt = "Expense Tracker | Dashboard";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export default async function Image() {
  return new ImageResponse(
    (
      <div tw=" h-full bg-white w-full flex flex-col justify-center items-center ">
        <div tw=" text-red-600 font-black text-3xl flex  ">
          Expense Tracker |<div tw=" text-indigo-600/60">Login</div>
        </div>
        <div tw=" text-zinc-600/50 font-bold text-md mt-5">
          Created By Kolli Sai
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

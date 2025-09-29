import React from "react";
import AlignHorizontalCenterRoundedIcon from "@mui/icons-material/AlignHorizontalCenterRounded";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div class="bg-black h-full flex flex-col justify-center items-center box-border p-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div class="text-white flex flex-col bg-amber-300 gap-5 sm:text-xl">
          <h1 class="sm:font-bold">3015 Grand Ave</h1>
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <AlignHorizontalCenterRoundedIcon />
              <p>3015 Grand Ave, Miami FL</p>
            </div>
            <div class="flex items-center gap-2">
              <AccessTimeIcon />
              <p>8:00 am - 900 pmt</p>
            </div>
            <div class="flex items-center gap-2">
              <PhoneIcon />
              <p href="">1-800-555-1235</p>
            </div>
          </div>
        </div>
        <div class="bg-amber-500 flex flex-col text-white gap-5 sm:text-xl ">
          <h1 class="sm:font-bold">3275 NW 24th</h1>
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <AlignHorizontalCenterRoundedIcon />
              <p>3275 NW 24th Street Rd, Miami FL</p>
            </div>
            <div class="flex items-center gap-2">
              <AccessTimeIcon />
              <p>8:00 am - 900 pmt</p>
            </div>
            <div class="flex items-center gap-2">
              <PhoneIcon />
              <p href="">1-800-555-1235</p>
            </div>
          </div>
        </div>
        <div class="bg-amber-500 flex flex-col text-white gap-5 sm:text-xl">
          <h1 class="sm:font-bold">3401 NW 72ND AVE</h1>
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <AlignHorizontalCenterRoundedIcon />
              <p href="">3401 NW 72nd Ave, Miami FL</p>
            </div>
            <div class="flex items-center gap-2">
              <AccessTimeIcon />
              <p>8:00 am - 900 pmt</p>
            </div>
            <div class="flex items-center gap-2">
              <PhoneIcon />
              <p href="">1-800-555-1235</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[94%] border border-gray-800 mt-5 mx-auto" />

      <div class="mt-4 w-[100%] flex flex-col justify-center items-center text-white pl-10 pr-10 sm:flex-row ">
        <h1>&copy; 2022. All Rights Reserved.</h1>
        <div class="flex gap-5">
          <TwitterIcon />
          <FacebookIcon />
          <YouTubeIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;

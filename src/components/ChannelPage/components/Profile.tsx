import React from 'react';
import Image from 'next/image';
import LinkIcon from '@/assets/ico_link.svg';
import { DocumentData } from 'firebase/firestore';

interface Props {
  channel: DocumentData;
}

const ChannelProfile = ({ channel }: Props) => {
  return (
    <div className="flex justify-center flex-grow md:justify-between">
      <div>
        <div className=" flex-col md:flex-row items-center w-full flex md:items-baseline gap-[6px] md:w-72">
          <h2 className="text-2xl font-bold leading-6">
            {channel.channelName}
          </h2>
          <p>
            <span className="text-sm font-medium leading-5 text-gray-600 ">
              @{channel.ownerName}
            </span>
          </p>
        </div>
        <p className="mt-4 mb-2 leading-tight text-center md:text-left">
          {channel.description}
          {/* Software Engineer / Designer / Entrepreneur <br />
          Visit my website to test a working <b>Nutube</b> */}
        </p>
        <div className="flex flex-col items-center justify-between gap-5 text-gray-600 md:gap-0 md:flex-row">
          <div className="flex">
            <span className="flex mr-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5 paint-icon">
                <g>
                  <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path>
                  <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path>
                </g>
              </svg>
              <a
                href="http://Nutube.shop"
                target="#"
                className="ml-1 leading-5 text-blue-400"
              >
                Nutube.shop
              </a>
            </span>
            <span className="flex mr-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5 paint-icon">
                <g>
                  <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
                  <circle cx="7.032" cy="8.75" r="1.285"></circle>
                  <circle cx="7.032" cy="13.156" r="1.285"></circle>
                  <circle cx="16.968" cy="8.75" r="1.285"></circle>
                  <circle cx="16.968" cy="13.156" r="1.285"></circle>
                  <circle cx="12" cy="8.75" r="1.285"></circle>
                  <circle cx="12" cy="13.156" r="1.285"></circle>
                  <circle cx="7.032" cy="17.486" r="1.285"></circle>
                  <circle cx="12" cy="17.486" r="1.285"></circle>
                </g>
              </svg>
              <span className="ml-1 leading-5">December, 2019</span>
            </span>
          </div>
          {/* Followers */}
          <div className="flex divide-x divide-gray-400 divide-solid">
            {/* <div className="pr-3 text-center">
                      <span className="font-bold">520</span>
                      <span className="text-gray-600"> Following</span>
                    </div> */}
            <div className="px-3 text-center">
              <span className="mr-2 text-lg font-bold">23.4m </span>
              <span className="text-gray-600"> Subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelProfile;

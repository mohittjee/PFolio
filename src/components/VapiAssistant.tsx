"use client"
import Vapi from "@vapi-ai/web";
import { useState, useEffect, useCallback } from "react";
import { Mic } from "lucide-react";
import { HoverBorderGradient } from "./hover-border";


export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_API!);
  
export default function VapiAssistant() {
  const [callStatus, setCallStatus] = useState("inactive");
  
  const start = async () => { 
    setCallStatus("loading");
    const response = vapi.start(process.env.NEXT_PUBLIC_ASSISTANT_ID!);
  };

  const stop = () => {
    setCallStatus("loading"); 
    vapi.stop();
    console.log("stop is triggered")
  };
  //@ts-ignore
  useEffect(() => {
    vapi.on("call-start", () => setCallStatus("active"));
    vapi.on("call-end", () => setCallStatus('inactive'));
    
    return () => vapi.removeAllListeners();
  }, [])
  
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
      >
        <Mic className="h-5 w-5 mr-1 dark:text-[#8E8FFA]"/>
      {callStatus === "inactive" ? (<span onClick={start}>Ask Momo about me.</span>) : null}
      {callStatus === "loading" ? <span className="animate-pulse dark:text-[#8E8FFA]">One Sec..</span> : null}
      {callStatus === "active" ? (<span  onClick={stop}>Press to Stop</span>) : null}
      </HoverBorderGradient>
    </div>
  );
}
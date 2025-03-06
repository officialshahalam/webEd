'use client';
import { tokenProvider } from "@/action/stream.action";
import Loader from "@/components/Loader";
import { useUser } from "@clerk/nextjs";
import { StreamVideoClient, StreamVideo, } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;




const StreamVideoProvider = ({ children }) => {
  const [videoClient, setVideoClient] = useState();

  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!user || !isLoaded) return;
    if (!apiKey) throw new Error('Stream apikey is missing');
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.name || user?.id,
        image: user?.imageUrl
      },
      tokenProvider: tokenProvider
    })

    setVideoClient(client);
  }, [user, isLoaded]);

  if(!videoClient) return <Loader/>

  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};

export default StreamVideoProvider;
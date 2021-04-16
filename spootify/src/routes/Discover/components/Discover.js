import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSpotifyContext } from "../../../common/context/Spotify";
import "../styles/_discover.scss";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";

export const Discover = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  const { requestHeader } = useSpotifyContext();
  console.log(requestHeader);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.spotify.com/v1/browse/new-releases",
        requestHeader
      );
      setNewReleases(response.data.albums.items);
    }
    fetchData();
  }, [requestHeader]);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  );
};

export default Discover;

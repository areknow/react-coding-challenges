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

  useEffect(() => {
    async function fetchData() {
      const releases = await axios.get(
        "https://api.spotify.com/v1/browse/new-releases",
        requestHeader
      );
      const playlists = await axios.get(
        "https://api.spotify.com/v1/browse/featured-playlists",
        requestHeader
      );
      const categories = await axios.get(
        "https://api.spotify.com/v1/browse/categories",
        requestHeader
      );
      setNewReleases(releases.data.albums.items);
      setPlaylists(playlists.data.playlists.items);
      setCategories(categories.data.categories.items);
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

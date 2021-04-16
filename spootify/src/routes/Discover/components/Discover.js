import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/_discover.scss";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";

export const Discover = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.spotify.com/v1/browse/new-releases"
      );
      console.log(response.data);
    }
    // fetchData();
  }, []);

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

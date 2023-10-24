import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
import { userIcon } from "../../assets/icons/indext";

type Coordinates = {
  lat: number;
  lng: number;
};
type MapProps = {
  googleMapsApiKey: string;
};

const containerStyle = {
  // width: "1000px",
  height: "340px",
};

const center = {
  lat: 51.55063,
  lng: -0.0461,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDXoHO79vxypTv8xL4V10cf5kFpIYDO9Rk",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      //   onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {[
        { lat: 51.55063, lng: -0.0461 },
        { lat: 51.55063, lng: -0.0561 },
        { lat: 51.55063, lng: -0.0411 },
      ].map((l) => (
        <Marker
          // label={"user"}
          icon={{
            url: "https://cdn-icons-png.flaticon.com/512/4151/4151073.png",
            anchor: new google.maps.Point(17, 46),
            scaledSize: new google.maps.Size(47, 47),
          }}
          position={l}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);

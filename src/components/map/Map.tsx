import React from "react";
import {
	GoogleMap,
	useJsApiLoader,
	MarkerF,
	InfoWindow,
} from "@react-google-maps/api";

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
			zoom={17}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<></>
	);
}

export default React.memo(Map);

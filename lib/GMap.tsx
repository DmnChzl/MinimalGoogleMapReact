import React, { FunctionComponent, useRef, useEffect } from 'react';

interface LatLng {
  lat: number;
  lng: number;
  onClick?: () => void;
}

interface ColorStyler {
  color: string;
}

interface LightStyler {
  lightness: number;
}

interface SaturationStyler {
  saturation: number;
}

interface VisibilityStyler {
  visibility: string;
}

interface WeightStyler {
  weight: number;
}

type Styler = ColorStyler | LightStyler | SaturationStyler | VisibilityStyler | WeightStyler;

interface StyledMap {
  featureType?: string;
  elementType?: string;
  stylers: Styler[];
}

type Props = {
  apiKey: string;
  defaultCenter?: LatLng;
  defaultZoom?: number;
  enableUI?: boolean;
  markers?: LatLng[];
  styledMap?: StyledMap[];
};

/**
 * GMap
 */
const GMap: FunctionComponent<Props> = ({
  apiKey,
  defaultCenter = { lat: 0, lng: 0 },
  defaultZoom = 10,
  enableUI = false,
  markers = [],
  styledMap = []
}) => {
  const gMapRef = useRef<HTMLDivElement>(null);

  const createMap = (divElement: HTMLDivElement) => {
    const map = new google.maps.Map(divElement, {
      center: {
        lat: defaultCenter.lat,
        lng: defaultCenter.lng
      },
      zoom: defaultZoom,
      disableDefaultUI: !enableUI
    });

    if (styledMap.length > 0) {
      const styledMapType = new google.maps.StyledMapType(styledMap);
      map.mapTypes.set('styled_map', styledMapType);
      map.setMapTypeId('styled_map');
    }

    return map;
  };

  // prettier-ignore
  const initMarker = (map: google.maps.Map) => ({ lat, lng }: LatLng) => {
    return new google.maps.Marker({
      position: { lat, lng },
      map
    });
  };

  useEffect(() => {
    if (apiKey) {
      const mapScript = document.createElement('script');
      mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      mapScript.async = true;
      window.document.body.appendChild(mapScript);

      mapScript.addEventListener('load', () => {
        if (gMapRef.current !== null) {
          const gMap = createMap(gMapRef.current);
          const createMarker = initMarker(gMap);

          markers.forEach(({ lat, lng, onClick }) => {
            const marker = createMarker({ lat, lng });

            if (onClick) {
              marker.addListener('click', onClick);
            }
          });
        }
      });
    }
  }, [apiKey]);

  return <div id="mnml-gmap" ref={gMapRef} style={{ height: '100%' }} />;
};

export default GMap;

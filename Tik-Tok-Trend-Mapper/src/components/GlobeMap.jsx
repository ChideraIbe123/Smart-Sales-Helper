
import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GlobeMap = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyCvPtn70Ev6_BAcVm5GIkH9RQilUT8A_os',
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(ref.current, {
        center: { lat: 0, lng: 0 },
        zoom: 2,
        mapTypeId: 'satellite',
      });

     
    });
  }, [data]);

  return <div ref={ref} style={{ height: '100vh', width: '100%' }}></div>;
};

export default GlobeMap;

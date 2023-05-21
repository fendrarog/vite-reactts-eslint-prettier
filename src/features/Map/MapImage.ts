import { useMap } from 'react-map-gl';

export default function MapImage() {
  const { current: map } = useMap();

  if (!map?.hasImage('01')) {
    map?.loadImage('/images/image52.png', (error, image) => {
      if (error) throw error;
      if (!map.hasImage('01')) map.addImage('01', image as any, { sdf: false });
    });
  }

  return null;
}

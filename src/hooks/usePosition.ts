import { useState, useEffect } from 'react';

export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState<null | string>(null);

  const onChange = ({ latitude, longitude }: { latitude: any; longitude: any }) => {
    // Здесь мы могли бы сохранить весь объект position, но для
    // ясности давайте явно перечислим, какие свойства нас интересуют.
    setPosition({ latitude, longitude });
  };

  const onError = (error: any) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    console.log(geo.getCurrentPosition);

    if (!geo) {
      setError('Геолокация не поддерживается браузером');
      return;
    }

    // Подписываемся на изменение геопозиции браузера.
    const watcher = geo.watchPosition(onChange as any, onError);

    // В случае, если компонент будет удаляться с экрана
    // производим отписку от слежки, чтобы не засорять память.
    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };
};

import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MyMap() {
  return (
    <>
      <YMaps>
      <Map defaultState={{ center: [55.787948, 49.122584], zoom: 14 }}>
        <Placemark geometry={[55.787948, 49.122584]} />
      </Map>
    </YMaps>
    </>
  )
}

import { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import { YMaps, Map } from '@pbe/react-yandex-maps';

import './PlaceItem.css';

const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Закрыть</Button>}
      >
        <div className="map-container">
          <YMaps query={{ lang: 'ru_RU' }}>
            <Map defaultState={{ center: [props.location.lat, props.location.lng], zoom: 12 }} style={{width:"100%", height:"100%"}}/>
          </YMaps>
        </div>
      </Modal>

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={"/images/"+ props.image} />
          </div>

          <div className="place-item__info">
            <h2>{props.title}</h2>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>Посмотреть на карте</Button>
            <Button to={`/places/${props.id}`}>Изменить</Button>
            <Button danger>Удалить</Button>
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;
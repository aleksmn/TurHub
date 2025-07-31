import { useState, useContext } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { AuthContext } from '../../shared/context/auth-context';

import './PlaceItem.css';

const PlaceItem = props => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);


  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log('Удаление...');
  };

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
            <Map defaultState={{ center: [props.location.lat, props.location.lng], zoom: 12 }} style={{ width: "100%", height: "100%" }} />
          </YMaps>
        </div>
      </Modal>

      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header={props.title}
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              Закрыть
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Удалить
            </Button>
          </>
        }
      >
        <p>
          Вы действительно хотите удалить это место? Обратите внимание, удаление нельзя отменить!
        </p>
      </Modal>

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={"/images/" + props.image} />
          </div>

          <div className="place-item__info">
            <h2>{props.title}</h2>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>Посмотреть на карте</Button>
            {auth.isLoggedIn &&
              <>
                <Button to={`/places/${props.id}`}>Изменить</Button>
                <Button danger onClick={showDeleteWarningHandler}>Удалить</Button>
              </>
            }
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;
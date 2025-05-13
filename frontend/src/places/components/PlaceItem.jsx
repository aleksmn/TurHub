import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import './PlaceItem.css';

const PlaceItem = props => {
  return (
    <Card className="place-item__content">
      <li className="place-item">
        <div className="place-item__image">
          <img src={props.image} />
        </div>

        <div className="place-item__info">
          <h2>{props.title}</h2>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className="place-item__actions">
          <Button inverse>Посмотреть на карте</Button>
          <Button to={`/places/${props.id}`}>Изменить</Button>
          <Button danger>Удалить</Button>
        </div>
      </li>
    </Card>
  );
}

export default PlaceItem;
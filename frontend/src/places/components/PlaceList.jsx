import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import PlaceItem from './PlaceItem';

import './PlaceList.css';

const PlaceList = props => {

  if (props.items.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>Места не найдены</h2>
          <br />
          <Button to="/places/new">Добавить место</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(place =>
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creatorId}
          location={place.location} />
      )}
    </ul>
  )

}

export default PlaceList;
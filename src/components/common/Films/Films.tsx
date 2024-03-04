import { useMemo, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import filmData from '@/data/films';

function Films() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const selectedDescription = useMemo(() => filmData[index].Description, [index]);

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {filmData.map(({id, imagePath, title, Description}) => (
          <Carousel.Item key={id}>
            <img src={imagePath} title={title} className="d-block w-100" />
            <Carousel.Caption>
              <h3 className="display-6">{title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div>
        {selectedDescription}
      </div>
    </>
  );
}

export default Films;
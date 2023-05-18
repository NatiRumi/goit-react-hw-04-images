import axios from 'axios';
import PropTypes from 'prop-types';

const GetArtikles = async (searchText, page, per_page) => {
  const searchParams = new URLSearchParams({
    key: '34747655-3d476a5c24b1ab5d2173a79ca',
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: per_page,
    page: page,
  });

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams.toString()}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default GetArtikles;

GetArtikles.propTypes = {
  searchText: PropTypes.string,
  page: PropTypes.number,
  per_page: PropTypes.number,
};

import axios from 'axios';

const getArticles = async (searchText, page) => {
  const searchParams = new URLSearchParams({
    key: '34747655-3d476a5c24b1ab5d2173a79ca',
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
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

export default getArticles;

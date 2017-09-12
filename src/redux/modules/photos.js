/** ACTION TYPES **/

const FETCH_PHOTO = 'FETCH_PHOTO'

/** ACTION CREATORS **/

 export const fetchPhotos = n => dispatch => (
      fetch(`https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${n}`)
      .then(res =>  res.json())
      .then(r => {
        dispatch({
          type: FETCH_PHOTO,
          payload:r.photos
        })
      })
    )

/** REDUCER **/

const initialState = {
  photos:[]
}

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case FETCH_PHOTO:
      return {
        ...state, photos: action.payload
      }


    default:
      return state
  }
}

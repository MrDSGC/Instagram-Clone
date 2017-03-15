import * as APIUtil from '../util/photos_api_util'
import { hashHistory } from 'react-router';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const fetchPhotos = userId => dispatch => (
  APIUtil.getPhotos(userId)
    .then(photos => dispatch(receivePhotos(photos)))
);

export const fetchPhoto = photoId => dispatch => (
  APIUtil.getPhoto(photoId)
    .then(photo => dispatch(receivePhoto(photo)))
);

export const uploadPhoto = photo => dispatch => (
  APIUtil.postPhoto(photo)
    .then(uploadedPhoto => dispatch(receivePhoto(uploadedPhoto)))
);

 //need to redirect to /:username
export const destroyPhoto = photoId => dispatch => (
  APIUtil.deletePhoto(photoId)
    .then(photo => {
      dispatch(removePhoto(photo))
      hashHistory.push("/")
    })
);

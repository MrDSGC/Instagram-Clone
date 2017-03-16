import * as APIUtil from '../util/photos_api_util'
import { hashHistory } from 'react-router';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});


export const fetchPhotos = username => dispatch => (
  APIUtil.getPhotos(username)
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

export const updatePhoto = photo => dispatch => (
  APIUtil.patchPhoto(photo)
    .then(editedPhoto => dispatch(receivePhoto(editedPhoto)))
)

export const destroyPhoto = photoId => dispatch => (
  APIUtil.deletePhoto(photoId)
    .then(photo => {hashHistory.push(`/${photo.poster.username}`)
    })
);

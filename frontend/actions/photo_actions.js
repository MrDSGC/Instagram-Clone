import * as APIUtil from '../util/photo_api_util';
import { hashHistory } from 'react-router';
import {fetchPhotos} from './photos_actions'
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const fetchPhoto = photoId => dispatch => (
  APIUtil.getPhoto(photoId)
    .then(photo => dispatch(receivePhoto(photo)))
);

export const uploadPhoto = photo => dispatch => (
  APIUtil.postPhoto(photo)
    .then(responsePhoto => dispatch(fetchPhotos(responsePhoto.poster.username)))
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

import * as APIUtil from '../util/photos_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const fetchPhotos = username => dispatch => (
  APIUtil.getPhotos(username)
    .then(photos => dispatch(receivePhotos(photos)))
);

# FresherNote

[InstaClone live][heroku]

[heroku]: https://fullstack-instaclone.herokuapp.com/

InstaClone is a full-stack web application inspired by Instagram.  It uses Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Image Rendering

  The photos in the site were stored in a single table in the database consisting of columns for values such as `id`, `poster_id`, `img_url`, `caption`, `location`, and  `created_at`. Single photos are directly rendered in the `PhotoContainer` and collections are displayed through the `PhotoIndex` index. When a user makes a request, an API call joins the user table with both the follows table and the photo table in order to access the photos of all of the users the current user is following. This array of photos is passed in one by one into `PhotoContainers` as props where they are rendered and held in the photos state until the user changes the state of page.In the absence of explore and discover options, if there are no photos in the feed, the index will render a random sample of 10 photos for the user.

Photo controller indexing method:
```ruby
def index
  if params[:username]
    poster = User.find_by(username: params[:username])
    @photos = Photo.where(poster_id: poster.id).includes(:likes).includes(:comments)
  else
    @photos = current_user.feed_photos
    if @photos.empty?
      @photos = Photo.all.sample(10)
    end
  end
  if @photos
    render 'api/photos/index'
  end
end
```

  The `PhotoIndex` renders another index of the current user's uploaded photos. This index is conducted when a request with the current user's username is passed as a parameter as opposed to no params. This fetches all of the user's photos in an array where they are mapped over and rendered individually. Each photo opens a more detailed view on click rendered again by the `PhotoContainer`

  In this case, the frontend makes a request for a single photo that is filtered by the passed in `photo_id` from the `PhotoIndex`. The single photo with its details is stored in a currentPhoto slice of state and rendered out in a Modal built from  `react-modal.js`.

  By passing in a `feed` value as a prop into the `PhotoContainer`, I was able to conditionally render and style elements so that the same component could be used in different views. I also split the photo and photos reducers to simplify the state in the frontend.

  The UI of the `PhotoContainer` and `PhotoIndex` were taken directly from Instagram for a more professional look.


### Likes

Implementing Likes began with the likes table in the database. The table was rather simple with only a `liker_id`, `photo_id`, and `id`. This join table was used to connect the user to the photo they liked.

In the spirit of replicating Instagram's functionality, the ability to like a photo was shared by both a like button and the double click action on the photo itself. Both will make API requests and post an entry into the like table. Because I decided not to create a like reducer, like actions are listened to by both photo reducers which update the states of the current photo and photo array to toggle the function of the button between like and unlike.


PhotosReducer that listens for like actions:
```javascript

const PhotosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_PHOTOS:
    newState = {};
     action.photos.forEach((photo)=> newState[photo.id] = photo);
     return newState;
    case RECEIVE_LIKE:
      newState[action.like.photo_id].current_user_liked = true
      newState[action.like.photo_id].like_count += 1
      return newState;
    case REMOVE_LIKE:
      newState[action.like.photo_id].current_user_liked = false;
      newState[action.like.photo_id].like_count -= 1;;
      return newState;
    default:
      return state;
  }
};
```

By setting the photos state to an object of objects based on their photo, it was much easier to access single photos and alter their individual states.


### Comments

Comments were very similar to Likes in implementation for single photo views. I decided to normalize the data in order for make rendering comments between single and feed views from the same slice of state easier.

Comments were rendered from a comments slice of state which contained an object of comment objects. Each comment object contained its own information for rendering a single comment. When viewing a single photo, the comments can be converted to an array through the `#_.values` method imported from lodash and mapped over in a list. In when navigating the feed, the comment slice of state holds all of the comments of all the photos on the feed. The comments were then filtered in the `CommentIndex` component and rendered to each corresponding `PhotoContainer`

Filtering the comments in state into individual corresponding comment indexes:
```javascript
belongsToPhoto (comment) {
  return comment.photo_id === this.props.photo_id;
}

const currentComments = this.props.comments.filter(this.belongsToPhoto)
```


## Future Directions for the Project

I have plans to continue adding features and improving the functionality of this website.

### hashtags

The Hashtag is one of the most defining features of Instagram and I plan on implementing this in the near future by adding a tag column to photos that can be added by putting a # before a word in the caption form. these # will create a link with the tag that redirects to a feed with photos that share the same tag.

### SearchBar

A SearchBar is a staple feature in Instagram that helps the user navigate throughout the site much more easily. I plan on using the `react-autocomplete` pack to create a search bar searches the database by username, location and hashtags

### Notification Feed

I want to implement a notification feed index by creating a table that records a notification entry with either a like, comment, or post event via a Notification listener that listens to multiple different actions in the front end. then we can send this back as an index of notifications that renders links to the corresponding events.

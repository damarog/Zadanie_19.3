import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const RATING_UP_COMMENT = 'THUMB_UP_COMMENT';
export const RATING_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const boundAddComment = text => dispatch(addComment(text));
boundAddComment('jakiś komentarz');

function editComment(text, id) {    
    return {
        type: EDIT_COMMENT,
        text,
        id: id // czy musi być uuid.v4() ?
    }
}

const boundEditComment = (text, id) => dispatch(editComment(text, id));
boundEditComment('Jakiś tekst', 10);

function removeComment(id) {    
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment(11);

function ratingComment(rating) {
    if (rating === true) {
        return {
            type: RATING_UP_COMMENT,
            likes: likes+1
        }
    } else if (rating === false) {
        return {
            type: RATING_DOWN_COMMENT,
            likes: likes-1
        }
    }
}

const boundRatingComment = rating => dispatch.ratingComment(rating);
boundRatingComment(false);
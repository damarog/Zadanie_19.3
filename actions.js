import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

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
        id: id 
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


function thumbUpComment(id, voteUp) {
    return {
        type: THUMB_UP_COMMENT,
        id,
		vote: voteUp
    }
}

const boundThumbUpComment = (id, text) => dispatch(thumbUpComment(id, voteUp));

function thumbDownComment(id, voteDown) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
		vote: voteDown
    }
}

const boundThumbDownComment = (id, text) => dispatch(thumbDownComment(id, voteDown));


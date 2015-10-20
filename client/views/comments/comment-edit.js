Template.commentEdit.onCreated(function () {
    Session.set('commentEditErrors', {});
});

Template.commentEdit.helpers({
    errorMessage: function (field) {
        return Session.get('commentEditErrors')[field];
    },
    errorClass: function (field) {
        return !!Session.get('commentEditErrors')[field] ? 'has-error' : '';
    }
});

Template.commentEdit.events({
    'submit form': function (e) {
        e.preventDefault();

        var currentCommentId = Router.current().params._id;
        var commentProperties = {
            body: $(e.target).find('[name=body]').val()
        }

        var errors = validateComment(commentProperties);
        if (errors.body)
            return Session.set('commentEditErrors', errors);

        Comments.update(currentCommentId, {
            $set: commentProperties
        }, function (error) {
            if (error) {
                // display the error to the user
                throwError(error.reason);
            } else {
                history.back();
            }
        });
    },

    'click .delete': function (e) {
        e.preventDefault();

        if (confirm("Delete this comment?")) {
            var currentCommentId = Router.current().params._id;
            Comments.remove(currentCommentId);
            history.back();
        }
    }
});

(function ($) {
    $(document).ready(function () {
        $('.comment-reply-form-settings').map(function () {
            var $self = $(this);
            var contentItemId = $self.data("contentitem-id");
            var activeCommentId = $self.data('active-comment-id');

            InitializeCommentReplyUI(contentItemId, activeCommentId);
        });

        $('.comment-reply-button').click(function () {
            var $self = $(this);
            var contentItemId = $self.data("contentitem-id");
            var commentId = $self.data('id');

            UpdateTheRepliedOnHiddenField(contentItemId, commentId);
            MoveReplyFormToBeacon(contentItemId, commentId);
            UpdateReplyButtonsUI(contentItemId, commentId);
            return false;
        });
    });

    function InitializeCommentReplyUI(contentItemId, activeCommentId) {
        UpdateTheRepliedOnHiddenField(contentItemId, activeCommentId);
        MoveReplyFormToBeacon(contentItemId, activeCommentId);
        InitializeRootReplyButtonUI();
    }

    function InitializeRootReplyButtonUI(contentItemId, activeCommentId) {
        if (activeCommentId === "root") {
            $('.comment-reply-button[data-contentitem-id="' + contentItemId + '"][data-id="root"]').hide();
        }
    }

    function UpdateTheRepliedOnHiddenField(contentItemId, commentId) {
        var $reply = $('.comments-repliedon[data-contentitem-id="' + contentItemId + '"]');
        // The ternary operator is because the UI uses root but Orchard expects the value to be empty
        $reply.val(commentId === "root" ? "" : commentId);
    }

    function UpdateReplyButtonsUI(contentItemId, commentId) {
        $('.comment-reply-button[data-contentitem-id="' + contentItemId + '"]').show();
        $('.comment-reply-button[data-contentitem-id="' + contentItemId + '"][data-id="' + commentId + '"]').fadeOut("fast");
    }

    function MoveReplyFormToBeacon(contentItemId, commentId) {
        var $replyFormBeacon = $('.comment-reply-form-beacon[data-contentitem-id="' + contentItemId + '"][data-id="' + commentId + '"]');
        $('.comment-form[data-contentitem-id="' + contentItemId + '"]')
            .slideUp("fast", function () {
                $(this)
                    .appendTo($replyFormBeacon)
                    .slideDown();
            });
    }
})(jQuery)
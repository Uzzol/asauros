 $(document).ready(function() {
        var container = $('.allposts');
        var loading = false;
        var page = 1;

        function loadMorePosts() {
            if (loading) return;
            loading = true;

            $.get('/page/' + (page + 1), function(data) {
                var posts = $(data).find('.allposts > .entry');
                if (posts.length > 0) {
                    container.append(posts);
                    page++;
                }
                loading = false;
            });
        }

        $(window).scroll(function() {
            var offset = 200;
            var scrollPosition = $(window).scrollTop() + $(window).height();
            var containerHeight = container.height();

            if (scrollPosition > containerHeight - offset) {
                loadMorePosts();
            }
        });
    });
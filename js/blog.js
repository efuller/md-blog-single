(function () {
	// Data object.
	var data = {
		title: 'Blog Modern Developer',
		description: 'This is Blog for Modern Developer',
		copyright: '© 2016 Modern Developer Inc.',
		email: 'blog@moderndeveloper.com',
		post: {
			featuredImage: 'images/featured-image.png',
			content: 'This is where the blog post data itself will be held',
			postedOn: new Date(),
			author: 'Paul Irish',
			tags: [
				{ tagName: "Optimization", tagUrl: "#" },
				{ tagName: "Cloudinary", tagUrl: "#" },
				{ tagName: "JPEG", tagUrl: "#" },
				{ tagName: "Tutorial", tagUrl: "#" },
			]
		},
		relatedArticles: [
			{ title: '5 More Awesome New Mozilla Technologies You’ve Never Heard Of' },
			{ title: 'Git Hook – npm install if package.json is Modified' },
			{ title: 'Complete Server Stability and Security with Plesk' },
			{ title: 'Use Mozilla Firefox DevTools in Chrome' },
			{ title: 'Great Tools to Use in Your Projects' },
		],
		recentArticles: [
			{
				title: 'Getting Your Selected Articles Published on Encyclopedia',
				postedOn: new Date(),
			},
			{
				title: 'Welcome to Encyclopedia Modern Developer',
				postedOn: new Date(),
			},
			{
				title: 'All Trappings',
				postedOn: new Date(),
			},
			{
				title: 'Getting Your Selected Article Published on Encyclopedia Two',
				postedOn: new Date(),
			},
			{
				title: 'Welcome to Encyclopedia Modern Developer Two',
				postedOn: new Date(),
			},
			{
				title: 'All Trappings Two',
				postedOn: new Date(),
			},
		],
		upComingPosts: [
			{
				title: 'Getting Your Selected Articles Published on Encyclopedia',
				postedOn: new Date(),
			},
			{
				title: 'Welcome to Encyclopedia Modern Developer',
				postedOn: new Date(),
			},
			{
				title: 'All Trappings',
				postedOn: new Date(),
			},
			{
				title: 'Getting Your Selected Article Published on Encyclopedia Two',
				postedOn: new Date(),
			},
			{
				title: 'Welcome to Encyclopedia Modern Developer Two',
				postedOn: new Date(),
			},
			{
				title: 'All Trappings Two',
				postedOn: new Date(),
			},
		],
		postComments: [
			{
				author: "Rory Duncan",
				comment: "Do you know of other examples of node-based optimizers that work in a fashion similar to cloudinary?",
				date: new Date(),
				replies: [
					{
						author: "Peter Change",
						comment: "I never heard of it. I’m using ShortPixel so far...",
						date: new Date(),
					}
				]
			}
		],
		searchText: '',
		emailAddress: '',
	};

	var postComment = document.getElementById("postComment");
	var searchInput = document.getElementById('header-search');
	var searchForm = document.getElementById('search-form');
        var comment = document.getElementById("comment");
	function addComment() {
		console.log("we are in addComment");
		var comment_author = 'Natalie Vaslavsky';
		var numberOfComments = data.postComments.length;
		var comment_content = comment.value;
		data.postComments.push({
			"comment_id": numberOfComments + 1,
			"comment_author": comment_author,
			"comment_date": new Date(),
			"comment_content": comment_content
		});
	}

	// Natalie: Please have a look at this. Comment is declared inside addComment()
	// and therefore isn't available outside that function.
	//Eric I moved declaring comment outside the function.
	//However, I have noticed that addComment function did get involved regardless.
	//I cannot explain why.
	comment.addEventListener('change', addComment, false);

	postComment.addEventListener('submit', function (event) {
		event.preventDefault();

		console.log("Get object " + data.postComments.length);
		console.log("Before display contents");
		console.log("title " + data.title);
		console.log("description " + data.description);
		for (var i = 0; i < data.postComments.length; i++) {
			console.log("comment_id = " + data.postComments[i].comment_id);
			console.log("comment_author = " + data.postComments[i].comment_author);
			console.log("comment_date = " + data.postComments[i].comment_date);
			console.log("comment_content = " + data.postComments[i].comment_content);
		}
	});

	// Bind event listener to the search form.
	searchForm.addEventListener('submit', submitSearch);

	// Clear the search input when you start typing.
	searchInput.addEventListener('keyup', hideValidationMessage);

	// Show validation message
	function showValidationMessage(input, message) {
		// Get the parent.
		var parent = input.parentNode;

		// Get the validation message element.
		var validationMessage = parent.querySelector('.validation-message');

		// Set the message.
		validationMessage.textContent = message || 'Please verify the input.';

		// Show the validation text.
		validationMessage.style.display = 'block';
	}

	function hideValidationMessage(e) {
		// Get the parent.
		var parent = e.target.parentNode;

		// Get the validation message element.
		var validationMessage = parent.querySelector('.validation-message');

		// Hide the validation message element.
		validationMessage.style.display = 'none';
	}

	// Submit search
	function submitSearch(e) {
		// Get the value of the input.
		var value = searchInput.value;

		// Prevent default action.
		e.preventDefault();

		// If no value, show validation message.
		if (!value) {
			showValidationMessage(searchInput, 'Please enter a search term.');
		}

		// Set the search text in our data object.
		data.searchText = value;

		// If there is search text.
		if (data.searchText) {
			// Log out the value.
			console.log(JSON.stringify(data, null, 2));
		}
	}
}());

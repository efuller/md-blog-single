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
		searchText: [],
		emailAddress: [],
	};

	// Cache DOM elements.
	var postComment = document.getElementById("postComment");
	var searchInput = document.getElementById('header-search');
	var searchForm = document.getElementById('search-form');
	var subscribeForm = document.getElementById('subscribe');
	var subscribeInput = document.getElementById('subscribe-input');
	var comment = document.getElementById('comment');

	// Bind event listener to the search form.
	searchForm.addEventListener('submit', submitSearch);

	// Clear the search input when you start typing.
	searchInput.addEventListener('keyup', hideValidationMessage);

	// Bind event for post comment submission.
	postComment.addEventListener('submit', addComment);

	// Bind subscribe form submission
	subscribeForm.addEventListener('submit', submitSubscribe);

	// Add in a new comment.
	function addComment(e) {
		// Prevent default
		e.preventDefault();

		console.log("We are adding in a comment.");

		var comment_author = 'Natalie Vaslavsky';
		var numberOfComments = data.postComments.length;
		var comment_content = comment.value;

		// Push comments into comments array.
		data.postComments.push({
			"comment_id": numberOfComments + 1,
			"comment_author": comment_author,
			"comment_date": new Date(),
			"comment_content": comment_content
		});

		// Let's display our current comments.
		console.log(JSON.stringify(data.postComments, null, 2));
	}

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
		data.searchText.push(value);

		// If there is search text.
		if (data.searchText) {
			// Log out the value.
			console.log(JSON.stringify(data, null, 2));
		}
	}

	// Subscribe submit.
	function submitSubscribe(e) {
		// Prevent default action.
		e.preventDefault();

		var email = subscribeInput.value.trim();

		// Add email to our array of submission.
		data.emailAddress.push(email);

		// Log out the data object.
		console.log(JSON.stringify(data, null, 2));
	}
}());

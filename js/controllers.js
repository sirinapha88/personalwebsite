app.controller("MainCtrl", function($scope, $location){
	$scope.isContact = false;
});
app.controller("ProjectCtrl", function($scope, $location){
	$scope.projects = [{
		projectName:"petbesthotels , Mar '16",
		desc:"Booking web site for pet hotels.",
		projectImg:"images/petbesthotels.png",
		projectLink:"petbesthotels.com"
	},
	{
		projectName:"faveFlix Feb '16",
		desc:"This app helps the user prioritize their movie viewing preferences.",
		projectImg:"images/faveFlix.png",
		projectLink:"https://github.com/sirinapha88/faveFlix"
	},
	{
		projectName:"Memory Game Nov '15",
		desc:"A memory game: matches a country flag with the food of that country.",
		projectImg:"images/memoryGame.png",
		projectLink:"https://github.com/sirinapha88/traditional_food_memory_game"
	},
	{
		projectName:"ShoppingCart App Feb '15",
		desc:"Angular app with back-end based on stories.",
		projectImg:"images/shoppingCart.png",
		projectLink:""
	},
	{
		projectName:"Spotify Search Dec '15",
		desc:"Using node request module with promises to access the spotify api.",
		projectImg:"images/spotify.png",
		projectLink:"https://github.com/sirinapha88/spotify-albums-and-tracks-server-side-remix"
	},
	{
		projectName:"Galvanize Read Jan '16",
		desc:"Back-end app based on stories.",
		projectImg:"images/gRead.png",
		projectLink:"https://github.com/sirinapha88/Galvanize-Reads"
	},
	{
		projectName:"Galvanize Eat Nov '15 ",
		desc:"Front-end app based on stories.",
		projectImg:"images/gEat.png",
		projectLink:"https://github.com/sirinapha88/g16-galvanize-eats"
	},
	{
		projectName:"Reddit Clone Jan '15",
		desc:"Angular app based on stories.",
		projectImg:"images/redditClone.png",
		projectLink:"https://github.com/sirinapha88/angular-curriculum-unit1/tree/master/unit1_reddit"
	}];
});
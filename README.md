# Reina Theme 
Reina theme is library based on bootstrap to make your web page more kawaii just like Reina <3. 

## Prerequisite
- Boostrap 4.0
- Vue.js 2

## Usage 
1. Copy assets/script.js and style.css to your project. 
2. Use this template

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Reina Theme</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/style.css">
	<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
</head>
<body>
	<div id="app">
		<nav class="container-fluid fixed-top">
			<div class="row">
				<div class="col-md-12 d-flex justify-content-between bg-primary text-light p-4">
					<div>
						<a href="#" class="text-light-important" @click.prevent="toggleNavbar">
							<i class="fas fa-bars"></i>
						</a>
					</div>
					
					<div class="font-weight-bold">Reina Theme</div>
				</div>
			</div>
		</nav>

		<div class="mt-5 pt-4"></div>

		<main class="container-fluid">
			<div class="row">
				<div class="col-8 col-sm-4 col-md-3 col-xl-2 sidebar bg-light p-0" v-show="navbarActive">
					<div class="p-5">
						<img src="assets/reina.jpg" alt="" class="avatar m-0 p-0 img-fluid rounded-circle p-1">
					</div>

					<ul>
						<a href="#">
							<li class="active">Home</li>
						</a>
						<a href="#">
							<li>About</li>
						</a>
						<a href="#">
							<li>Blogs</li>
						</a>
						<a href="#">
							<li>Books</li>
						</a>
						<a href="#">
							<li>Animes</li>
						</a>
					</ul>
				</div>

				<div :class="{ 'col-sm-8 offset-sm-4 col-md-9 offset-md-3 col-xl-10 offset-xl-2': navbarActive, 'col-12': !navbarActive }">

					<!-- insert your main content here -->
				
				</div>
			</div>
		</main>
	</div>
	
	<script src="assets/script.js"></script>
</body>
</html>
``` 

## Documentation 
*Comming soon.* 

## Demo
[https://philiplambok.github.io/](https://philiplambok.github.io/)

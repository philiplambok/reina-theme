new Vue({
	el: "#app", 
	
	data: {
		navbarActive: true
	}, 

	methods: {
		toggleNavbar(){
			this.navbarActive = !this.navbarActive
		}, 
		
		watchStatusNavbar(){
			if(window.innerWidth < 760) {
				this.navbarActive = false
			}
		}
	},

	mounted(){
		window.addEventListener('resize', () => {
			this.watchStatusNavbar();
		})
	},

	created(){
		this.watchStatusNavbar()
	}
})
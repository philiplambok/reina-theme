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
			}else {
				this.navbarActive = true
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
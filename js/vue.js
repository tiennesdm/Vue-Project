var vm = new Vue({
    el: '#app',
    data: {
        message: '123',
        arr: [{
                "url": "home.html",
                "name": "Index"
            },
            {
                "url": "index.html",
                "name": "Login"
            }
        ]
    },
    methods: {
        name() {
            return this.message = "shubham";
        }
    },
})
var vm2 = new Vue({
    el: '#carousel',
    data: {
        arr1: [{
                "href": "#one!",
                "url": "img/joy.jpg"

            },
            {
                "href": "two!",
                "url": "img/joy.jpg"

            },
            {
                "href": "#three!",
                "url": "img/joy.jpg"

            },
            {
                "href": "#four!",
                "url": "img/joy.jpg"

            }

        ]
    }
});
let vm3 = new Vue({
        el: "#gallerycard",
        data: {
            gallerycard: [{
                    "img1": "img/nature.jpg",
                    "title": "Iron",
                    "description": "I am a very simple card. I am good at containing small bits of information." +
                        "I am convenient because I require little markup to use effectively",
                    "cardAction": "Know More",
                    "link": "home.html"

                },
                {
                    "img1": "img/nature.jpg",
                    "title": "Card Title",
                    "description": "I am a very simple card. I am good at containing small bits of information." +
                        "I am convenient because I require little markup to use effectively",
                    "cardAction": "Know More",
                    "link": "home.html"

                },
                {
                    "img1": "img/nature.jpg",
                    "title": "Card Title",
                    "description": "I am a very simple card. I am good at containing small bits of information." +
                        "I am convenient because I require little markup to use effectively",
                    "cardAction": "Know More",
                    "link": "home.html"

                },
                {
                    "img1": "img/nature.jpg",
                    "title": "Card Title",
                    "description": "I am a very simple card. I am good at containing small bits of information." +
                        "I am convenient because I require little markup to use effectively",
                    "cardAction": "Know More",
                    "link": "home.html"

                },
                {
                    "img1": "img/nature.jpg",
                    "title": "Card Title",
                    "description": "I am a very simple card. I am good at containing small bits of information." +
                        "I am convenient because I require little markup to use effectively",
                    "cardAction": "Know More",
                    "link": "home.html"

                },
                {
                    "img1": "img/nature.jpg",
                    "title": "Card Title",
                    "description": "I am a very simple card. I am good at containing small bits of information." +
                        "I am convenient because I require little markup to use effectively",
                    "cardAction": "Know More",
                    "link": "home.html"

                }
            ]
        }
    })
    //vm.message = 'new message' // change data
    //vm.$el.textContent === 'new message' // false
    //Vue.nextTick(function() {
    //  vm.$el.textContent === 'new message' // true
    //})
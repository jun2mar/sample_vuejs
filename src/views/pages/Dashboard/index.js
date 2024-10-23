
export default {
    data() {
        return {
            data: null,
        };
    },
    methods: {
        async logout(){
            await this.$store.commit("logout");
            this.$router.push({ path: '/login' });
        },
        index(){
            let user = this.$store.getters.isLoggedIn;
            axios.get(`/users`).then(async (data) => {
                this.data = data.data
            }).catch((error) => {
                if (typeof error.response.data === 'object'){
                    this.formerror = error.response.data;
                }else{
                    toast.error(error.response.data, {
                        position: 'top-right',
                        autoClose: 3000,
                    });
                }
            });
        },
    },
    async created() {
        await this.index();
    },
    watch:{

    },
    mounted(){
        
    },
};
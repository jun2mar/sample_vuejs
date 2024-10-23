export default {
    data() {
        return {
            formerror: {},
            isSubmit: false,
            form: new Form({
                email: 'admin@gmail.com',
                password: '12345',
            })
        };
    },
    methods: {
        submit() {
            this.formerror = {};
            this.isSubmit = true;
            axios.post(`/login`, { ...this.form }).then(async (data) => {
                toast.success('Successfuly Logged In', {
                    position: 'top-right',
                    autoClose: 3000,
                });
                await this.$store.commit("loginSuccess", data.data);
                this.$router.push({ path: '/' });
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
            this.isSubmit = false;
        },
    },
    async created() {
        
    },
    watch:{

    },
    mounted(){
        
    },
};
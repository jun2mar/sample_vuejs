export default {
    data() {
        return {
            formerror: {},
            isSubmit: false,
            form: new Form({
                id: null,
                name: null,
                email: null,
                password: null,
            })
        };
    },
    methods: {
        store() {
            this.formerror = {};
            this.isSubmit = true;
            axios.post(`/users`, { ...this.form }).then(async (data) => {
                toast.success('Successfuly Registered, Please Login', {
                    position: 'top-right',
                    autoClose: 3000,
                });
                this.form.reset();
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
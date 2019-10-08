<template>
    <div class="row wrap">
        <v-card class="col-sm-12 " height="400">
            <v-card-title>{{product.productName}}</v-card-title>
            <v-card-text>
                Size: {{product.size}}<br>
                Color: {{product.color}}<br>
                Type: {{product.type}}<br>
                Price: {{product.price}}
            </v-card-text>
            <v-card-actions>
                <v-btn :to="{
                    name: 'shoeedit',
                    params:{
                        id: product.productid
                    }
                }">Edit</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import restApi from '../../api/API'
    export default {
        data: () => ({
                product:{}
        }),
        mounted() {
            const { id } = this.$route.params;
            this.fetchProduct(id);
        },
        methods: {
            fetchProduct(id){
                restApi.get('shoes/'+id)
                    .then((data) => {
                        this.product = data.data;
                    });
            },
        },
    }
</script>
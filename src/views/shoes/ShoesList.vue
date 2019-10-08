<template>
    <div class="row wrap">
        <v-card v-for="product in products" v-bind:key="product.productid"
                max-width="344"
                class="col-sm-4 ma-2"

        >
            <v-card-title>{{product.productName}}</v-card-title>
            <v-card-text>
                Size: {{product.size}}<br>
                Color: {{product.color}}<br>
                Type: {{product.type}}<br>
                Price: {{product.price}}
            </v-card-text>
            <v-card-actions>
                <v-btn :to="{
                    name: 'shoe',
                    params: {
                    id: product.productid
                    }
                }">View</v-btn>
                <v-btn v-on:click="deleteShoe(product)" class="">Delete</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
¨
<script>
    import restApi from '../../api/API';
    export default {
        mounted() {
            this.fetchProducts()
        },
        data: ()  => ({
                products: []
        }),
        methods: {
            fetchProducts() {
                restApi.get('shoes')
                    .then((data)=>{
                        this.products = data.data;
                    });
            },
            async deleteShoe(product){
                let result = await restApi.delete('shoes/'+product.productid)
                if(result.status !== 200){
                    //wat
                }
                else
                {
                    this.fetchProducts()
                }

            },
        }
    };
</script>
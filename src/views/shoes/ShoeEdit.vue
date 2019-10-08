<template>
        <v-layout>
            <v-flex class="xs12">
                <v-form ref="form">
                    <v-container>
                        <v-row>
                            <v-text-field
                                    v-model="product.productName"
                                    label="Product Name"

                                    required
                            ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field
                                    v-model="product.size"
                                    label="Product Size"

                                    required
                            ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field
                                    v-model="product.color"
                                    label="Product Color"

                                    required
                            ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field
                                    v-model="product.price"
                                    label="Product Price"

                                    required
                            ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field
                                    v-model="product.type"
                                    label="Product Type"
                                    required
                            ></v-text-field>
                        </v-row>
                    </v-container>
                    <v-btn @click="updateShoe(product.productid)" class="float-left">
                        Submit
                    </v-btn>
                    <v-btn @click="clear" class="float-right">
                        Clear
                    </v-btn>
                </v-form>
            </v-flex>
        </v-layout>
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
            updateShoe(id){
                restApi.put('shoes/'+id, {
                    productid: this.product.productid,
                    productName: this.product.productName,
                    size: this.product.size,
                    color: this.product.color,
                    price: this.product.price,
                    type: this.product.type
                })
            },
            clear(){
                this.$refs.form.reset();
            },
        },
    }
</script>
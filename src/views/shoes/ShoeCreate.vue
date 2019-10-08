<template>
    <v-layout>
        <v-flex class="xs12">
            <v-form v-model="valid" ref="form">
                <v-container>
                    <v-row>
                            <v-text-field
                                    v-model="product.productName"
                                    label="Product Name"
                                    :rules="productNameRules"
                                    required
                            ></v-text-field>
                    </v-row>
                    <v-row>
                            <v-text-field
                                    v-model="product.size"
                                    label="Product Size"
                                    :rules="productSizeRules"
                                    required
                            ></v-text-field>
                    </v-row>
                    <v-row>
                            <v-text-field
                                    v-model="product.color"
                                    label="Product Color"
                                    :rules="productColorRules"
                                    required
                            ></v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field
                                v-model="product.price"
                                label="Product Price"
                                :rules="productPriceRules"
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
                <v-btn @click="submit" class="float-left">
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

        data() {
            return{
                product: {
                    productName: '',
                    size: 0,
                    color: '',
                    price: 0,
                    type: ''
                },
                productNameRules: [(productName) => {
                    if(productName.trim() ==='') return 'Title must not be empty';
                    return true;
                }],
                productPriceRules: [(price) => {
                    if(isNaN(price)) return 'Price must be a valid number';
                    if(Number(price) <= 0) return 'Price must be greater than 0';
                    return true;
                }],
                productSizeRules: [(size) => {
                    if(isNaN(size)) return 'Size must be a valid number';
                    if(Number(size) <= 0) return 'Size must be greater than 0';
                    return true;
                }],
                productColorRules: [(color) => {
                    if(color.trim()==='') return 'Color must not be empty'
                    return true;
                }]
            };
        },
        methods: {
            submit(){
                if(this.valid){
                    restApi.post('shoes',{
                        productName: this.product.productName,
                        size: this.product.size,
                        color: this.product.color,
                        price: this.product.price,
                        type: this.product.type
                    })
                }

            },
            clear(){
                this.$refs.form.reset();
            },
        },

    }
</script>

<template>
        <div class="scroll">
            <div class="my_con">
                <div class="todo_head">
                    <h2>TODOLIST</h2>
                    <input type="text" placeholder="添加ToDo" v-model="text" @keyup.enter="addtodo">
                </div>
                <div class="todo_con">
                    <div class="todo_box_one">
                        <div class="title_One">
                            <h3>正在进行</h3>
                            <span>{{list.length}}</span>
                        </div>
                        <ul class="todo_list">
                            <li v-for="(v,i) in list" v-if="!v.flag" :key="i">
                                <div class="prev">
                                    <input type="checkbox" @change="morecheck(i)">
                                    <p>{{v.name}}</p>
                                </div>
                                <b class="del" @click="del(i)">x</b>
                            </li>
                        </ul>
                    </div>
                    <div class="todo_box_one">
                        <div class="title_One">
                          <h3>已经完成</h3>
                            <span>{{newlist.length}}</span>
                        </div>
                        <ul class="todo_list">
                            <li v-for="(v,ind) in newlist" :key="ind">
                                <div class="prev">
                                    <input type="checkbox" checked="!v.flag">
                                    <p>{{v.name}}</p>
                                </div>
                                <b class="del" @click="dele(ind)">x</b>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- {{$store.state.name}}{{name}}{{name2}}{{age}}{{sex}}{{man}}{{woman}}{{count}}{{arr}}
                <button @click="setName">改变name</button> -->
            </div>
            <Footer />
        </div>
</template>
<script>
    import Footer from "../../components/footer.vue";
    import {
        mapState
    } from "vuex"
    export default {
        data() {
            return {
                text: ""
            }
        },
        mounted() {

        },
        computed: {
            ...mapState("todo", ["list", "newlist"])
        },
        methods: {
            addtodo() {
                this.$store.commit("todo/ADD_TODOLIST", {
                    id: this.list.length,
                    name: this.text,
                    flag: false
                })
            },
            del(index) {
                this.$store.commit("todo/DEL_TODOLIST", index)
            },
            dele(index) {
                this.$store.commit("todo/DELE_TODOLIST", index)
            },
            morecheck(ind) {
                this.$store.commit("todo/CHECK_TODOLIST", ind)
                console.log(this.list)
            }
        },
        components: {
            Footer
        }
        // computed: {
        //     name() {
        //         return this.$store.state.name
        //     },
        //     ...mapState(["name", "name2", "age", "sex", "arr"]),
        //     ...mapGetters(["man", "woman", "count"])
        // },
        // methods: {
        //     setName() {
        //         this.$store.commit("SET_NAME", {
        //             name: "段景啊"
        //         })
        //     }
        // }
    }
</script>
<style lang="scss" scoped>
    .scroll {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .my_con {
        flex: 1;
        font-size: 18px;
        display: flex;
        flex-direction: column;
    }
    
    .todo_head {
        width: 100%;
        height: 50px;
        background: black;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        box-sizing: border-box;
        align-items: center;
        h2 {
            font-size: 25px;
            color: #ddd;
        }
        input {
            border-radius: 5px;
            border: 0;
            outline: none;
            height: 30px;
            padding-left: 10px;
        }
    }
    
    .todo_con {
        flex: 1;
        background: #ddd;
    }
    
    .todo_box_one {
        .title_One {
            height: 90px;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
            align-items: center;
            h3 {
                font-size: 25px;
            }
            span {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: #E6E6FA;
                color: rgba(0, 0, 0, .4);
                text-align: center;
                line-height: 30px;
            }
        }
        .todo_list {
            li {
                display: flex;
                height: 35px;
                justify-content: space-between;
                padding: 0 10px;
                box-sizing: border-box;
                align-items: center;
                background: #fff;
                margin: 10px;
                .prev {
                    display: flex;
                    height: 30px;
                    align-items: center;
                    input {
                        width: 20px;
                        height: 20px;
                    }
                    p {
                        margin-left: 10px;
                    }
                }
                b {
                    width: 25px;
                    height: 25px;
                    background: #ddd;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 25px;
                    font-weight: normal;
                    color: rgba(0, 0, 0, .4);
                }
            }
        }
    }
</style>
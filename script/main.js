"use strict";

Vue.component("my-works", {
    props:{
        date: {
            type:String,
            default: "20XX.MM",
        },
        work:{
            type:String,
            default: "実績",
        }
    },
    data(){
        return{
            works:[{
                date: "201X.MM",
                work: "実績",
            },{
                date: "201X.MM",
                work: "実績",
            },{
                date: "201X.MM",
                work: "実績",
            },{
                date: "201X.MM",
                work: "実績",
            },],
        }
    },
    template: `<table>
    <thead>
        <tr>
            <th>年月</th>
            <th>実績</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for='item in works'>
            <td>{{item.date}}</td>
            <td>{{item.work}}</td>
        </tr>
    </tbody></table>`,
});

Vue.component("my-orders", {
    props:{
        order: {
            type:String,
            default: "注文内容",
        },
        price:{
            type:String,
            default: "価格",
        }
    },
    data(){
        return{
            orders:[{
                order: "アイコン（～3色）",
                price: "2,000～"
            },{
                order: "アイコン（フルカラー）",
                price: "3,000～"
            },{
                order: "全身立ち絵（モノクロ）",
                price: "10,000～"
            },{
                order: "全身立ち絵（フルカラー）",
                price: "15,000～"
            },{
                order: "モデリング（Live2D）",
                price: "20,000～"
            },],
        }
    },
    template: `<table>
    <thead>
        <tr>
            <th>ご依頼内容</th>
            <th>価格（単位：円）</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for='item in orders'>
            <td>{{item.order}}</td>
            <td>{{item.price}}</td>
        </tr>
    </tbody></table>`,
});

var vm = new Vue({
    el: "#app",
    data:{
        isShow: false,
    },
    methods:{
        showMenu(){
            this.isShow= !this.isShow;
        }
    }
})
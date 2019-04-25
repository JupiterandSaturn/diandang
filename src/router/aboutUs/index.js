import round from '@/components/homepage/round.vue'


export default {
    name:"aboutUs",
    path:"/aboutUs",
    component: ()=>import("../../views/aboutUs")
}
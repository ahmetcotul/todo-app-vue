<script lang="js">
import LangChange from "./LangChange.vue";
export default{
    name: 'TodoListNew',
    components:{
        LangChange
    },
    computed: {
        today() {
        const locale = this.$i18n.locale; 
        const date = new Date();
        return date.toLocaleDateString(locale, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        },
    },
    data(){
        return {
            newTodo: '',
            todos : [],

        };
    },
    methods:{
        addTodo(){
            if(this.newTodo.trim()){
                this.todos.push({text:this.newTodo, completed:false});
                this.newTodo = '';
            }
        },
        removeTodo(index){
            this.todos.splice(index,1);
        },
       
    
    }
}
</script>
<template  >
    <LangChange />
    <div class="flex flex-col place-items-center w-full">
        <h1 class="text-md font-italic mb-4">~{{ today }}~  </h1>
       

        <div class="text ">{{ $t('message.todo_name') }}</div>
        <form class="max-w-md mx-auto" @submit.prevent="addTodo">
            <input v-model="newTodo" class=" w-75 p-2 text-sm  border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  " :placeholder=" $t('message.place_holder') "/>
            <button class="w-25 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-80" type="submit">{{$t('message.add')}}</button>
        </form>
        <ul class="space-y-1    ">
            <li class="w-full h-full p-2 flex items-center rounded-lg border border-2 border-gray-300" v-for="(todo,index ) in todos":key="index">
                <label>
                    <input class="mr-1" type="checkbox"  v-model="todo.completed"  />
                    <span class="m-4" :class="{'line-through text-orange-400':todo.completed}">{{ index+1}}. {{todo.text }}</span>
                </label>


                <button class="p-2 ml-auto text-white bg-red-700 rounded-lg p-0.5 text-sm" @click="removeTodo(index)"><i class="pi pi-trash" style="font-size: 1rem"></i>
                </button>

            </li>
        </ul>
        <div >

        </div>
    </div>
</template>


import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
    }),
    getters: {
        getUsers(state) {
            return state.users;
        },
    },
    actions: {
        async fetchUsers() {
            try {
                const data = await axios.get(
                    "http://127.0.0.1:8000/jiffy"
                );
                this.users = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
});

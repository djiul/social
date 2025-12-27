import rerenderTree from "../../render";

let state = {
    profilePage: {
        postData: [
            { message: "Hi", id: 1 },
            { message: "How are you?", id: 2 },
            { message: "Nice to meet you!", id: 3 },
            { message: "I am hungry.", id: 4 },

        ]
    },
    messagePage: {
        messageData: [
            { name: "Вася", message: "Я Вася!", id: 1 },
            { name: "Галкин", message: "Алла это я, твой муж!", id: 2 },
            { name: "Алла", message: "Я очень рада тебе!", id: 3 },
        ]
    },
}
export default state;

 export let addPost = (text)=>{
    let newPost = {
        message: text,
        id: 5
    }
    state.profilePage.postData.unshift(newPost)
    console.log(state)
    rerenderTree(state)
}



import { createApp } from "vue";

import App from "./App";
import FriendContact from "./components/FriendContact";
import FriendForm from "./components/FriendForm";

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("friend-form", FriendForm);

app.mount("#app");

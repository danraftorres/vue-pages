<template>
    <div>
        <Calendar></Calendar>
        <Dialog></Dialog>
    </div>
</template>

<script>
// @ is an alias to /src
import Calendar from "@/components/Calendar.vue";
import Dialog from "@/components/Dialog.vue"

export default {
    name: "Home",
    components: {
        Calendar,
        Dialog
    }
};
</script>

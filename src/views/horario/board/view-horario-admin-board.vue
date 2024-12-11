<template>
     <v-card>
        <v-card-title class="text-center">
            <v-row>
                <v-col class="text-left">
                    <v-btn @click.prevent=""><v-icon>arrow_back</v-icon></v-btn>
                </v-col>
                <v-col class="text-center">{{ calendarDate }}</v-col>
                <v-col class="text-right">
                    <v-btn @click.prevent=""><v-icon>arrow_forward</v-icon></v-btn>
                </v-col>
            </v-row>
        </v-card-title>
        <v-card-text>
            <v-calendar max-height: 400px :interval-height="100" class="calendar" v-model="calendarDate" :weekdays="customWeekdays"  :hide-week-number="true"  :hide-header="true"  :view-mode="calendarType">
                <v-calendar-month-day></v-calendar-month-day>
            </v-calendar>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">


export default{
    props:{
        calendarType:{
            type: String as () => 'month' | 'day' | 'week',
            default: 'month'
        }
    },
    setup(){
        const calendarDate = ref([new Date()]);
        const customWeekdays = [1, 2, 3, 4, 5, 6];
        return{
            calendarDate,
             customWeekdays
        }
    }
}
</script>

<style>
.v-calendar-month__days > .v-calendar-month__day {
    min-height: 77px;
}
</style>
<template>
     <v-card  class="overflow-y-auto">
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
            <v-calendar  
                v-if="calendarType != 'day'"
                class="calendar" 
                v-model="calendarDate" 
                interval-format="" 
                :interval-duration="15" 
                :interval-start="30" 
                :interval-height="60" 
                :intervals="22" 
                :hide-day-header="calendarType == 'day' ? true : false"  
                :weekdays="customWeekdays"  
                :hide-week-number="true"  
                :hide-header="true"  
                show-adjacent-months 
                :view-mode="calendarType"
                :events="events"
            >
            </v-calendar>
            <v-table v-else>
                <thead>
                    <th>Horario</th>
                    <th>Horario</th>
                    <th>Compareceu</th>
                </thead>
                <tbody>

                </tbody>
            </v-table>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">


export default{
    props:{
        calendarType:{
            type: String as () => 'month' | 'day' | 'week',
            default: 'month',
            required: true
        } 
    },
    setup(){
        const calendarDate = ref([new Date()]);
        const customWeekdays = [1, 2, 3, 4, 5, 6];
        const events = [
        {
            title: 'teste',
            start:  new Date("2024-12-11T08:00:00-03:00"),
            end:    new Date("2024-12-11T08:15:00-03:00"),
            color: 'yellow',
            allDay: false,
          },
        {
            title: 'teste2',
            start:  new Date("2024-12-11T08:30:00-03:00"),
            end:    new Date("2024-12-11T08:44:00-03:00"),
            color: 'blue',
            allDay: false,
          },
        ]
        return{
            events,
            calendarDate,
             customWeekdays
        }
    }
}
</script>

<style>
.v-calendar-month__days > .v-calendar-month__day {
    min-height: 85px;
}

.v-calendar-weekly__head-weekday{
    padding: 0;
    max-height: 40px
}
</style>
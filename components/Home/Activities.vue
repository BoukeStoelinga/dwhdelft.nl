<i18n lang="yaml">
en:
  title: Upcoming activities
  defaults:
    bar:
      banner_title: Weekly bar night
      banner_subtitle: Open for everyone
      title: Bar Night
      date: Every week, see opening hours
    eating_out:
      banner_title: Weekly dinner
      banner_subtitle: Members only, registration required
      title: EatingOUT
      date: Every Monday evening, see opening hours
nl:
  title: Aankomende activiteiten
  defaults:
    bar:
      banner_title: Wekelijkse baravond
      banner_subtitle: Open voor iedereen
      title: Baravond
      date: Elke week te bezoeken, zie de openingstijden
    eating_out:
      banner_title: Wekelijkse eettafel
      banner_subtitle: Alleen voor leden, aanmelden verplicht
      title: EatingOUT
      date: Elke maandagavond, zie de openingstijden
</i18n>

<template>
  <div class="container px-4 mx-auto py-12">
    <div class="text-center">
      <h1 class="tracking-wide font-semibold uppercase text-2xl mb-6 mx-2">
        {{ $t('title') }}
      </h1>
    </div>
    <div class="md:flex justify-center">
      <div v-for="activity in activities" :key="activity.name" class="bg-white rounded shadow flex-1 mx-2 mt-4">
        <a
          :href="'https://www.facebook.com/events/' + activity.id"
          target="_blank"
          class="flex flex-col justify-between h-full"
        >
          <div>
            <div
              :style="'background-image: url(' + activity.cover.source + ');'"
              class="aspect-w-191 aspect-h-100 relative overflow-hidden bg-cover bg-center rounded-t"
            />
            <div class="px-4 pt-3">
              <h3 class="text-brand-450 text-xl font-bold">{{ activity.name }}</h3>
            </div>
          </div>
          <div class="px-4 pb-4">
            <span class="text-gray-450">{{ formatDate(activity.start_time) }}</span>
          </div>
        </a>
      </div>
      <div v-if="activities.length < 3" class="bg-white rounded shadow flex-1 mx-2 mt-4">
        <div class="flex flex-col h-full">
          <div class="flex-1 bg-brand-300 py-4">
            <div class="rounded-full w-20 h-20 p-6 bg-white mt-2 mb-6 text-brand-450 mx-auto">
              <Zondicon icon="beverage" class="fill-current" />
            </div>
            <h3 class="text-xl font-bold uppercase tracking-wide text-white text-center">
              {{ $t('defaults.bar.banner_title') }}
            </h3>
            <h4 class="uppercase tracking-wide text-white text-center">
              {{ $t('defaults.bar.banner_subtitle') }}
            </h4>
          </div>
          <div class="p-4 pt-3">
            <h3 class="text-brand-450 text-xl font-bold">{{ $t('defaults.bar.title') }}</h3>
            <span class="text-gray-500">{{ $t('defaults.bar.date') }}</span>
          </div>
        </div>
      </div>
      <div v-if="activities.length < 2" class="bg-white rounded shadow flex-1 mx-2 mt-4">
        <a href="https://dwhdelft.nl/eatingout">
          <div class="flex flex-col h-full">
            <div class="flex-1 bg-brand-300 py-4">
              <div class="rounded-full w-20 h-20 p-6 bg-white mt-2 mb-6 text-brand-450 mx-auto">
                <Zondicon icon="location-food" class="fill-current" />
              </div>
              <h3 class="text-xl font-bold uppercase tracking-wide text-white text-center">
                {{ $t('defaults.eating_out.banner_title') }}
              </h3>
              <h4 class="uppercase tracking-wide text-white text-center">
                {{ $t('defaults.eating_out.banner_subtitle') }}
              </h4>
            </div>
            <div class="p-4 pt-3">
              <h3 class="text-brand-450 text-xl font-bold">{{ $t('defaults.eating_out.title') }}</h3>
              <span class="text-gray-500">{{ $t('defaults.eating_out.date') }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import 'dayjs/locale/nl'
import Zondicon from 'vue-zondicons'
import activitiesFile from '~/static/activities.json'

export default {
  components: { Zondicon },
  props: ['title'],
  data() {
    return {
      activities: JSON.parse(JSON.stringify(activitiesFile))
        .data.sort((a, b) => a.start_time.localeCompare(b.start_time))
        .splice(0, 3),
    }
  },
  methods: {
    formatDate(date) {
      date = date.slice(0, -2) + ':' + date.slice(-2)

      if (this.$i18n.locale === 'nl') {
        dayjs.locale('nl')
        return dayjs(date).format('D MMMM YYYY [om] HH:mm uur')
      }

      return dayjs(date).format('MMMM D, YYYY [at] h:mm A')
    },
  },
}
</script>

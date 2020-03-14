<template>
  <div class="news page">
    <div>
      <h1>{{ newsText }}</h1>
      <br />
      <br />
    </div>

    <div class="news-list">
      <!-- <DataBox :loading="loading" :isEmpty="isEmpty" :error="error">
        <div class="item" v-for="item in news" :key="item.id">
          {{item.title}}
        </div>
      </DataBox>-->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
import prepareFetchParamsMixin from '../../mixins/prepareFetchParamsMixin'

export default {
  name: 'NewsPage',
  mixins: [prepareQueryParamsMixin, prepareFetchParamsMixin],

  props: {
    limit: { type: Number },
    page: { type: Number }
  },

  watch: {
    'pagination.limit': () => {
      this.$router.replace({
        query: this.useInUrlQueryPropList
      })
      this.fetchData()
    },
    'pagination.page': () => {
      this.$router.replace({
        query: this.useInUrlQueryPropList
      })
      this.fetchData()
    },
    limit: {
      handler: newVal => {
        this.$store.commit('news/SET_PAGINATION', { limit: newVal })
      },
      immediate: true
    },
    page: {
      handler: newVal => {
        this.$store.commit('news/SET_PAGINATION', { page: newVal })
      },
      immediate: true
    }
  },

  data () {
    return {
      newsText: 'NewsPage Component'
    }
  },

  methods: {
    fetchData () {
      this.$store.dispatch('news/getListPublic', { params: this.fetchParams })
    }
  },

  computed: {
    ...mapState('news', {
      news: 'items',
      pagination: 'pagination',
      error: 'error',
      loading: 'loading'
    }),
    ...mapGetters('news', ['isEmpty']),
    useInUrlQueryPropList () {
      return this.prepareQueryParamsMixin({
        limit: this.pagination.limit,
        page: this.pagination.page
      })
    },
    fetchParams () {
      const pagination = this.prepareFetchParamsMixin({
        limit: this.pagination.limit,
        page: this.pagination.page
      })

      return { ...pagination }
    }
  },

  created () {
    this.fetchData()
  }
}
</script>

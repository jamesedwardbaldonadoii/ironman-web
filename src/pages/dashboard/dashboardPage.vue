<template>
  <div class="page dashboard">
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

  computed: {
    ...mapState('news', {
      news: 'items',
      pagination: 'pagination',
      error: 'error',
      loading: 'loading'
    }),
    ...mapGetters('news', ['isEmpty'])
  }
}
</script>

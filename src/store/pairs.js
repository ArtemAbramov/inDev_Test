import axios from 'axios'

export default {
  state: {
    pairs: []
  },
  mutations: {
    loadPairs(state, payload) {
      state.pairs = payload
    }
  },
  actions: {
    loadPairs({commit}) {
      let data = []
      axios.get('https://api.kraken.com/0/public/Ticker?pair=XRPUSD,REPUSD,BATUSD,XBTUSD,ADAUSD')
      .then(res => {
        const pairs = res.data.result

        // Parsing the result of a query into a convenient object
        for(let pair in pairs) {
          const obj = {}
          const ask = pairs[pair].a
          const bid = pairs[pair].b
          obj.pair = pair
          obj.bid = bid[0]
          obj.ask = ask[0]
          data.push(obj)
        }
      })
      commit('loadPairs', data)
    }
  },
  getters: {
    getPairs(state) {
      return state.pairs
    }
  }
}
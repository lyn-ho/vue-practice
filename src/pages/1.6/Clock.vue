<template lang="pug">
  div {{ log('render') }} {{ now }}
    button(@click="start = !start") {{ start ? '停止' : '开始'}}

</template>

<script>
import moment from "moment";
import { setInterval } from "timers";

export default {
  data: function() {
    console.log("data");
    this.moment = moment;
    this.log = window.console.log;

    return {
      now: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      start: false
    };
  },

  watch: {
    start() {
      this.startClock();
    }
  },

  beforeCreate() {
    console.log("beforeCreate");
  },

  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  mounted() {
    console.log("mounted");
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },

  updated() {
    console.log("updated");
  },

  beforeDestroy() {
    console.log("beforeDestroy");
  },

  destroyed() {
    console.log("destroyed");
  },

  methods: {
    startClock() {
      clearInterval(this.clockInterval);
      if (this.start) {
        this.clockInterval = setInterval(() => {
          this.now = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        }, 1000);
      }
    }
  }
};
</script>
